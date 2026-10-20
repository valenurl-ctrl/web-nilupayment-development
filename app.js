const menu = [
  { id: "black", name: "Black", category: "Kopi Klasik", price: 15000, description: "Espresso dan air." },
  { id: "white", name: "White", category: "Kopi Klasik", price: 17000, description: "Espresso dengan campuran fresh milk." },
  { id: "black-white", name: "Black White", category: "Kopi Klasik", price: 17000, description: "Perpaduan espresso dengan SKM." },
  { id: "black-choco", name: "Black Choco", category: "Kopi Klasik", price: 17000, description: "Espresso, coklat, dan fresh milk." },
  { id: "es-kopi-caramelia", name: "Es Kopi Caramelia", category: "Es Kopi", price: 19000, description: "Es kopi susu dengan caramel." },
  { id: "es-kopi-ariaa", name: "Es Kopi Ariaa", category: "Es Kopi", price: 19000, description: "Es kopi susu gula aren." },
  { id: "es-kopi-vanyaa", name: "Es Kopi Vanyaa", category: "Es Kopi", price: 19000, description: "Es kopi susu vanilla." },
  { id: "es-kopi-haziaa", name: "Es Kopi Haziaa", category: "Es Kopi", price: 19000, description: "Es kopi susu hazelnut." },
  { id: "es-kopi-sinnaa", name: "Es Kopi Sinnaa", category: "Es Kopi Spesial", price: 21000, description: "Es kopi susu spesial dengan syrup cinnamon." },
  { id: "es-kopi-saltaa", name: "Es Kopi Saltaa", category: "Es Kopi Spesial", price: 21000, description: "Es kopi susu spesial dengan sea salt butterscotch." },
  { id: "es-kopi-rumaaa", name: "Es Kopi Rumaaa", category: "Es Kopi Spesial", price: 21000, description: "Es kopi susu spesial dengan rum dan vanilla." },
  { id: "dranaa", name: "Dranaa", category: "Fruity Fresh", price: 15000, description: "Fresh juice buah naga dan pisang." },
  { id: "nalyaa", name: "Nalyaa", category: "Fruity Fresh", price: 15000, description: "Fresh juice nanas dan strawberry." },
  { id: "fresh-juice", name: "Fresh Juice", category: "Fruity Fresh", price: 15000, description: "Pilihan strawberry, nanas, buah naga, atau pisang." },
  { id: "matcha", name: "Matcha", category: "Milk Based", price: 21000, description: "Matcha dan susu." },
  { id: "chocolate", name: "Chocolate", category: "Milk Based", price: 19000, description: "Coklat dan susu." },
  { id: "red-velvet", name: "Red Velvet", category: "Milk Based", price: 19000, description: "Red velvet dan susu." },
  { id: "taro", name: "Taro", category: "Milk Based", price: 19000, description: "Taro dan susu." },
  { id: "leciti", name: "Leciti", category: "Refresher", price: 15000, description: "Teh spesial dengan buah leci." },
  { id: "lemoniti", name: "Lemoniti", category: "Refresher", price: 15000, description: "Teh spesial dengan lemon segar." },
  { id: "berry-lemona", name: "Berry Lemona", category: "Refresher", price: 17000, description: "Lemon soda dengan strawberry segar." },
  { id: "leci-lemona", name: "Leci Lemona", category: "Refresher", price: 17000, description: "Lemon soda dengan buah leci." },
  { id: "tubruk", name: "Tubruk", category: "Traditional Drink", price: 15000, description: "Kopi tubruk klasik." },
  { id: "tubruk-susu", name: "Tubruk Susu", category: "Traditional Drink", price: 15000, description: "Kopi tubruk klasik dengan SKM." },
  { id: "jahe-susu", name: "Jahe Susu", category: "Traditional Drink", price: 15000, description: "Wedang jahe hangat dengan SKM." },
  { id: "pour-over", name: "Pour Over", category: "Pour Over", price: 19000, description: "Manual brew dengan biji kopi pilihan." },
  { id: "ayam-bakar-madu", name: "Ayam Bakar Madu", category: "Spesial Ayam", price: 23000, description: "Ayam bakar manis." },
  { id: "ayam-goreng-crispy", name: "Ayam Goreng Crispy", category: "Spesial Ayam", price: 23000, description: "Ayam goreng krispi." },
  { id: "ayam-geprek-spesial", name: "Ayam Geprek Spesial", category: "Spesial Ayam", price: 23000, description: "Ayam geprek dengan sambal pilihan." },
  { id: "ayam-pecel-spesial", name: "Ayam Pecel Spesial", category: "Spesial Ayam", price: 23000, description: "Ayam goreng dengan saus pecel." },
  { id: "telur-sambal-kemangi", name: "Telur Sambal Kemangi", category: "Spesial Telur", price: 19000, description: "Sambal kemangi dan telur dadar spesial." },
  { id: "nasi-pecel-telur", name: "Nasi Pecel Telur", category: "Spesial Telur", price: 19000, description: "Telur dadar dengan nasi pecel." },
  { id: "nasi-goreng-spesial", name: "Nasi Goreng Spesial", category: "Spesial Telur", price: 21000, description: "Nasi goreng spesial dengan telur." },
  { id: "carbonara", name: "Carbonara", category: "Pasta", price: 21000, description: "Pasta dengan saus cream dan garlic." },
  { id: "bolognese", name: "Bolognese", category: "Pasta", price: 21000, description: "Pasta dengan saus tomat spesial." },
  { id: "fries", name: "Fries", category: "Salty Snack", price: 17000, description: "Kentang goreng renyah." },
  { id: "fried-cassava", name: "Fried Cassava", category: "Salty Snack", price: 15000, description: "Singkong goreng renyah." },
  { id: "corn-ribs", name: "Corn Ribs", category: "Salty Snack", price: 17000, description: "Jagung dengan saus spesial." },
  { id: "mendoan", name: "Mendoan", category: "Salty Snack", price: 15000, description: "Tempe goreng spesial, krispi dan lembut." },
  { id: "tahu-crispy", name: "Tahu Crispy", category: "Salty Snack", price: 15000, description: "Tahu goreng krispi dengan pilihan bumbu BBQ atau balado." },
  { id: "banana-bites", name: "Banana Bites", category: "Sweety Snack", price: 17000, description: "Pisang goreng dengan pilihan topping coklat, keju, atau caramel." },
  { id: "roti-bakar", name: "Roti Bakar", category: "Sweety Snack", price: 17000, description: "Roti bakar dengan pilihan topping coklat, keju, atau mix." },
  { id: "platter-a", name: "Platter A", category: "Mix Platter", price: 19000, description: "Mix snack, fries, nugget, dan sosis." },
  { id: "platter-b", name: "Platter B", category: "Mix Platter", price: 19000, description: "Mix snack, tahu krispi, otak-otak, dan cireng." },
];

