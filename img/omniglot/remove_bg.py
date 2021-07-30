from pathlib import Path
from PIL import Image
from tqdm import tqdm

base_path = Path('all_characters')


for fn in tqdm(list(base_path.glob("**/*.png"))):
    #print(fn)

    img = Image.open(fn)
    img = img.convert("RGBA")

    pixdata = img.load()

    width, height = img.size
    for y in range(height):
        for x in range(width):
            if pixdata[x, y] == (255, 255, 255, 255):
                pixdata[x, y] = (255, 255, 255, 0)

    img.save(fn, "PNG")
