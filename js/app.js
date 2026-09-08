// ---- Store configuration ----
const CONFIG = {
  // digits only, with country code, no leading 0 and no + or spaces
  WHATSAPP_NUMBER: "966552415322",
  CURRENCY: "ر.س", // Saudi Riyal
  // Gate for the owner-only Control Desk page (the small "..." button in the footer).
  // Not real security — anyone who reads the page source can see it — but it keeps
  // casual visitors from finding or opening it. Change it any time by asking to update it.
  ADMIN_PIN: "SYRIA1946"
};

// Opens an external URL (WhatsApp, etc.) via a real link click rather than window.open() —
// when this page runs inside a sandboxed viewer, only genuine <a href> clicks are allowed
// to navigate out; a script-triggered window.open() is silently blocked there.
function openExternalLink(url) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const I18N = {
  ar: {
    navHome: "الرئيسية", navShop: "المتجر", navStory: "قصتنا", navContact: "تواصل",
    heroTitle: "لبس بيحكي حكايتنا", heroSubtitle: "تيشيرتات سورية الهوية، بألوان علمنا",
    heroCta: "تسوق الآن",
    colorLabel: "اللون", sizeLabel: "المقاس", addToCart: "أضف للسلة", added: "أُضيف ✓", buyNow: "اشتري الآن عبر واتساب",
    soldOut: "نفذت الكمية", lowStockNote: "⚠ الكمية محدودة، بتخلص قريبًا",
    cartTitle: "سلة المشتريات", cartEmpty: "السلة فارغة", subtotal: "المجموع",
    checkoutBtn: "إتمام الطلب عبر واتساب", clearCart: "تفريغ السلة",
    storyTitle: "قصتنا",
    storyBody: "حطينا الشام كلها بلوحة واحدة: <b>طربوش</b>، <b>ناعورة حماة</b>، <b>حلاوة جبن</b>، وخارطة ما بتنسى حدودها. كل قطعة مقصوصة ولزّقناها بإيدنا.",
    storyTagMap: "خارطة الشام", storyTagFez: "الطربوش", storyTagNoria: "نواعير حماة", storyTagSweets: "حلاوة الجبن",
    storyStampCountry: "سوريا", storyCta: "اكتشف المجموعة",
    contactTitle: "تواصل معنا", contactBody: "للاستفسار أو الطلب المباشر تواصلوا معنا عبر واتساب.",
    contactWhatsappBtn: "راسلنا على واتساب",
    footerRights: "جميع الحقوق محفوظة",
    modalTitle: "معلومات التوصيل", nameLabel: "الاسم الكامل", phoneLabel: "رقم الهاتف",
    countryLabel: "الدولة", addressLabel: "المدينة / العنوان", notesLabel: "ملاحظات (اختياري)",
    sendWhatsapp: "إرسال الطلب على واتساب", requiredNote: "* الاسم ورقم الهاتف مطلوبان",
    qty: "الكمية", remove: "حذف", emptyShop: "المنتجات قادمة قريبًا",
    pinGateTitle: "دخول صاحبة المتجر", pinGateLabel: "الرمز السري",
    pinGateError: "رمز غير صحيح", pinGateSubmit: "دخول",
    adminTitle: "لوحة التحكم — إضافة قطعة", adminBackLink: "→ رجوع للمتجر",
    adminIntro: "عبّي بيانات القطعة، ضيفي الصور، واضغطي \"حفظ بالمتجر\" — بتنحفظ وبتنشر مباشرة لكل الزوار.",
    admEditLabel: "تعديل قطعة موجودة (اختياري)", admNewItem: "➕ قطعة جديدة",
    admNameArLabel: "الاسم (عربي)", admNameEnLabel: "Name (English)",
    admPriceLabel: "السعر (ر.س)", admSizesLabel: "المقاسات والكمية المتوفرة", admColorsLabel: "الألوان المتوفرة",
    admPhotosLabel: "صور القطعة (حتى 7 صور)",
    admPhotosNote: "الصور بتنحفظ مباشرة مع القطعة، ما في داعي ترسليها لحدا.",
    admDescArLabel: "الوصف (عربي)", admDescEnLabel: "Description (English)",
    admSaveBtn: "حفظ بالمتجر", admSaving: "جارِ الحفظ...", admSaved: "تم الحفظ ✓ رح يتحدّث الموقع هلق",
    admSaveUnavailable: "خانة الحفظ مو متوفرة هلق بهاد المتصفح. جربي تفتحي الرابط من جديد.",
    admSaveNoAccess: "ما عندك صلاحية تعديل على هاد الصفحة.",
    admSaveConflict: "صار حفظ من مكان تاني بنفس الوقت، جربي تحفظي مرة ثانية.",
    admSaveError: "صار خطأ أثناء الحفظ، جربي مرة ثانية.",
    admDeleteBtn: "حذف القطعة", admConfirmDelete: "اضغطي تاني للتأكيد", admDeleting: "جارِ الحذف...",
    admDeleted: "تم الحذف ✓ رح يتحدّث الموقع هلق"
  },
  en: {
    navHome: "Home", navShop: "Shop", navStory: "Our Story", navContact: "Contact",
    heroTitle: "Wear the story", heroSubtitle: "Syrian-identity tees, in our flag's colors",
    heroCta: "Shop Now",
    colorLabel: "Color", sizeLabel: "Size", addToCart: "Add to Cart", added: "Added ✓", buyNow: "Buy Now via WhatsApp",
    soldOut: "Sold out", lowStockNote: "⚠ Limited stock — selling out soon",
    cartTitle: "Your Cart", cartEmpty: "Your cart is empty", subtotal: "Subtotal",
    checkoutBtn: "Checkout via WhatsApp", clearCart: "Clear Cart",
    storyTitle: "Our Story",
    storyBody: "We put all of Sham on one board: a <b>tarboosh</b>, the <b>Hama noria</b>, <b>halawet jibn</b>, and a map that never forgets its borders. Every piece cut out and pinned up by hand.",
    storyTagMap: "Map of Sham", storyTagFez: "The Tarboosh", storyTagNoria: "Hama's Waterwheels", storyTagSweets: "Halawet El Jibn",
    storyStampCountry: "Syria", storyCta: "Discover the Collection",
    contactTitle: "Get in Touch", contactBody: "For questions or a direct order, reach us on WhatsApp.",
    contactWhatsappBtn: "Message us on WhatsApp",
    footerRights: "All rights reserved",
    modalTitle: "Delivery Details", nameLabel: "Full Name", phoneLabel: "Phone Number",
    countryLabel: "Country", addressLabel: "City / Address", notesLabel: "Notes (optional)",
    sendWhatsapp: "Send Order on WhatsApp", requiredNote: "* Name and phone are required",
    qty: "Qty", remove: "Remove", emptyShop: "New products coming soon",
    pinGateTitle: "Owner Sign-in", pinGateLabel: "Secret Code",
    pinGateError: "Incorrect code", pinGateSubmit: "Enter",
    adminTitle: "Control Desk — Add a Product", adminBackLink: "← Back to store",
    adminIntro: "Fill in the product details, add photos, and click \"Save to Store\" — it saves and goes live for every visitor immediately.",
    admEditLabel: "Edit an Existing Item (optional)", admNewItem: "➕ New Item",
    admNameArLabel: "Name (Arabic)", admNameEnLabel: "Name (English)",
    admPriceLabel: "Price (SAR)", admSizesLabel: "Sizes & Stock Available", admColorsLabel: "Available Colors",
    admPhotosLabel: "Product Photos (up to 7)",
    admPhotosNote: "Photos are saved directly with the product — no need to send them to anyone.",
    admDescArLabel: "Description (Arabic)", admDescEnLabel: "Description (English)",
    admSaveBtn: "Save to Store", admSaving: "Saving...", admSaved: "Saved ✓ — the page will update now",
    admSaveUnavailable: "Saving isn't available right now in this browser. Try reopening the link.",
    admSaveNoAccess: "You don't have edit access on this page.",
    admSaveConflict: "Someone else saved changes at the same time — please try saving again.",
    admSaveError: "Something went wrong while saving. Please try again.",
    admDeleteBtn: "Delete Item", admConfirmDelete: "Tap again to confirm",
    admDeleting: "Deleting...", admDeleted: "Deleted ✓ — the page will update now"
  }
};

