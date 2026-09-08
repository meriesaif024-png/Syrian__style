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

// A fan of pointed feathers radiating from a shoulder pivot, alternating
// outer (tip) and inner (notch) radius across a sweep of angles — same
// technique as starPath, just over a quarter-turn instead of a full circle.
// mirror=true reflects the fan horizontally around cx (for the left wing).
function wingPath(cx, cy, tipR, notchR, anglesDeg, mirror) {
  const pts = [[cx, cy]];
  const toXY = (deg, r) => {
    const rad = deg * Math.PI / 180;
    let x = cx + r * Math.cos(rad);
    const y = cy + r * Math.sin(rad);
    if (mirror) x = 2 * cx - x;
    return [x, y];
  };
  anglesDeg.forEach((a, i) => {
    pts.push(toXY(a, tipR));
    if (i < anglesDeg.length - 1) pts.push(toXY((a + anglesDeg[i + 1]) / 2, notchR));
  });
  return "M" + pts.map(p => p.join(",")).join(" L") + " Z";
}

// A small foot pad with three splayed claw spikes, for the crest eagle's talons.
function foot(fx) {
  const fy = 190;
  const spike = (dx) => `<polygon points="${fx + dx - 2},${fy + 4} ${fx + dx + 2},${fy + 4} ${fx + dx},${fy + 14}" fill="#0f6b34"/>`;
  return `<rect x="${fx - 8}" y="${fy}" width="16" height="4" fill="#0f6b34"/>${spike(-6)}${spike(0)}${spike(6)}`;
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

// Crest logo: shield badge with the independence-flag diagonal, a hawk head,
// a spread-wing eagle, and a fan of stars — echoing the brand's reference mark.
function logoSVG() {
  const shield = "M100,6 C130,6 163,14 183,27 L183,108 C183,167 149,206 100,225 C51,206 17,167 17,108 L17,27 C37,14 70,6 100,6 Z";
  const crestStars = [starPath(70, 108, 8), starPath(92, 96, 8), starPath(114, 100, 8), starPath(136, 92, 7), starPath(152, 108, 6.5)]
    .map(d => `<path d="${d}" fill="#c8102e"/>`).join("");

  const wingAngles = [10, -8, -26, -44];
  const rightWing = wingPath(100, 150, 90, 48, wingAngles, false);
  const leftWing = wingPath(100, 150, 90, 48, wingAngles, true);

  return `
  <svg viewBox="0 0 200 231" xmlns="http://www.w3.org/2000/svg" class="brand-mark" role="img" aria-label="Syrian Style">
    <defs>
      <clipPath id="crestClip"><path d="${shield}"/></clipPath>
    </defs>
    <path d="${shield}" fill="#f5f0e6"/>
    <g clip-path="url(#crestClip)">
      <polygon points="0,0 112,0 55,92 0,92" fill="#0f6b34"/>
      <polygon points="112,0 200,0 200,92 148,92" fill="#141414"/>
      <rect x="0" y="182" width="200" height="49" fill="#141414"/>
      <ellipse cx="138" cy="58" rx="24" ry="19" fill="#141414"/>
      <polygon points="117,52 117,66 88,59" fill="#141414"/>
      <polygon points="152,42 180,28 158,55" fill="#141414"/>
      <circle cx="128" cy="51" r="4.2" fill="#f5f0e6"/>
      <circle cx="129" cy="51" r="1.9" fill="#141414"/>
      ${crestStars}
      <path d="${rightWing}" fill="#0f6b34"/>
      <path d="${leftWing}" fill="#0f6b34"/>
      <rect x="90" y="158" width="7" height="32" fill="#0f6b34"/>
      <rect x="103" y="158" width="7" height="32" fill="#0f6b34"/>
      ${foot(93.5)}
      ${foot(106.5)}
    </g>
    <path d="${shield}" fill="none" stroke="#b8933f" stroke-width="7"/>
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
