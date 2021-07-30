from pathlib import Path
import zipfile
import shutil

zip_fn = "images_background.zip"



with zipfile.ZipFile(zip_fn) as archive:
    for member in archive.infolist():
        fn = member.filename
        if fn.endswith('.png'):
            # remove dir
            fn = fn.split('/')[-1]
            target_path = Path('all_characters') / fn[:2] / fn[2:4] / fn

            print(fn, target_path)

            # make sure target path exists
            target_path.parent.mkdir(parents=True, exist_ok=True)

            # copy file to all_characters
            source = archive.open(member)
            target = open(target_path, "wb")
            with source, target:
                shutil.copyfileobj(source, target)