const QUOTES = [
  { ar: "يا شآم، يا شآم! هل غير جرحكِ يشغلني؟", en: "“Oh Damascus, is there any wound but yours that occupies me?”", by: "نزار قباني — Nizar Qabbani" },
  { ar: "الحرية ما بتنعطى، الحرية بتنشتق", en: "“Freedom isn't given, it's earned.”", by: "مثل سوري — Syrian proverb" },
  { ar: "بلادي وإن جارت علي عزيزة", en: "“My homeland, even unkind, remains dear to me.”", by: "قول مأثور — Traditional saying" },
  { ar: "من الشام لأبعد نقطة، الجذور ما بتتقلع", en: "“From Damascus to the farthest point, roots don't pull out.”", by: "MM PRAN" },
  { ar: "دمشق، يا بيت الأجداد", en: "“Damascus, house of our forefathers.”", by: "قول شعبي — Popular saying" },
  { ar: "ما حدا بيعرف قيمة الوطن غير يلي غاب عنه", en: "“No one knows the worth of a homeland like the one who has been away from it.”", by: "مثل سوري — Syrian proverb" },
  { ar: "تحت الرماد جمر، وسوريا ما بتموت", en: "“Under the ashes, embers remain — Syria does not die.”", by: "MM PRAN" },
  { ar: "ياريتني نجمة بالعلم، أضل فوق حبيبي الشام", en: "“I wish I were a star on the flag, forever above beloved Damascus.”", by: "قول شعبي — Popular saying" }
];

// ---- State ----
let lang = localStorage.getItem("mmpran_lang") || "ar";
let cart = JSON.parse(localStorage.getItem("mmpran_cart") || "[]");
const selection = {}; // productId -> { color, size }