const menuCategories = [
  "Kopi Klasik",
  "Es Kopi",
  "Es Kopi Spesial",
  "Fruity Fresh",
  "Milk Based",
  "Refresher",
  "Traditional Drink",
  "Pour Over",
  "Spesial Ayam",
  "Spesial Telur",
  "Pasta",
  "Salty Snack",
  "Sweety Snack",
  "Mix Platter",
];
const categories = ["Semua", ...menuCategories];
const cart = new Map();
const reviewStorageKey = "n24hours-reviews";
const tableParam = new URLSearchParams(window.location.search).get("table");
const tableNumber = tableParam && /^\d{1,3}$/.test(tableParam) ? tableParam : "05";
const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

const categoryList = document.querySelector("#category-list");
const menuGrid = document.querySelector("#menu-grid");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalContent = document.querySelector("#modal-content");
const modalClose = document.querySelector("#modal-close");
const cartDock = document.querySelector("#cart-dock");
const toast = document.querySelector("#toast");
const reviewSummary = document.querySelector("#review-summary");
let activeCategory = "Semua";
let toastTimer;
let reviews = loadReviews();

document.querySelector("#table-label").textContent = `MEJA ${tableNumber.padStart(2, "0")}`;
updateReviewSummary();

function renderCategories() {
  categoryList.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-button${category === activeCategory ? " active" : ""}"
          type="button"
          aria-pressed="${category === activeCategory}"
          data-category="${category}"
        >${category}</button>
      `,
    )
    .join("");
}

function renderMenu() {
  const visibleCategories =
    activeCategory === "Semua" ? menuCategories : [activeCategory];
  const visibleItems = menu.filter((item) => visibleCategories.includes(item.category));

  document.querySelector("#menu-count").textContent = `${visibleItems.length} pilihan`;
  menuGrid.innerHTML = visibleCategories
    .map((category) => {
      const items = visibleItems.filter((item) => item.category === category);
      if (items.length === 0) return "";
      return `
        <section class="menu-category-group" aria-label="${category}">
          <h3 class="category-heading">${category}</h3>
          ${items
            .map(
              (item) => `
                <article class="menu-card">
                  <div class="product-details">
                    <div class="product-topline">
                      <h4 class="product-name">${item.name}</h4>
                      <span class="product-price">${rupiah.format(item.price)}</span>
                    </div>
                    <p class="product-description">${item.description}</p>
                    <button class="add-button" type="button" data-add="${item.id}">
                      <span>Tambah ke pesanan</span><span aria-hidden="true">+</span>
                    </button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </section>
      `;
    })
    .join("");
}

