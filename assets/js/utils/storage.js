const STORAGE_KEY = "cart";

export function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(product) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart(cart);
  updateCartCount();
  return cart;
}

export function removeFromCart(productId) {
  const cart = getCart();
  const filteredCart = cart.filter(item => item.id !== productId);
  saveCart(filteredCart);
  updateCartCount();
  return filteredCart;
}

export function updateQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
    saveCart(cart);
    updateCartCount();
  }
  
  return cart;
}

export function clearCart() {
  localStorage.removeItem(STORAGE_KEY);
  updateCartCount();
}

export function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);
}

export function getCartCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + (item.quantity || 1), 0);
}

export function updateCartCount() {
  const count = getCartCount();
  const cartLink = document.querySelector('a[data-link="/cart"]') || document.querySelector('.cart-link');
  if (cartLink) {
    const existingBadge = cartLink.querySelector('.cart-badge');
    if (count > 0) {
      if (existingBadge) {
        existingBadge.textContent = count;
      } else {
        const badge = document.createElement('span');
        badge.className = 'cart-badge';
        badge.textContent = count;
        cartLink.appendChild(badge);
      }
    } else if (existingBadge) {
      existingBadge.remove();
    }
  }
}
    