function t(key) { return I18N[lang][key]; }

function saveCart() {
  localStorage.setItem("mmpran_cart", JSON.stringify(cart));
  renderCartCount();
}

// ---- Language ----
function applyLanguage() {
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  document.getElementById("langToggle").textContent = lang === "ar" ? "EN" : "AR";
  localStorage.setItem("mmpran_lang", lang);
  renderProducts();
  renderCart();
}

document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  applyLanguage();
});

// ---- Quotes ----
let quoteIndex = 0;
function renderQuote() {
  const q = QUOTES[quoteIndex];
  const banner = document.getElementById("quoteBanner");
  banner.innerHTML = `
    <p class="quote-ar">${q.ar}</p>
    <p class="quote-en">${q.en}</p>
    <span class="quote-by">${q.by}</span>
  `;
  banner.classList.remove("fade-in");
  void banner.offsetWidth;
  banner.classList.add("fade-in");
  quoteIndex = (quoteIndex + 1) % QUOTES.length;
}

// ---- Products ----
function priceText(n) { return `${n} ${CONFIG.CURRENCY}`; }

function ensureSelection(p) {
  if (!selection[p.id]) {
    const firstInStock = p.sizes.find(s => s.stock > 0) || p.sizes[0];
    selection[p.id] = { color: p.colors[0], size: firstInStock.size, imgIndex: 0, qty: 1 };
  }
}

function qtyPickerHtml(p, sel, maxQty) {
  const cap = Math.max(maxQty, 1);
  const qty = Math.min(sel.qty || 1, cap);
  return `
    <div class="qty-picker" role="group" aria-label="${t('qty')}">
      <button type="button" class="qty-minus" data-product="${p.id}">−</button>
      <input type="number" class="qty-input" data-product="${p.id}" min="1" max="${cap}" value="${qty}">
      <button type="button" class="qty-plus" data-product="${p.id}">+</button>
    </div>
  `;
}

function colorSwatchesHtml(p, sel) {
  return p.colors.map(c => `
    <button type="button" class="swatch swatch-${c} ${sel.color === c ? "active" : ""}"
      data-product="${p.id}" data-color="${c}" aria-label="${c}"></button>
  `).join("");
}

// Customers never see exact stock counts — only a low-stock nudge near the end.
function sizeSelectHtml(p, sel) {
  const options = p.sizes.map(s => {
    const label = s.stock <= 0 ? `${s.size} — ${t("soldOut")}` : s.size;
    return `<option value="${s.size}" ${sel.size === s.size ? "selected" : ""} ${s.stock <= 0 ? "disabled" : ""}>${label}</option>`;
  }).join("");
  return `<select class="size-select" data-product="${p.id}" aria-label="${t('sizeLabel')}">${options}</select>`;
}

function productArtHtml(p, sel) {
  if (p.images && p.images.length > 0) {
    const activeIdx = Math.min(sel.imgIndex || 0, p.images.length - 1);
    const thumbs = p.images.length > 1 ? `
      <div class="product-thumbs">
        ${p.images.map((src, i) => `
          <button type="button" class="product-thumb ${i === activeIdx ? "active" : ""}" data-product="${p.id}" data-img="${i}">
            <img src="${src}" alt="">
          </button>
        `).join("")}
      </div>` : "";
    return `<img class="product-photo" src="${p.images[activeIdx]}" alt="${p.name[lang]}">${thumbs}`;
  }
  return productArtworkSVG(p, sel.color);
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const list = PRODUCTS;
  if (list.length === 0) {
    grid.innerHTML = `<p class="shop-empty">${t("emptyShop")}</p>`;
    return;
  }
  grid.innerHTML = list.map(p => {
    ensureSelection(p);
    const sel = selection[p.id];
    const selSize = p.sizes.find(s => s.size === sel.size);
    const soldOut = !selSize || selSize.stock <= 0;
    const lowStock = selSize && selSize.stock > 0 && selSize.stock <= 2;

    return `
      <article class="product-card" data-product="${p.id}">
        <div class="product-art" data-open-detail="${p.id}">${productArtHtml(p, sel)}</div>
        <div class="product-info">
          <span class="product-type">${p.typeLabel[lang]}</span>
          <h3 class="product-name" data-open-detail="${p.id}">${p.name[lang]}</h3>
          <p class="product-desc">${p.desc[lang]}</p>
          <div class="product-row">
            <div class="swatches" role="group" aria-label="${t('colorLabel')}">${colorSwatchesHtml(p, sel)}</div>
            ${sizeSelectHtml(p, sel)}
          </div>
          <div class="product-row">
            <span class="qty-label">${t('qty')}</span>
            ${qtyPickerHtml(p, sel, selSize ? selSize.stock : 1)}
          </div>
          ${lowStock ? `<p class="low-stock-note">${t("lowStockNote")}</p>` : ""}
          <div class="product-row product-row-bottom">
            <span class="price">${priceText(p.price)}</span>
            <button type="button" class="btn btn-add" data-product="${p.id}" ${soldOut ? "disabled" : ""}>${soldOut ? t("soldOut") : t("addToCart")}</button>
          </div>
          <button type="button" class="btn btn-buy-now" data-product="${p.id}" ${soldOut ? "disabled" : ""}>${t("buyNow")}</button>
        </div>
      </article>
    `;
  }).join("");
}

