const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "our-images");
const MANIFEST_PATH = path.join(IMAGES_DIR, "manifest.json");
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

function isImageFile(fileName) {
    const ext = path.extname(fileName).toLowerCase();
    return ALLOWED_EXTENSIONS.includes(ext);
}

function main() {
    if (!fs.existsSync(IMAGES_DIR)) {
        console.error(`Directory not found: ${IMAGES_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(IMAGES_DIR).filter(isImageFile);

    // Build web paths relative to the site root, matching how they are used in JS.
    const webPaths = files
        .sort()
        .map((file) => `public/our-images/${file}`);

    if (webPaths.length === 0) {
        console.warn("No image files found in public/our-images.");
    }

    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(webPaths, null, 2), "utf8");

    console.log(
        `Wrote ${webPaths.length} image paths to manifest: ${MANIFEST_PATH}`
    );
}

main();

