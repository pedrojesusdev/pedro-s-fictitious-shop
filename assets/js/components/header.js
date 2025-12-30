export function renderHeader() {
  const header = document.getElementById("header");

  header.innerHTML = `
    <nav>
      <a href="/" data-link>Home</a>
      <a href="/products" data-link>Produtos</a>
      <a href="/cart" data-link>Carrinho</a>
    </nav>
  `;

  document.querySelectorAll("[data-link]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      history.pushState(null, "", link.getAttribute("href"));
      window.dispatchEvent(new Event("popstate"));
    });
  });
}

window.addEventListener("popstate", router);