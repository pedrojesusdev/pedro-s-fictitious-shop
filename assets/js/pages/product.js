export function productPage() {
  const app = document.getElementById("app");

  const id = new URLSearchParams(window.location.search).get("id");

  app.innerHTML = `
    <h2>Produto ${id}</h2>
    <button>Adicionar ao carrinho</button>
  `;
}