function cartEntries() {
  return [...cart.entries()]
    .map(([id, quantity]) => ({
      product: menu.find((item) => item.id === id),
      quantity,
    }))
    .filter((entry) => entry.product);
}

function cartCount() {
  return [...cart.values()].reduce((total, quantity) => total + quantity, 0);
}

function cartTotal() {
  return cartEntries().reduce(
    (total, entry) => total + entry.product.price * entry.quantity,
    0,
  );
}

function updateCartDock() {
  const count = cartCount();
  cartDock.hidden = count === 0;
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#dock-total").textContent = rupiah.format(cartTotal());
}

function addToCart(id) {
  cart.set(id, (cart.get(id) || 0) + 1);
  updateCartDock();
  const product = menu.find((item) => item.id === id);
  showToast(`${product.name} ditambahkan`);
}

function changeQuantity(id, change) {
  const nextQuantity = (cart.get(id) || 0) + change;
  if (nextQuantity <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, nextQuantity);
  }
  updateCartDock();
  if (cartCount() === 0) {
    closeModal();
  } else {
    showCart();
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 1900);
}

function isReview(value) {
  return (
    value &&
    Number.isInteger(value.rating) &&
    value.rating >= 1 &&
    value.rating <= 5 &&
    typeof value.text === "string" &&
    typeof value.createdAt === "string" &&
    !Number.isNaN(Date.parse(value.createdAt))
  );
}

function loadReviews() {
  try {
    const storedReviews = window.localStorage.getItem(reviewStorageKey);
    if (!storedReviews) return [];
    const parsedReviews = JSON.parse(storedReviews);
    if (!Array.isArray(parsedReviews) || !parsedReviews.every(isReview)) {
      throw new Error("Format ulasan tersimpan tidak valid.");
    }
    return parsedReviews;
  } catch (error) {
    console.error("Gagal memuat ulasan:", error);
    showToast("Ulasan tersimpan tidak dapat dibaca.");
    return [];
  }
}

