export function productsPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="products">
      <h1>Products</h1>
      <div class="products-grid"></div>
    </section>
  `;

  const grid = document.querySelector(".products-grid");

  products.forEach(product => {
    grid.innerHTML += createProductCard(product);
  });
}
