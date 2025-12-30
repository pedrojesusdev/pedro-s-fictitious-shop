export function renderHeader() {
  const header = document.getElementById("header");

  header.innerHTML = `
    <nav class="nav">
      <a href="/" data-link="/">Home</a>
      <a href="/products" data-link="/products">Products</a>
      <a href="/cart" data-link="/cart">Cart</a>
    </nav>
  `;
}