// ---- Product detail view (opened by tapping a product's photo or name) ----
let currentDetailId = null;
const detailModal = document.getElementById("detailModal");

function openProductDetail(id) {
  currentDetailId = id;
  renderProductDetail();
  detailModal.classList.add("open");
  cartOverlay.classList.add("visible");
}
function closeProductDetail() {
  detailModal.classList.remove("open");
  cartOverlay.classList.remove("visible");
  currentDetailId = null;
}
document.getElementById("detailClose").addEventListener("click", closeProductDetail);

function renderProductDetail() {
  if (!currentDetailId) return;
  const p = PRODUCTS.find(pr => pr.id === currentDetailId);
  if (!p) { closeProductDetail(); return; }
  ensureSelection(p);
  const sel = selection[p.id];
  const selSize = p.sizes.find(s => s.size === sel.size);
  const soldOut = !selSize || selSize.stock <= 0;
  const lowStock = selSize && selSize.stock > 0 && selSize.stock <= 2;

  document.getElementById("detailContent").innerHTML = `
    <div class="detail-art">${productArtHtml(p, sel)}</div>
    <div class="detail-info">
      <span class="product-type">${p.typeLabel[lang]}</span>
      <h2>${p.name[lang]}</h2>
      <p class="detail-desc">${p.desc[lang]}</p>
      <div class="product-row">
        <div class="swatches" role="group" aria-label="${t('colorLabel')}">${colorSwatchesHtml(p, sel)}</div>
        ${sizeSelectHtml(p, sel)}
      </div>
      <div class="product-row">
        <span class="qty-label">${t('qty')}</span>
        ${qtyPickerHtml(p, sel, selSize ? selSize.stock : 1)}
      </div>
      ${lowStock ? `<p class="low-stock-note">${t("lowStockNote")}</p>` : ""}
      <div class="product-row product-row-bottom">
        <span class="price">${priceText(p.price)}</span>
        <button type="button" class="btn btn-add" data-product="${p.id}" ${soldOut ? "disabled" : ""}>${soldOut ? t("soldOut") : t("addToCart")}</button>
      </div>
      <button type="button" class="btn btn-buy-now" data-product="${p.id}" ${soldOut ? "disabled" : ""}>${t("buyNow")}</button>
    </div>
  `;
}

function handleProductAreaClick(e) {
  const swatch = e.target.closest(".swatch");
  if (swatch) {
    selection[swatch.dataset.product].color = swatch.dataset.color;
    renderProducts();
    if (currentDetailId) renderProductDetail();
    return;
  }
  const thumb = e.target.closest(".product-thumb");
  if (thumb) {
    selection[thumb.dataset.product].imgIndex = Number(thumb.dataset.img);
    renderProducts();
    if (currentDetailId) renderProductDetail();
    return;
  }
  const opener = e.target.closest("[data-open-detail]");
  if (opener && opener.dataset.openDetail) {
    openProductDetail(opener.dataset.openDetail);
    return;
  }
  const qtyMinus = e.target.closest(".qty-minus");
  if (qtyMinus) {
    adjustQty(qtyMinus.dataset.product, -1);
    return;
  }
  const qtyPlus = e.target.closest(".qty-plus");
  if (qtyPlus) {
    adjustQty(qtyPlus.dataset.product, 1);
    return;
  }
  const addBtn = e.target.closest(".btn-add");
  if (addBtn) {
    addToCart(addBtn.dataset.product);
    return;
  }
  const buyBtn = e.target.closest(".btn-buy-now");
  if (buyBtn) {
    addToCart(buyBtn.dataset.product);
    closeProductDetail();
    openCheckout();
  }
}

function handleProductAreaChange(e) {
  if (e.target.classList.contains("size-select")) {
    selection[e.target.dataset.product].size = e.target.value;
    selection[e.target.dataset.product].qty = 1;
    renderProducts();
    if (currentDetailId) renderProductDetail();
    return;
  }
  if (e.target.classList.contains("qty-input")) {
    const p = PRODUCTS.find(pr => pr.id === e.target.dataset.product);
    const sel = selection[e.target.dataset.product];
    const selSize = p.sizes.find(s => s.size === sel.size);
    const max = Math.max(selSize ? selSize.stock : 1, 1);
    setQty(e.target.dataset.product, Number(e.target.value), max);
  }
}

function setQty(productId, value, max) {
  const clamped = Math.min(Math.max(Math.round(value) || 1, 1), max);
  selection[productId].qty = clamped;
  renderProducts();
  if (currentDetailId) renderProductDetail();
}

function adjustQty(productId, delta) {
  const p = PRODUCTS.find(pr => pr.id === productId);
  const sel = selection[productId];
  const selSize = p.sizes.find(s => s.size === sel.size);
  const max = Math.max(selSize ? selSize.stock : 1, 1);
  setQty(productId, (sel.qty || 1) + delta, max);
}

