import { getCart, removeFromCart, updateQuantity, clearCart, getCartTotal } from "../utils/storage.js";
import { formatPrice } from "../utils/formatPrice.js";

export function cartPage() {
  const app = document.getElementById("app");
  const cart = getCart();
  const total = getCartTotal();

  if (cart.length === 0) {
    app.innerHTML = `
      <section class="cart">
        <div class="cart-header">
          <h1>Your Cart</h1>
        </div>
        <div class="cart-empty">
          <p>Your cart is empty</p>
          <a href="/products" data-link="/products" class="btn-primary">Browse Products</a>
        </div>
      </section>
    `;
    return;
  }

  app.innerHTML = `
    <section class="cart">
      <div class="cart-header">
        <h1>Your Cart</h1>
        <button class="btn-secondary clear-cart-btn">Clear Cart</button>
      </div>
      
      <div class="cart-items">
        ${cart.map(item => createCartItem(item)).join("")}
      </div>
      
      <div class="cart-summary">
        <div class="cart-total">
          <h2>Total: ${formatPrice(total)}</h2>
        </div>
        <button class="btn-primary checkout-btn">Checkout</button>
      </div>
    </section>
  `;

  // Event listeners
  setupCartEventListeners();
}

function createCartItem(item) {
  const subtotal = item.price * (item.quantity || 1);
  
  return `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p class="cart-item-category">${item.category}</p>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      <div class="cart-item-controls">
        <div class="quantity-controls">
          <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
          <span class="quantity-value">${item.quantity || 1}</span>
          <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
        </div>
        <div class="cart-item-subtotal">
          <p>Subtotal: ${formatPrice(subtotal)}</p>
        </div>
        <button class="btn-remove" data-id="${item.id}">Remove</button>
      </div>
    </div>
  `;
}

function setupCartEventListeners() {
  // Remove item
  document.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = parseInt(e.target.getAttribute('data-id'));
      removeFromCart(productId);
      cartPage(); // Re-render
    });
  });

  // Quantity controls
  document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = parseInt(e.target.getAttribute('data-id'));
      const action = e.target.getAttribute('data-action');
      const item = getCart().find(item => item.id === productId);
      
      if (item) {
        const currentQuantity = item.quantity || 1;
        if (action === 'increase') {
          updateQuantity(productId, currentQuantity + 1);
        } else if (action === 'decrease') {
          updateQuantity(productId, currentQuantity - 1);
        }
        cartPage(); // Re-render
      }
    });
  });

  // Clear cart
  const clearBtn = document.querySelector('.clear-cart-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear your cart?')) {
        clearCart();
        cartPage(); // Re-render
      }
    });
  }

  // Checkout
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      alert('Checkout functionality coming soon!');
    });
  }
}