function updateReviewSummary() {
  if (reviews.length === 0) {
    reviewSummary.textContent = "Rating";
    return;
  }
  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
  reviewSummary.textContent = `${averageRating.toFixed(1)} (${reviews.length})`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function showReviews() {
  const averageRating = reviews.length
    ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1)
    : "—";
  const reviewList = reviews.length
    ? reviews
        .map(
          (review) => `
            <article class="review-card">
              <div class="review-card-heading">
                <span class="review-stars" aria-label="${review.rating} dari 5 bintang">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
                <time>${new Date(review.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}</time>
              </div>
              <p>${escapeHTML(review.text)}</p>
            </article>
          `,
        )
        .join("")
    : '<p class="review-empty">Belum ada ulasan. Jadilah yang pertama!</p>';

  openModal(`
    <p class="modal-kicker">CERITAKAN PENGALAMANMU</p>
    <h2 class="modal-title" id="modal-title">Ulasan pelanggan</h2>
    <div class="review-rating-summary"><span aria-hidden="true">★</span> ${averageRating} <small>· ${reviews.length} ulasan</small></div>
    <div class="review-list">${reviewList}</div>
    <form class="review-form" id="review-form">
      <h3>Tulis ulasan</h3>
      <label for="review-rating">Rating</label>
      <select id="review-rating" name="rating" required>
        <option value="">Pilih rating</option>
        <option value="5">★★★★★ — Sangat puas</option>
        <option value="4">★★★★☆ — Puas</option>
        <option value="3">★★★☆☆ — Cukup</option>
        <option value="2">★★☆☆☆ — Kurang puas</option>
        <option value="1">★☆☆☆☆ — Tidak puas</option>
      </select>
      <label for="review-text">Komentar</label>
      <textarea id="review-text" name="text" rows="3" maxlength="500" placeholder="Bagikan pengalamanmu..." required></textarea>
      <button class="button button-dark button-wide" type="submit">Kirim ulasan</button>
      <p class="review-note">Ulasan disimpan di browser perangkat ini.</p>
    </form>
  `);
}

function openModal(content) {
  modalContent.innerHTML = content;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
}

function renderCartItems() {
  return cartEntries()
    .map(
      ({ product, quantity }) => `
        <div class="cart-item">
          <div class="cart-item-copy">
            <strong>${product.name}</strong>
            <span>${rupiah.format(product.price * quantity)}</span>
          </div>
          <div class="quantity-control" aria-label="Jumlah ${product.name}">
            <button type="button" data-change="-1" data-id="${product.id}" aria-label="Kurangi ${product.name}">−</button>
            <span>${quantity}</span>
            <button type="button" data-change="1" data-id="${product.id}" aria-label="Tambah ${product.name}">+</button>
          </div>
        </div>
      `,
    )
    .join("");
}

function showCart() {
  if (cartCount() === 0) {
    closeModal();
    return;
  }

  openModal(`
    <p class="modal-kicker">MEJA ${tableNumber.padStart(2, "0")} · PESANANMU</p>
    <h2 class="modal-title" id="modal-title">Cek pesanan</h2>
    <div class="cart-items">${renderCartItems()}</div>
    <div class="checkout-note"><span aria-hidden="true">✦</span><span>Pesanan akan disiapkan setelah pembayaran dikonfirmasi.</span></div>
    <div class="summary-row total"><span>Total pembayaran</span><span>${rupiah.format(cartTotal())}</span></div>
    <button class="button button-dark button-wide" id="go-to-payment" type="button">Lanjut ke pembayaran <span aria-hidden="true">↗</span></button>
  `);
}

function qrPattern() {
  let cells = "";
  for (let row = 0; row < 13; row += 1) {
    for (let column = 0; column < 13; column += 1) {
      const inCorner =
        (row < 5 && column < 5) ||
        (row < 5 && column > 7) ||
        (row > 7 && column < 5);
      let filled;
      if (inCorner) {
        const localRow = row < 5 ? row : row - 8;
        const localColumn = column < 5 ? column : column - 8;
        filled =
          localRow === 0 ||
          localRow === 4 ||
          localColumn === 0 ||
          localColumn === 4 ||
          (localRow === 2 && localColumn === 2);
      } else {
        filled = (row * 7 + column * 11 + row * column) % 5 < 2;
      }
      cells += `<span class="${filled ? "filled" : ""}"></span>`;
    }
  }
  return cells;
}

