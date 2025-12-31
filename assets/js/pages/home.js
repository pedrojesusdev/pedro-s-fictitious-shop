import { products } from "../data/products.js";
import { createProductCard } from "../components/productCard.js";

export function homePage() {
  const app = document.getElementById("app");

  const featured = products.slice(0, 3);

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

    <section class="featured-products container">
      <h2>Featured</h2>
      <div class="products-grid">
        ${featured.map(createProductCard).join("")}
      </div>
    </section>
  `;
  }
