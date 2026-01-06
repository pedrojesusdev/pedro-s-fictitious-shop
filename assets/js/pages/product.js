import { products } from "../data/products.js";
import { formatPrice } from "../utils/formatPrice.js";
import { addToCart } from "../utils/storage.js";

export function productPage(id) {
  const app = document.getElementById("app");
  const product = products.find(p => String(p.id) === String(id));

  if (!product) {
    app.innerHTML = `
      <section class="container">
        <div class="product-not-found">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <a href="/products" data-link="/products" class="btn-primary">Browse Products</a>
        </div>
      </section>
    `;
    return;
  }

  app.innerHTML = `
    <section class="container product-page">
      <div class="product-page-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-page-info">
        <h1>${product.name}</h1>
        <p class="product-category">${product.category}</p>
        <p class="product-price">${formatPrice(product.price)}</p>
        <button class="btn-primary add-to-cart-btn" data-id="${product.id}">Add to cart</button>
      </div>
    </section>
  `;

  // Add to cart functionality
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      addToCart(product);
      showNotification('Product added to cart!');
    });
  }
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