document.getElementById("productGrid").addEventListener("click", handleProductAreaClick);
document.getElementById("productGrid").addEventListener("change", handleProductAreaChange);
document.getElementById("detailContent").addEventListener("click", handleProductAreaClick);
document.getElementById("detailContent").addEventListener("change", handleProductAreaChange);

// ---- Cart ----
function addToCart(productId) {
  const p = PRODUCTS.find(p => p.id === productId);
  const sel = selection[productId];
  const qty = sel.qty || 1;
  const lineId = `${productId}__${sel.color}__${sel.size}`;
  const existing = cart.find(item => item.lineId === lineId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      lineId, productId, color: sel.color, size: sel.size, qty,
      name: p.name, price: p.price
    });
  }
  sel.qty = 1;
  saveCart();
  renderCart();
  renderProducts();
  if (currentDetailId) renderProductDetail();

  document.querySelectorAll(`.btn-add[data-product="${productId}"]`).forEach(btn => {
    const original = t("addToCart");
    btn.textContent = t("added");
    btn.classList.add("btn-added");
    setTimeout(() => { btn.textContent = original; btn.classList.remove("btn-added"); }, 900);
  });
}

function removeFromCart(lineId) {
  cart = cart.filter(i => i.lineId !== lineId);
  saveCart();
  renderCart();
}

function changeQty(lineId, delta) {
  const item = cart.find(i => i.lineId === lineId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(lineId);
  } else {
    saveCart();
    renderCart();
  }
}

function cartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function renderCartCount() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById("cartCount");
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

function renderCart() {
  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartSubtotal");
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (cart.length === 0) {
    list.innerHTML = `<p class="cart-empty">${t("cartEmpty")}</p>`;
    checkoutBtn.disabled = true;
  } else {
    list.innerHTML = cart.map(item => `
      <div class="cart-item">
        <span class="cart-swatch swatch-${item.color}"></span>
        <div class="cart-item-info">
          <strong>${item.name[lang]}</strong>
          <span class="cart-item-meta">${t("sizeLabel")}: ${item.size}</span>
          <div class="qty-control">
            <button type="button" data-qty="-1" data-line="${item.lineId}">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty="1" data-line="${item.lineId}">+</button>
          </div>
        </div>
        <div class="cart-item-end">
          <span>${priceText(item.price * item.qty)}</span>
          <button type="button" class="remove-btn" data-remove="${item.lineId}">${t("remove")}</button>
        </div>
      </div>
    `).join("");
    checkoutBtn.disabled = false;
  }
  totalEl.textContent = priceText(cartTotal());
  renderCartCount();
}

document.getElementById("cartItems").addEventListener("click", (e) => {
  const qtyBtn = e.target.closest("[data-qty]");
  if (qtyBtn) changeQty(qtyBtn.dataset.line, Number(qtyBtn.dataset.qty));
  const removeBtn = e.target.closest("[data-remove]");
  if (removeBtn) removeFromCart(removeBtn.dataset.remove);
});

document.getElementById("clearCartBtn").addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
});

// ---- Cart drawer open/close ----
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("overlay");
function openCart() { cartDrawer.classList.add("open"); cartOverlay.classList.add("visible"); }
function closeCart() { cartDrawer.classList.remove("open"); cartOverlay.classList.remove("visible"); }
document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", () => { closeCart(); closeCheckout(); closePinGate(); closeProductDetail(); });

// ---- Checkout modal ----
const checkoutModal = document.getElementById("checkoutModal");
function openCheckout() {
  if (cart.length === 0) return;
  checkoutModal.classList.add("open");
  cartOverlay.classList.add("visible");
}
function closeCheckout() { checkoutModal.classList.remove("open"); cartOverlay.classList.remove("visible"); }
document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
document.getElementById("checkoutClose").addEventListener("click", closeCheckout);

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const country = document.getElementById("custCountry").value;
  const address = document.getElementById("custAddress").value.trim();
  const notes = document.getElementById("custNotes").value.trim();
  if (!name || !phone) return;

  const lines = cart.map(i =>
    `- ${i.name.ar} / ${i.name.en} | ${t("colorLabel")}: ${i.color} | ${t("sizeLabel")}: ${i.size} | x${i.qty} = ${priceText(i.price * i.qty)}`
  ).join("\n");

  const message =
`طلب جديد من موقع MM PRAN
------------------------
${lines}
------------------------
${t("subtotal")}: ${priceText(cartTotal())}

${t("nameLabel")}: ${name}
${t("phoneLabel")}: ${phone}
${t("countryLabel")}: ${country}
${t("addressLabel")}: ${address || "-"}
${t("notesLabel")}: ${notes || "-"}`;

  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  openExternalLink(url);
});

// ---- Control Desk (composes a product entry, publishes the live page) ----
const TSHIRT_TYPE_LABEL = { ar: "تيشيرت", en: "T-Shirt" };

