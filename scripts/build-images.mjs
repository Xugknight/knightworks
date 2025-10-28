// scripts/build-images.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();

// -------- config
const PROJECTS_RAW = path.join(ROOT, "src", "raw-images", "projects");
const PROJECTS_OUT = path.join(ROOT, "src", "assets", "projects");

const GALLERY_RAW  = path.join(ROOT, "src", "raw-images", "gallery");
const GALLERY_OUT  = path.join(ROOT, "src", "assets", "gallery");

const INPUT_EXTS = [".png", ".jpg", ".jpeg", ".webp"];
const SIZES = [800, 1200];

// -------- helpers
const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });
const isImage = (f) => INPUT_EXTS.includes(path.extname(f).toLowerCase());

async function convertFile(inPath, outBase) {
  const basename = path.basename(outBase);
  const results = [];
  for (const w of SIZES) {
    const outFile = `${outBase}-${w}.webp`;
    await sharp(inPath).resize({ width: w }).webp({ quality: 82 }).toFile(outFile);
    results.push(outFile);
  }
  return results;
}

async function processArea(areaName, RAW_DIR, OUT_DIR) {
  if (!fs.existsSync(RAW_DIR)) return [];

  const slugs = fs.readdirSync(RAW_DIR).filter((d) =>
    fs.statSync(path.join(RAW_DIR, d)).isDirectory()
  );

  const snippets = [];

  for (const slug of slugs) {
    const inDir  = path.join(RAW_DIR, slug);
    const outDir = path.join(OUT_DIR, slug);
    ensureDir(outDir);

    const files = fs.readdirSync(inDir).filter(isImage).sort();
    const imports = [];
    const items   = [];

    for (const file of files) {
      const base = path.parse(file).name; // e.g., "shot-1"
      const outBase = path.join(outDir, base);

      const [out800, out1200] = await convertFile(
        path.join(inDir, file),
        outBase
      );

      // Build relative import paths for JS
      const rel800  = `../assets/${areaName}/${slug}/${path.basename(out800)}`;
      const rel1200 = `../assets/${areaName}/${slug}/${path.basename(out1200)}`;

      const varSafe = base.replace(/[^a-z0-9]+/gi, "_");
      const v800  = `${slug}_${varSafe}_800`;
      const v1200 = `${slug}_${varSafe}_1200`;

      imports.push(
        `import ${v800} from "${rel800}";`,
        `import ${v1200} from "${rel1200}";`
      );

      items.push(
        `  { src: ${v1200}, srcSet: \`${v800} 800w, ${v1200} 1200w\`, sizes: "(max-width: 768px) 92vw, 1200px", alt: "${slug} ${base}" }`
      );
    }

    if (areaName === "gallery") {
      snippets.push({
        slug,
        text:
`${imports.join("\n")}

galleryImages["${slug}"] = [
${items.join(",\n")}
];`
      });
    } else if (areaName === "projects") {
      // keep existing behavior if you were printing anything for projects (optional)
    }
  }

  return snippets;
}

(async () => {
  console.log("Converting project images…");
  await processArea("projects", PROJECTS_RAW, PROJECTS_OUT);

  console.log("Converting gallery images…");
  const gallerySnippets = await processArea("gallery", GALLERY_RAW, GALLERY_OUT);

  if (gallerySnippets.length) {
    console.log("\n=== Paste the following into src/data/galleryImages.js ===\n");
    console.log(`export const galleryImages = {};\n`);
    for (const s of gallerySnippets) {
      console.log(`// album: ${s.slug}\n${s.text}\n`);
    }
    console.log("\n=== end ===\n");
  } else {
    console.log("No gallery images found.");
  }
})();
