export function createProductCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="/product" data-link="/product">View product</a>
    </article>
  `;
}
