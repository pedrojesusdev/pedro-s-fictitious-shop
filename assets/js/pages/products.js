import { products } from "../data/products.js";
import { createProductCard } from "../components/productCard.js";

export function productsPage() {
  const app = document.getElementById("app");
  app.innerHTML = `<section class="grid products"></section>`;

  const grid = document.querySelector(".products");

  products.forEach(p => {
    grid.appendChild(createProductCard(p));
  });
}
