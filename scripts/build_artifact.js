// Assembles the multi-file dev site (index.html + css/ + js/) into a single
// self-contained HTML file suitable for publishing as a Claude Artifact —
// the Artifact runtime has no filesystem, so local image paths and separate
// <script src> files all have to be inlined into one document.
//
// Usage: node scripts/build_artifact.js
// Output: dist/mmpran-artifact.html

const fs = require('fs');
const path = require('path');

const proj = path.join(__dirname, '..');
const outDir = path.join(proj, 'dist');
const outPath = path.join(outDir, 'mmpran-artifact.html');

function b64(file, mime) {
  const buf = fs.readFileSync(path.join(proj, 'assets', file));
  return `data:${mime};base64,${buf.toString('base64')}`;
}

let html = fs.readFileSync(path.join(proj, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(proj, 'css', 'styles.css'), 'utf8');
const productsJs = fs.readFileSync(path.join(proj, 'js', 'products.js'), 'utf8');
const artworkJs = fs.readFileSync(path.join(proj, 'js', 'artwork.js'), 'utf8');
const appJs = fs.readFileSync(path.join(proj, 'js', 'app.js'), 'utf8');

// Swap local relative image paths for embedded data URIs (artifact has no filesystem access).
// Only src/href attributes are swapped, so absolute URLs in <meta> tags stay as real URLs.
const mimes = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };
html = html.replace(/(src|href)="assets\/([\w.-]+\.(png|jpe?g|webp))"/g,
  (m, attr, file, ext) => `${attr}="${b64(file, mimes[ext.toLowerCase()])}"`);

// Extract the <head> extras (title/fonts) and the <body> content between <body> and the first <script src=...>.
const headMatch = html.match(/<title>[\s\S]*?<link rel="stylesheet" href="css\/styles\.css">/);
const bodyMatch = html.match(/<body>\s*([\s\S]*?)\s*<script src="js\/products\.js">/);
const bodyContent = bodyMatch[1];

const titleAndFonts = headMatch[0].replace(
  '<link rel="stylesheet" href="css/styles.css">',
  `<style>\n${css}\n</style>`
);

const out = `${titleAndFonts}\n${bodyContent}\n\n<script>\n${productsJs}\n${artworkJs}\n${appJs}\n\ndocument.getElementById("year").textContent = new Date().getFullYear();\n</script>\n`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, out, 'utf8');
console.log('Written', outPath, (out.length / 1024 / 1024).toFixed(2), 'MB');