const adminPage = document.getElementById("adminPage");
const storefrontRoot = document.getElementById("storefrontRoot");
const admEditSelect = document.getElementById("admEditSelect");
let admEditingId = "";
let admDeleteArmed = false;
let admDeleteArmTimer = null;

function populateAdminEditOptions() {
  const prevValue = admEditSelect.value;
  admEditSelect.innerHTML = `<option value="">${t("admNewItem")}</option>` +
    PRODUCTS.map(p => `<option value="${p.id}">${(p.name && (p.name[lang] || p.name.ar)) || p.id}</option>`).join("");
  admEditSelect.value = PRODUCTS.some(p => p.id === prevValue) ? prevValue : "";
}

function resetAdminForm() {
  admEditingId = "";
  admEditSelect.value = "";
  document.getElementById("admNameAr").value = "";
  document.getElementById("admNameEn").value = "";
  document.getElementById("admPrice").value = 75;
  document.querySelectorAll("#adminPage .admin-colors input").forEach(el => { el.checked = true; });
  document.querySelectorAll("#adminPage .admin-size-row").forEach(row => {
    row.querySelector(".size-check").checked = true;
    row.querySelector(".size-stock").value = 10;
  });
  document.getElementById("admDescAr").value = "";
  document.getElementById("admDescEn").value = "";
  admPhotoItems = [];
  admPhotoActiveIndex = 0;
  admDeleteArmed = false;
  clearTimeout(admDeleteArmTimer);
  const saveBtn = document.getElementById("admSave");
  saveBtn.disabled = false;
  saveBtn.textContent = t("admSaveBtn");
  const delBtn = document.getElementById("admDelete");
  delBtn.hidden = true;
  delBtn.disabled = false;
  delBtn.textContent = t("admDeleteBtn");
  document.getElementById("admSaveStatus").hidden = true;
  renderAdminPhotoThumbs();
  renderAdminPreview();
}

function loadProductIntoAdminForm(p) {
  admEditingId = p.id;
  document.getElementById("admNameAr").value = (p.name && p.name.ar) || "";
  document.getElementById("admNameEn").value = (p.name && p.name.en) || "";
  document.getElementById("admPrice").value = p.price || 0;
  document.querySelectorAll("#adminPage .admin-colors input").forEach(el => {
    el.checked = (p.colors || []).includes(el.value);
  });
  document.querySelectorAll("#adminPage .admin-size-row").forEach(row => {
    const size = row.querySelector(".size-check").value;
    const match = (p.sizes || []).find(s => s.size === size);
    row.querySelector(".size-check").checked = !!match;
    row.querySelector(".size-stock").value = match ? match.stock : 0;
  });
  document.getElementById("admDescAr").value = (p.desc && p.desc.ar) || "";
  document.getElementById("admDescEn").value = (p.desc && p.desc.en) || "";
  admPhotoItems = (p.images || []).map(src => ({ src, file: null }));
  admPhotoActiveIndex = 0;
  admDeleteArmed = false;
  clearTimeout(admDeleteArmTimer);
  const saveBtn = document.getElementById("admSave");
  saveBtn.disabled = false;
  saveBtn.textContent = t("admSaveBtn");
  const delBtn = document.getElementById("admDelete");
  delBtn.hidden = false;
  delBtn.disabled = false;
  delBtn.textContent = t("admDeleteBtn");
  document.getElementById("admSaveStatus").hidden = true;
  renderAdminPhotoThumbs();
  renderAdminPreview();
}

admEditSelect.addEventListener("change", () => {
  const id = admEditSelect.value;
  if (!id) { resetAdminForm(); return; }
  const p = PRODUCTS.find(p => p.id === id);
  if (p) loadProductIntoAdminForm(p);
});

// ---- PIN gate + full-page Control Desk (owner-only, hidden from customers) ----
const pinGateModal = document.getElementById("pinGateModal");
const pinGateForm = document.getElementById("pinGateForm");
const pinGateInput = document.getElementById("pinGateInput");
const pinGateError = document.getElementById("pinGateError");

function openPinGate() {
  pinGateModal.classList.add("open");
  cartOverlay.classList.add("visible");
  pinGateError.hidden = true;
  pinGateInput.value = "";
  setTimeout(() => pinGateInput.focus(), 50);
}
function closePinGate() { pinGateModal.classList.remove("open"); cartOverlay.classList.remove("visible"); }

function openAdminPage() {
  storefrontRoot.hidden = true;
  adminPage.hidden = false;
  populateAdminEditOptions();
  resetAdminForm();
  window.scrollTo(0, 0);
}
function closeAdminPage() {
  adminPage.hidden = true;
  storefrontRoot.hidden = false;
}

document.getElementById("ownerAccessBtn").addEventListener("click", openPinGate);
document.getElementById("pinGateClose").addEventListener("click", closePinGate);
pinGateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pinGateInput.value.trim().toLowerCase() === CONFIG.ADMIN_PIN.toLowerCase()) {
    closePinGate();
    openAdminPage();
  } else {
    pinGateError.hidden = false;
  }
});
document.getElementById("adminBackLink").addEventListener("click", (e) => {
  e.preventDefault();
  closeAdminPage();
});

