export function homePage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="hero">
    <div class="hero-container">
    <div class="hero-content">
      <h1>Style that moves with you</h1>
      <p>
        Discover sneakers and apparel designed for performance and street style.
      </p>
      <button class="btn-primary">Shop Now</button>
    </div>

    <div class="hero-visual">
      <img src="assets/images/hero-shoe.png" alt="Featured Sneaker">
    </div>
    </div>
    </section>
  `;

  document.querySelector("[data-go]").addEventListener("click", () => {
    history.pushState(null, "", "/products");
    window.dispatchEvent(new Event("popstate"));
  });
}
