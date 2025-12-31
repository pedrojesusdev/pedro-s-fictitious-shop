import { products } from "../data/products.js";
import { formatPrice } from "../utils/formatPrice.js";

export function productPage(id) {
  const app = document.getElementById("app");
  const product = products.find(p => String(p.id) === String(id));

  if (!product) {
    app.innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  app.innerHTML = `
    <section class="container product-page">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h1>${product.name}</h1>
        <p>${formatPrice(product.price)}</p>
        <button class="btn-primary">Add to cart</button>
      </div>
    </section>
  `;
}
