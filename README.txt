# Minecraft Education Project Catalog

A small local HTML/CSS/JavaScript slideshow with five sample projects and English/Japanese text.

## Run it on your PC
1. Extract the ZIP file.
2. Open the `minecraft_project_catalog` folder.
3. Double-click `index.html` to open it in Chrome, Edge, or Firefox.
4. Click **Explore projects**.
5. Use the Previous/Next buttons, the dots, or the keyboard's left/right arrow keys.

The sample illustrations are local SVG files, so the slideshow works without an internet connection. The Google Fonts import in `style.css` is optional; if you are offline, the browser uses fallback fonts.

## Change project text
Open `script.js`. At the top, find `const projects = [...]`. Each object represents one slide. Edit its `title`, `titleJa`, `description`, `descriptionJa`, `skills`, and other fields.

## Replace sample illustrations with real screenshots
1. Put your Minecraft Education screenshots in the `images` folder (for example, `my-house.jpg`).
2. In the relevant project object in `script.js`, change `image` to the filename, such as `images/my-house.jpg`.
3. Change `alt` to a short description of the image.
4. Keep the original SVG files until you have checked that the new images work.

Recommended screenshot shape: landscape, around 16:9. The slideshow crops images to fill the display area.

## Important
This version is for local testing. A QR code that other people can scan will need a publicly accessible hosted URL; a file path on your own PC will not work for other people's phones.