function showPayment() {
  openModal(`
    <p class="modal-kicker">SATU LANGKAH LAGI</p>
    <h2 class="modal-title" id="modal-title">Bayar dengan QRIS</h2>
    <div class="payment-option">
      <span><strong>QRIS N-24HOURS</strong><small>Pembayaran sekali scan</small></span>
      <span class="qris-label">QRIS</span>
    </div>
    <div class="demo-qr" role="img" aria-label="Ilustrasi kode QR demo">${qrPattern()}</div>
    <p class="demo-caption">Ilustrasi tampilan pembayaran QRIS untuk menunjukkan alur checkout versi demo.</p>
    <div class="demo-warning"><strong>Mode demo:</strong> kode ini hanya ilustrasi dan tidak dapat dipindai atau digunakan untuk pembayaran sungguhan.</div>
    <div class="summary-row"><span>Meja ${tableNumber.padStart(2, "0")}</span><span>${cartCount()} item</span></div>
    <div class="summary-row total"><span>Total</span><span>${rupiah.format(cartTotal())}</span></div>
    <button class="button button-dark button-wide" id="confirm-payment" type="button">Simulasikan pembayaran berhasil</button>
  `);
}

function confirmDemoPayment() {
  const orderNumber = `NL-${Date.now().toString().slice(-6)}`;
  cart.clear();
  updateCartDock();
  openModal(`
    <div class="success-mark" aria-hidden="true">✓</div>
    <p class="modal-kicker">PEMBAYARAN SIMULASI BERHASIL</p>
    <h2 class="modal-title" id="modal-title">Terima kasih!</h2>
    <p class="order-id">Pesanan <strong>${orderNumber}</strong> · Meja ${tableNumber.padStart(2, "0")}</p>
    <div class="checkout-note"><span aria-hidden="true">✦</span><span>Pesanan demo kamu sudah diterima. Tim N-24HOURS akan menyiapkannya untuk diantar ke meja.</span></div>
    <button class="button button-dark button-wide" id="finish-order" type="button">Kembali ke menu</button>
  `);
}

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

document.querySelector("#open-cart").addEventListener("click", showCart);
document.querySelector("#open-reviews").addEventListener("click", showReviews);
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});

modalContent.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-change]");
  if (quantityButton) {
    changeQuantity(quantityButton.dataset.id, Number(quantityButton.dataset.change));
    return;
  }
  if (event.target.closest("#go-to-payment")) {
    showPayment();
    return;
  }
  if (event.target.closest("#confirm-payment")) {
    confirmDemoPayment();
    return;
  }
  if (event.target.closest("#finish-order")) closeModal();
});

modalContent.addEventListener("submit", (event) => {
  if (event.target.id !== "review-form") return;
  event.preventDefault();

  const formData = new FormData(event.target);
  const rating = Number(formData.get("rating"));
  const text = String(formData.get("text")).trim();
  if (!Number.isInteger(rating) || rating < 1 || rating > 5 || !text) {
    showToast("Pilih rating dan tulis komentar terlebih dahulu.");
    return;
  }

  const updatedReviews = [
    { rating, text, createdAt: new Date().toISOString() },
    ...reviews,
  ];
  try {
    window.localStorage.setItem(reviewStorageKey, JSON.stringify(updatedReviews));
    reviews = updatedReviews;
    updateReviewSummary();
    showReviews();
    showToast("Terima kasih atas ulasanmu!");
  } catch (error) {
    console.error("Gagal menyimpan ulasan:", error);
    showToast("Ulasan gagal disimpan di browser ini.");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

renderCategories();
renderMenu();
