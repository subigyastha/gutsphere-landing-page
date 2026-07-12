"""Re-key cream + green backgrounds on problem GIFs, then compress for web.

Optimizes by resizing before flood-fill so work happens at web resolution.
"""

from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]

MAX_WIDTH = 640
FRAME_STEP = 3
COLORS = 48
DURATION_MS = 80
ALPHA_CUTOFF = 128

CREAM_MIN_BRIGHT = 228
CREAM_MAX_SAT = 0.14


def is_green_screen(r: int, g: int, b: int, a: int) -> bool:
    return a < ALPHA_CUTOFF or (g > 200 and r < 90 and b < 90)


def is_cream(r: int, g: int, b: int, a: int) -> bool:
    if a < ALPHA_CUTOFF:
        return True
    mx = max(r, g, b)
    mn = min(r, g, b)
    if mx < CREAM_MIN_BRIGHT:
        return False
    sat = (mx - mn) / mx if mx else 0
    return sat <= CREAM_MAX_SAT


def is_background(r: int, g: int, b: int, a: int) -> bool:
    return is_green_screen(r, g, b, a) or is_cream(r, g, b, a)


def flood_key_background(frame: Image.Image) -> Image.Image:
    """Make green + cream backdrop transparent via edge flood-fill."""
    rgba = frame.convert("RGBA")
    w, h = rgba.size
    pixels = rgba.load()
    visited = bytearray(w * h)
    queue: deque[tuple[int, int]] = deque()

    def try_enqueue(x: int, y: int) -> None:
        if x < 0 or y < 0 or x >= w or y >= h:
            return
        idx = y * w + x
        if visited[idx]:
            return
        r, g, b, a = pixels[x, y]
        if not is_background(r, g, b, a):
            return
        visited[idx] = 1
        queue.append((x, y))

    for x in range(w):
        try_enqueue(x, 0)
        try_enqueue(x, h - 1)
    for y in range(h):
        try_enqueue(0, y)
        try_enqueue(w - 1, y)

    while queue:
        x, y = queue.popleft()
        pixels[x, y] = (0, 0, 0, 0)
        try_enqueue(x - 1, y)
        try_enqueue(x + 1, y)
        try_enqueue(x, y - 1)
        try_enqueue(x, y + 1)

    # Clear leftover pure green pockets
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if is_green_screen(r, g, b, a):
                pixels[x, y] = (0, 0, 0, 0)

    return rgba


def load_and_prepare(path: Path) -> tuple[list[Image.Image], int]:
    gif = Image.open(path)
    loop = gif.info.get("loop", 0)
    frames: list[Image.Image] = []
    index = 0

    try:
        while True:
            if index % FRAME_STEP == 0:
                frame = ImageOps.exif_transpose(gif.copy()).convert("RGBA")
                # Resize first — flood-fill at web size is much faster
                width, height = frame.size
                if width > MAX_WIDTH:
                    scale = MAX_WIDTH / width
                    frame = frame.resize(
                        (MAX_WIDTH, max(1, round(height * scale))),
                        Image.Resampling.LANCZOS,
                    )
                frames.append(flood_key_background(frame))
                print(f"  frame {index} keyed ({len(frames)} kept)", flush=True)
            gif.seek(gif.tell() + 1)
            index += 1
    except EOFError:
        pass

    return frames, loop


def rgba_to_rgb_on_white(frame: Image.Image) -> tuple[Image.Image, Image.Image]:
    rgba = frame.convert("RGBA")
    alpha = rgba.getchannel("A")
    rgb = Image.new("RGB", rgba.size, (255, 255, 255))
    rgb.paste(rgba, mask=alpha)
    return rgb, alpha


def build_palette_image(frames: list[Image.Image], color_count: int) -> Image.Image:
    samples = frames[:: max(1, len(frames) // 6)]
    sample_rgbs = [rgba_to_rgb_on_white(frame)[0] for frame in samples]
    total_width = sum(image.width for image in sample_rgbs)
    height = sample_rgbs[0].height
    combined = Image.new("RGB", (total_width, height))
    offset = 0
    for image in sample_rgbs:
        combined.paste(image, (offset, 0))
        offset += image.width
    return combined.quantize(colors=color_count - 1, method=Image.Quantize.MEDIANCUT)


def frame_to_palette(frame: Image.Image, palette_image: Image.Image, transparent_index: int) -> Image.Image:
    rgb, alpha = rgba_to_rgb_on_white(frame)
    quantized = rgb.quantize(palette=palette_image, dither=Image.Dither.NONE)
    quantized.putpalette(palette_image.getpalette())
    mask = Image.eval(alpha, lambda value: 255 if value < ALPHA_CUTOFF else 0)
    quantized.paste(transparent_index, mask)
    return quantized


def process(source: Path, output: Path) -> None:
    print(f"processing {source.name} ...", flush=True)
    selected, loop = load_and_prepare(source)
    print(f"  quantizing {len(selected)} frames ...", flush=True)

    palette_image = build_palette_image(selected, COLORS)
    transparent_index = COLORS - 1
    processed = [frame_to_palette(frame, palette_image, transparent_index) for frame in selected]

    output.parent.mkdir(parents=True, exist_ok=True)
    processed[0].save(
        output,
        save_all=True,
        append_images=processed[1:],
        duration=DURATION_MS,
        loop=loop,
        disposal=2,
        transparency=transparent_index,
        optimize=True,
    )
    size_mb = output.stat().st_size / (1024 * 1024)
    print(
        f"saved {output.name}: {size_mb:.2f} MB | {len(processed)} frames | "
        f"{processed[0].size[0]}x{processed[0].size[1]}",
        flush=True,
    )


def main() -> int:
    jobs = [
        (ROOT / "Images" / "bad days 3.gif", ROOT / "public" / "images" / "problem" / "bad-days.gif"),
        (ROOT / "Images" / "appointments 3.gif", ROOT / "public" / "images" / "problem" / "appointments.gif"),
    ]
    for source, output in jobs:
        if not source.exists():
            print(f"missing: {source}", file=sys.stderr)
            return 1
        process(source, output)
    return 0


if __name__ == "__main__":
    sys.exit(main())