let admPreviewColor = "black";
function currentAdminColors() {
  return Array.from(document.querySelectorAll("#adminPage .admin-colors input:checked")).map(el => el.value);
}

function currentAdminSizes() {
  return Array.from(document.querySelectorAll("#adminPage .admin-size-row")).map(row => ({
    size: row.querySelector(".size-check").value,
    checked: row.querySelector(".size-check").checked,
    stock: Number(row.querySelector(".size-stock").value) || 0
  })).filter(s => s.checked).map(s => ({ size: s.size, stock: s.stock }));
}

function renderAdminPreview() {
  const colors = currentAdminColors();
  if (!colors.includes(admPreviewColor)) admPreviewColor = colors[0] || "black";

  const activePhoto = admPhotoItems[admPhotoActiveIndex] || admPhotoItems[0];
  if (activePhoto) {
    document.getElementById("admPreviewArt").innerHTML =
      `<img src="${activePhoto.src}" alt="preview">`;
  } else {
    const nameEn = document.getElementById("admNameEn").value || "Preview";
    const fakeProduct = { category: "tshirt", name: { en: nameEn } };
    document.getElementById("admPreviewArt").innerHTML = productArtworkSVG(fakeProduct, admPreviewColor);
  }

  const swatchesEl = document.getElementById("admPreviewSwatches");
  swatchesEl.innerHTML = colors.map(c => `
    <button type="button" class="swatch swatch-${c} ${c === admPreviewColor ? "active" : ""}" data-preview-color="${c}"></button>
  `).join("");
}

document.getElementById("adminPage").addEventListener("input", renderAdminPreview);
document.getElementById("adminPage").addEventListener("change", renderAdminPreview);
document.getElementById("admPreviewSwatches").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-preview-color]");
  if (!btn) return;
  admPreviewColor = btn.dataset.previewColor;
  renderAdminPreview();
});

// ---- Control Desk photo picker ----
// Each item is { src, file }: file is set (and needs compressing) for a newly
// picked photo; file is null for a photo already saved with the product (src
// is already its saved data URI, so it's kept as-is unless replaced).
let admPhotoItems = [];
let admPhotoActiveIndex = 0;

document.getElementById("admPhotos").addEventListener("change", (e) => {
  // A file input's change event replaces its whole selection, not adds to it —
  // so accumulate onto the existing list ourselves, up to 7 total.
  const newItems = Array.from(e.target.files).map(f => ({ file: f, src: URL.createObjectURL(f) }));
  admPhotoItems = admPhotoItems.concat(newItems).slice(0, 7);
  admPhotoActiveIndex = Math.min(admPhotoActiveIndex, Math.max(admPhotoItems.length - 1, 0));
  e.target.value = ""; // clears the picker so choosing the same file again still fires "change"
  renderAdminPhotoThumbs();
  renderAdminPreview();
});

function renderAdminPhotoThumbs() {
  const wrap = document.getElementById("admPhotoThumbs");
  wrap.innerHTML = admPhotoItems.map((item, i) => `
    <div class="admin-photo-thumb-wrap">
      <button type="button" class="admin-photo-thumb ${i === admPhotoActiveIndex ? "active" : ""}" data-photo-index="${i}">
        <img src="${item.src}" alt="">
      </button>
      <button type="button" class="admin-photo-remove" data-photo-remove="${i}" aria-label="remove">×</button>
    </div>
  `).join("");
}

document.getElementById("admPhotoThumbs").addEventListener("click", (e) => {
  const removeBtn = e.target.closest("[data-photo-remove]");
  if (removeBtn) {
    const idx = Number(removeBtn.dataset.photoRemove);
    const removed = admPhotoItems.splice(idx, 1)[0];
    if (removed && removed.file) URL.revokeObjectURL(removed.src);
    if (admPhotoActiveIndex >= admPhotoItems.length) admPhotoActiveIndex = Math.max(admPhotoItems.length - 1, 0);
    renderAdminPhotoThumbs();
    renderAdminPreview();
    return;
  }
  const btn = e.target.closest("[data-photo-index]");
  if (!btn) return;
  admPhotoActiveIndex = Number(btn.dataset.photoIndex);
  renderAdminPhotoThumbs();
  renderAdminPreview();
});

function slugify(text) {
  return (text || "item")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "item";
}

// ---- Real persistence: the page saves a new version of itself ----
let artifactAPI = null;
(async () => {
  if (typeof claude !== "undefined" && claude.use) {
    try { artifactAPI = await claude.use("artifact"); } catch (e) { artifactAPI = null; }
  }
})();

