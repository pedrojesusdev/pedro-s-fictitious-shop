import { products } from "../data/products.js";
import { createProductCard } from "../components/productCard.js";
import { addToCart } from "../utils/storage.js";

export function homePage() {
  const app = document.getElementById("app");

  const featured = products.slice(0, 3);

  app.innerHTML = `
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1>Style that moves with you</h1>
          <p>
            Discover sneakers and apparel designed for performance and street style.
          </p>
          <a href="/products" data-link="/products" class="btn-primary">Shop Now</a>
        </div>
        <div class="hero-visual">
          <img src="assets/images/hero-shoe.png" alt="Featured Sneaker">
        </div>
      </div>
    </section>

    <section class="featured-products container">
      <h2>Featured</h2>
      <div class="products-grid">
        ${featured.map(createProductCard).join("")}
      </div>
    </section>
  `;

  // Adicionar event listeners aos botões Buy
  document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const productId = parseInt(e.target.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      if (product) {
        addToCart(product);
        showNotification('Product added to cart!');
      }
    });
  });
}

function showNotification(message) {
  // Remove existing notification if any
  const existing = document.querySelector('.cart-notification');
  if (existing) {
    existing.remove();
  }

  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
  }, 10);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}
