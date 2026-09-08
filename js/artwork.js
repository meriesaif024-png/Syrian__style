// Generates the placeholder product artwork (SVG) so no image assets are needed.
const GARMENT_COLORS = {
  black: { base: "#141414", shade: "#000000" },
  white: { base: "#fbfaf7", shade: "#e4e0d8" },
  pink:  { base: "#e8879f", shade: "#c96b83" }
};

function starPath(cx, cy, r) {
  const points = [];
  for (let i = 0; i < 5; i++) {
    const outerAngle = (Math.PI / 2) + (i * 2 * Math.PI / 5);
    points.push([cx + r * Math.cos(outerAngle), cy - r * Math.sin(outerAngle)]);
    const innerAngle = outerAngle + Math.PI / 5;
    points.push([cx + (r * 0.4) * Math.cos(innerAngle), cy - (r * 0.4) * Math.sin(innerAngle)]);
  }
  return "M" + points.map(p => p.join(",")).join(" L") + " Z";
}

function garmentShape(type, base, shade) {
  if (type === "hoodie") {
    return `
      <path d="M70 40 C70 15, 130 15, 130 40 L150 55 L138 85 L128 75 L128 190 L72 190 L72 75 L62 85 L50 55 Z" fill="${base}"/>
      <path d="M78 38 C78 24, 122 24, 122 38 L100 58 Z" fill="${shade}"/>
      <rect x="90" y="130" width="20" height="4" rx="2" fill="${shade}" opacity="0.6"/>
    `;
  }
  if (type === "cap") {
    return `
      <path d="M40 110 C40 70, 160 70, 160 110 L160 118 L40 118 Z" fill="${base}"/>
      <path d="M40 116 L160 116 L185 128 L150 132 L40 124 Z" fill="${shade}"/>
      <circle cx="100" cy="72" r="4" fill="${shade}"/>
    `;
  }
  // default: tshirt
  return `
    <path d="M72 45 L45 62 L58 90 L72 82 L72 190 L128 190 L128 82 L142 90 L155 62 L128 45 C128 58 72 58 72 45 Z" fill="${base}"/>
    <path d="M78 44 C78 56, 122 56, 122 44 L118 40 C112 48, 88 48, 82 40 Z" fill="${shade}"/>
  `;
}

function logoSVG() {
  const stars = [starPath(50, 20, 4.2), starPath(64, 20, 4.2), starPath(78, 20, 4.2)]
    .map(d => `<path d="${d}" fill="#c8102e"/>`).join("");
  return `
  <svg viewBox="0 0 128 62" xmlns="http://www.w3.org/2000/svg" class="brand-mark" role="img" aria-label="Syrian Style">
    <g>
      <rect x="0" y="0" width="128" height="40" rx="6" fill="#0f6b34"/>
      <rect x="0" y="13.3" width="128" height="13.3" fill="#f5f0e6"/>
      <rect x="0" y="26.6" width="128" height="13.4" rx="6" fill="#141414"/>
      <rect x="0" y="0" width="128" height="40" rx="6" fill="none" stroke="#00000022" stroke-width="1"/>
      ${stars}
    </g>
    <text x="64" y="53" text-anchor="middle" font-family="'El Messiri', sans-serif" font-weight="700"
      font-size="9.5" fill="currentColor" letter-spacing="1">SYRIAN STYLE</text>
  </svg>`;
}

function productArtworkSVG(product, colorKey) {
  const c = GARMENT_COLORS[colorKey] || GARMENT_COLORS.black;
  const shape = garmentShape(product.category, c.base, c.shade);
  const stars = colorKey === "black"
    ? [starPath(85, 160, 5), starPath(100, 165, 5), starPath(115, 160, 5)]
        .map((d, i) => `<path d="${d}" fill="${i === 1 ? '#0f6b34' : '#c8102e'}"/>`).join("")
    : "";

  return `
  <svg viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg" class="garment-art" role="img" aria-label="${product.name.en}">
    ${shape}
    ${stars}
  </svg>`;
}
