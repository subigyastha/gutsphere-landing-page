"""Compress problem-section GIFs for web delivery with transparency."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]

MAX_WIDTH = 640
FRAME_STEP = 3
COLORS = 48
DURATION_MS = 80
ALPHA_CUTOFF = 128


def load_frames(path: Path) -> tuple[list[Image.Image], int, int]:
    gif = Image.open(path)
    duration = gif.info.get("duration", 30)
    loop = gif.info.get("loop", 0)
    frames: list[Image.Image] = []

    try:
        while True:
            frame = ImageOps.exif_transpose(gif.copy()).convert("RGBA")
            frames.append(clean_transparency(frame))
            gif.seek(gif.tell() + 1)
    except EOFError:
        pass

    return frames, duration, loop


def clean_transparency(frame: Image.Image) -> Image.Image:
    rgba = frame.convert("RGBA")
    pixels = rgba.load()

    for y in range(rgba.height):
        for x in range(rgba.width):
            r, g, b, a = pixels[x, y]
            if a < ALPHA_CUTOFF or (g > 200 and r < 80 and b < 80):
                pixels[x, y] = (0, 0, 0, 0)

    return rgba


def resize_frame(frame: Image.Image, max_width: int) -> Image.Image:
    width, height = frame.size
    if width <= max_width:
        return clean_transparency(frame)

    scale = max_width / width
    new_size = (max_width, max(1, round(height * scale)))
    return clean_transparency(frame.resize(new_size, Image.Resampling.LANCZOS))


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


def compress_gif(
    source: Path,
    output: Path,
    *,
    max_width: int,
    frame_step: int,
    colors: int,
    duration_ms: int,
) -> None:
    frames, _, loop = load_frames(source)
    selected = [resize_frame(frame, max_width) for frame in frames[::frame_step]]
    palette_image = build_palette_image(selected, colors)
    transparent_index = colors - 1
    processed = [frame_to_palette(frame, palette_image, transparent_index) for frame in selected]

    output.parent.mkdir(parents=True, exist_ok=True)
    processed[0].save(
        output,
        save_all=True,
        append_images=processed[1:],
        duration=duration_ms,
        loop=loop,
        disposal=2,
        transparency=transparent_index,
        optimize=True,
    )

    size_mb = output.stat().st_size / (1024 * 1024)
    print(
        f"saved {output.name}: {size_mb:.2f} MB | "
        f"{len(processed)} frames | {processed[0].size[0]}x{processed[0].size[1]} | "
        f"{colors} colors | transparency={transparent_index} | {duration_ms}ms"
    )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="Source GIF path")
    parser.add_argument("output", type=Path, help="Output GIF path")
    parser.add_argument("--max-width", type=int, default=MAX_WIDTH)
    parser.add_argument("--frame-step", type=int, default=FRAME_STEP)
    parser.add_argument("--colors", type=int, default=COLORS)
    parser.add_argument("--duration-ms", type=int, default=DURATION_MS)
    args = parser.parse_args()

    compress_gif(
        args.source,
        args.output,
        max_width=args.max_width,
        frame_step=args.frame_step,
        colors=args.colors,
        duration_ms=args.duration_ms,
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
