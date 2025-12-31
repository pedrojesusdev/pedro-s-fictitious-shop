import { products } from "../data/products.js";
import { createProductCard } from "../utils/createProductCard.js";

export function productsPage() {
  const container = document.querySelector(".products-grid");

  if (!container) return;

  container.innerHTML = "";

  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}
