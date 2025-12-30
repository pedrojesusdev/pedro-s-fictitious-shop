export function renderHeader() {
  const header = document.getElementById("header");

  header.innerHTML = `
    <nav>
      <a href="/" data-link>Home</a>
      <a href="/products" data-link>Produtos</a>
      <a href="/cart" data-link>Carrinho</a>
    </nav>
  `;
}