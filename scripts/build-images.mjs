import { readdir, mkdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const SRC = "src/raw-images/projects";
const OUT = "src/assets/projects";
const sizes = [800, 1200];
const quality = 82;

async function ensure(dir) { await mkdir(dir, { recursive: true }); }

async function convert(dirRel = "") {
    const dirAbs = join(SRC, dirRel);
    const outAbs = join(OUT, dirRel);
    await ensure(outAbs);

    const items = await readdir(dirAbs, { withFileTypes: true });
    for (const it of items) {
        if (it.isDirectory()) { await convert(join(dirRel, it.name)); continue; }
        const ext = extname(it.name).toLowerCase();
        if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) continue;

        const base = basename(it.name, ext);
        // standardize on "hero" output regardless of input name
        const outBase = base.toLowerCase().includes("hero") ? "hero" : base;

        const inPath = join(dirAbs, it.name);
        for (const w of sizes) {
            const outPath = join(outAbs, `${outBase}-${w}.webp`);
            await sharp(inPath).resize({ width: w }).webp({ quality, effort: 5 }).toFile(outPath);
            console.log("✓", outPath);
        }
    }
}

await convert();
console.log("All images processed.");