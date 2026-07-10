"""Process abstract bad-days GIF: remove background and optimize for web."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "Images" / "abstract" / "bad days.gif"
OUTPUT = ROOT / "public" / "images" / "problem" / "abstract" / "bad-days.gif"

MAX_WIDTH = 640
COLORS = 48
ALPHA_CUTOFF = 128


def should_remove_background(r: int, g: int, b: int) -> bool:
    if r < 25 and g < 25 and b < 25:
        return True

    spread = max(r, g, b) - min(r, g, b)
    average = (r + g + b) / 3

    if spread <= 12 and average >= 228:
        return True

    if spread <= 10 and 200 <= average < 228 and abs(r - g) <= 8 and abs(g - b) <= 8:
        return True

    return False


def clean_transparency(frame: Image.Image) -> Image.Image:
    rgba = frame.convert("RGBA")
    pixels = rgba.load()

    for y in range(rgba.height):
        for x in range(rgba.width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if should_remove_background(r, g, b):
                pixels[x, y] = (0, 0, 0, 0)

    return rgba


def resize_frame(frame: Image.Image, max_width: int) -> Image.Image:
    width, height = frame.size
    if width >= max_width:
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


def process_gif(source: Path, output: Path) -> None:
    gif = Image.open(source)
    loop = gif.info.get("loop", 0)
    duration = gif.info.get("duration", 70)
    frames: list[Image.Image] = []

    try:
        while True:
            frame = ImageOps.exif_transpose(gif.copy()).convert("RGBA")
            frames.append(clean_transparency(frame))
            gif.seek(gif.tell() + 1)
    except EOFError:
        pass

    selected = [resize_frame(frame, MAX_WIDTH) for frame in frames]
    palette_image = build_palette_image(selected, COLORS)
    transparent_index = COLORS - 1
    processed = [frame_to_palette(frame, palette_image, transparent_index) for frame in selected]

    output.parent.mkdir(parents=True, exist_ok=True)
    processed[0].save(
        output,
        save_all=True,
        append_images=processed[1:],
        duration=duration,
        loop=loop,
        disposal=2,
        transparency=transparent_index,
        optimize=True,
    )

    size_mb = output.stat().st_size / (1024 * 1024)
    print(
        f"saved {output.name}: {size_mb:.2f} MB | "
        f"{len(processed)} frames | {processed[0].size[0]}x{processed[0].size[1]} | "
        f"transparency={transparent_index}"
    )


def main() -> int:
    process_gif(SOURCE, OUTPUT)
    return 0


if __name__ == "__main__":
    sys.exit(main())
