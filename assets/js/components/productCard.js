import { formatPrice } from "../utils/formatPrice.js";

export function createProductCard(product) {
  return `
    <article class="product-card">
      <a href="/product/${product.id}" data-link class="product-link">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${formatPrice(product.price)}</p>
      </a>
      <button class="btn-primary buy-btn" data-id="${product.id}">Buy</button>
    </article>
  `;
}
