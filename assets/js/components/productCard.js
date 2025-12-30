export function createProductCard(product) {
  const div = document.createElement("div");
  div.className = "product-card";

  div.innerHTML = `
    <img src="./assets/images/products/${product.image}">
    <h3>${product.name}</h3>
    <p>R$ ${product.price}</p>
  `;

  div.addEventListener("click", () => {
    history.pushState(null, "", `/product?id=${product.id}`);
    window.dispatchEvent(new Event("popstate"));
  });

  return div;
}
