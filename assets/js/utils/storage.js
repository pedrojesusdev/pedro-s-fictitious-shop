const STORAGE_KEY = "cart";

export function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem(STORAGE_KEY);
}
    