function compressImage(file, maxDim, quality) {
  maxDim = maxDim || 900;
  quality = quality || 0.72;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width >= height) { height = Math.round(height * maxDim / width); width = maxDim; }
          else { width = Math.round(width * maxDim / height); height = maxDim; }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function buildPublishHtml() {
  const productsCode = `/*PRODUCTS_START*/\nconst PRODUCTS = ${JSON.stringify(PRODUCTS)};\n/*PRODUCTS_END*/`;
  const marker = /\/\*PRODUCTS_START\*\/[\s\S]*?\/\*PRODUCTS_END\*\//;
  const body = PAGE_TEMPLATE.replace(marker, productsCode);
  return "<!DOCTYPE html>\n" + body;
}

document.getElementById("admSave").addEventListener("click", async () => {
  const btn = document.getElementById("admSave");
  const statusEl = document.getElementById("admSaveStatus");
  const showStatus = (msg) => { statusEl.hidden = false; statusEl.textContent = msg; };

  if (!artifactAPI) {
    showStatus(t("admSaveUnavailable"));
    return;
  }

  const nameAr = document.getElementById("admNameAr").value.trim() || "منتج جديد";
  const nameEn = document.getElementById("admNameEn").value.trim() || "New Product";
  const price = Number(document.getElementById("admPrice").value) || 0;
  const sizes = currentAdminSizes();
  const colors = currentAdminColors();
  const descAr = document.getElementById("admDescAr").value.trim();
  const descEn = document.getElementById("admDescEn").value.trim();

  const isEditing = !!admEditingId;
  const id = isEditing ? admEditingId : `${slugify(nameEn)}-${Date.now().toString().slice(-5)}`;
  const existingIndex = PRODUCTS.findIndex(p => p.id === id);
  const previousProduct = existingIndex !== -1 ? PRODUCTS[existingIndex] : null;

  btn.disabled = true;
  btn.textContent = t("admSaving");
  statusEl.hidden = true;

  try {
    const images = await Promise.all(admPhotoItems.map(item => item.file ? compressImage(item.file) : Promise.resolve(item.src)));
    const product = {
      id, category: "tshirt",
      typeLabel: { ar: TSHIRT_TYPE_LABEL.ar, en: TSHIRT_TYPE_LABEL.en },
      name: { ar: nameAr, en: nameEn },
      price, colors, sizes,
      desc: { ar: descAr, en: descEn }
    };
    if (images.length > 0) product.images = images;

    if (isEditing && existingIndex !== -1) {
      PRODUCTS[existingIndex] = product;
    } else {
      PRODUCTS.push(product);
    }
    await artifactAPI.publish(buildPublishHtml());
    showStatus(t("admSaved"));
    // The page reloads automatically once the new version is live.
  } catch (err) {
    if (isEditing && previousProduct && existingIndex !== -1) {
      PRODUCTS[existingIndex] = previousProduct;
    } else if (!isEditing) {
      const idx = PRODUCTS.findIndex(p => p.id === id);
      if (idx !== -1) PRODUCTS.splice(idx, 1);
    }
    btn.disabled = false;
    btn.textContent = t("admSaveBtn");
    const code = err && err.code;
    if (code === "not_granted" || code === "not_writer") showStatus(t("admSaveNoAccess"));
    else if (code === "conflict") showStatus(t("admSaveConflict"));
    else showStatus(t("admSaveError"));
  }
});

document.getElementById("admDelete").addEventListener("click", async () => {
  const btn = document.getElementById("admDelete");
  const statusEl = document.getElementById("admSaveStatus");
  const showStatus = (msg) => { statusEl.hidden = false; statusEl.textContent = msg; };

  if (!admEditingId) return;

  if (!admDeleteArmed) {
    admDeleteArmed = true;
    btn.textContent = t("admConfirmDelete");
    clearTimeout(admDeleteArmTimer);
    admDeleteArmTimer = setTimeout(() => {
      admDeleteArmed = false;
      btn.textContent = t("admDeleteBtn");
    }, 3000);
    return;
  }

  clearTimeout(admDeleteArmTimer);
  admDeleteArmed = false;

  if (!artifactAPI) {
    showStatus(t("admSaveUnavailable"));
    btn.textContent = t("admDeleteBtn");
    return;
  }

  const idx = PRODUCTS.findIndex(p => p.id === admEditingId);
  if (idx === -1) return;
  const removed = PRODUCTS[idx];

  btn.disabled = true;
  btn.textContent = t("admDeleting");
  statusEl.hidden = true;

  try {
    PRODUCTS.splice(idx, 1);
    await artifactAPI.publish(buildPublishHtml());
    showStatus(t("admDeleted"));
    // The page reloads automatically once the new version is live.
  } catch (err) {
    PRODUCTS.splice(idx, 0, removed);
    btn.disabled = false;
    btn.textContent = t("admDeleteBtn");
    const code = err && err.code;
    if (code === "not_granted" || code === "not_writer") showStatus(t("admSaveNoAccess"));
    else if (code === "conflict") showStatus(t("admSaveConflict"));
    else showStatus(t("admSaveError"));
  }
});

// ---- Init ----
document.getElementById("contactWhatsappBtn").href =
  `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحبا! حابب أسأل عن منتجاتكم 👋")}`;
applyLanguage();
renderQuote();
setInterval(renderQuote, 6000);
renderCart();
