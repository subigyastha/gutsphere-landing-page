"""Remove cream backgrounds from problem section images."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PROBLEM_DIR = ROOT / "public" / "images" / "problem"

THRESHOLD = 42
CORNER_SAMPLE = 12


def sample_background_color(image: Image.Image) -> tuple[int, int, int]:
    rgba = image.convert("RGBA")
    width, height = rgba.size
    pixels: list[tuple[int, int, int]] = []

    for x in range(CORNER_SAMPLE):
        for y in range(CORNER_SAMPLE):
            pixels.append(rgba.getpixel((x, y))[:3])
            pixels.append(rgba.getpixel((width - 1 - x, y))[:3])
            pixels.append(rgba.getpixel((x, height - 1 - y))[:3])
            pixels.append(rgba.getpixel((width - 1 - x, height - 1 - y))[:3])

    return (
        sum(p[0] for p in pixels) // len(pixels),
        sum(p[1] for p in pixels) // len(pixels),
        sum(p[2] for p in pixels) // len(pixels),
    )


def color_distance(rgb: tuple[int, int, int], bg: tuple[int, int, int]) -> float:
    return ((rgb[0] - bg[0]) ** 2 + (rgb[1] - bg[1]) ** 2 + (rgb[2] - bg[2]) ** 2) ** 0.5


def remove_background(image: Image.Image, bg: tuple[int, int, int]) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()

    for y in range(rgba.height):
        for x in range(rgba.width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if color_distance((r, g, b), bg) <= THRESHOLD:
                pixels[x, y] = (r, g, b, 0)

    return rgba


def process_png(path: Path) -> None:
    image = Image.open(path)
    bg = sample_background_color(image)
    result = remove_background(image, bg)
    result.save(path, optimize=True)
    print(f"processed {path.name} (bg={bg})")


def remove_green_screen(image: Image.Image, key: tuple[int, int, int] = (0, 255, 0), threshold: float = 80) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()

    for y in range(rgba.height):
        for x in range(rgba.width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if color_distance((r, g, b), key) <= threshold:
                pixels[x, y] = (r, g, b, 0)

    return rgba


def process_gif(path: Path) -> None:
    gif = Image.open(path)
    frames: list[Image.Image] = []

    try:
        while True:
            frame = gif.copy()
            frames.append(remove_green_screen(frame))
            gif.seek(gif.tell() + 1)
    except EOFError:
        pass

    duration = gif.info.get("duration", 80)
    loop = gif.info.get("loop", 0)

    frames[0].save(
        path,
        save_all=True,
        append_images=frames[1:],
        duration=duration,
        loop=loop,
        disposal=2,
        optimize=False,
    )
    print(f"processed {path.name} ({len(frames)} frames, green-screen)")


def main() -> int:
    for name in ("bad-days.png", "appointments.png"):
        process_png(PROBLEM_DIR / name)

    process_gif(PROBLEM_DIR / "scattered.gif")
    return 0


if __name__ == "__main__":
    sys.exit(main())
