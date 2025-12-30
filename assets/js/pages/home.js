export function homePage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="hero">
      <h1>JUST MOVE</h1>
      <button data-go="/products">Ver coleção</button>
    </section>
  `;

  document.querySelector("[data-go]").addEventListener("click", () => {
    history.pushState(null, "", "/products");
    window.dispatchEvent(new Event("popstate"));
  });
}
