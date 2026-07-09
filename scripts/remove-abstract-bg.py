"""Remove checkerboard backgrounds from abstract problem images."""

from __future__ import annotations

import shutil
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "Images" / "abstract"
OUTPUT_DIR = ROOT / "public" / "images" / "problem" / "abstract"

SOURCE_FILES = {
    "scattered.png": "scattered.png",
    "bad days.png": "bad-days.png",
    "appointments.png": "appointments.png",
}


def is_checkerboard_pixel(r: int, g: int, b: int) -> bool:
    spread = max(r, g, b) - min(r, g, b)
    average = (r + g + b) / 3
    return spread <= 14 and average >= 228


def remove_checkerboard(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()

    for y in range(rgba.height):
        for x in range(rgba.width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if is_checkerboard_pixel(r, g, b):
                pixels[x, y] = (r, g, b, 0)

    return rgba


def main() -> int:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for source_name, output_name in SOURCE_FILES.items():
        source = SOURCE_DIR / source_name
        output = OUTPUT_DIR / output_name
        shutil.copy2(source, output)
        result = remove_checkerboard(Image.open(output))
        result.save(output, optimize=True)
        print(f"processed {output_name}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
