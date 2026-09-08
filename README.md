# MM PRAN

A storefront for the MM PRAN Syrian clothing brand. No backend, no payment gateway — checkout builds an order summary and opens it as a WhatsApp message.

**This repo is a code backup, not the live site.** The actual public store runs as a
[Claude Artifact](https://claude.ai/code/artifact/8c391c2e-0cb2-4e72-92ca-501a1853ca7c),
which is what makes the owner-only Control Desk able to save product changes live with
no server of its own (the Artifact republishes itself). That self-save feature only works
inside the Artifact runtime, so editing products day-to-day should go through the live
link's Control Desk (the small `⋯` button in the footer, PIN-gated), not through this repo.

Use this repo to: keep a version history, review/change code (layout, copy, features),
and rebuild the single-file version to publish as a new Artifact version after code changes.

## Run it locally

Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```
python -m http.server 8000
```

This dev version loads `js/products.js`, `js/artwork.js`, `js/app.js` as separate files —
the Control Desk's "Save to Store" won't actually persist anything here (there's no
`window.claude` outside the real Artifact), so use it for layout/style work, not for
managing the catalog.

## Set the WhatsApp number

Edit `js/app.js`, near the top:

```js
WHATSAPP_NUMBER: "966552415322", // digits only, country code + number, no + or spaces
```

## Edit products / prices (local copy only)

Catalog data lives in `js/products.js`. Treat it as a snapshot of the live store, not the
source of truth — the live Artifact's own copy is authoritative once someone uses the
Control Desk. Re-sync this file from the live Artifact before editing it here to avoid
overwriting real changes.

## Publishing a code change to the live store

The live Artifact is a single self-contained HTML file (no external `<script src>` /
`<link>` to local files, and images inlined as base64), assembled from this multi-file
project:

```
node scripts/build_artifact.js
```

This writes `dist/mmpran-artifact.html`. Publish that file's contents as a new version of
the existing Artifact (same URL) — the Artifact tool's `publish` action, or by pasting the
file into a new Claude conversation and asking it to republish the existing artifact.

## Structure

- `index.html` — page markup (storefront + PIN-gated full-page Control Desk)
- `css/styles.css` — styling (Syrian flag colors; product photos in black/white/pink)
- `js/products.js` — product catalog snapshot (see note above)
- `js/artwork.js` — placeholder garment art + logo (SVG)
- `js/app.js` — cart, language toggle (AR/EN), checkout-to-WhatsApp, Control Desk logic
- `scripts/build_artifact.js` — assembles the above into one file for Artifact publishing
- `assets/` — real photos used in the "Our Story" scrapbook section
