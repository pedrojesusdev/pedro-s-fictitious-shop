import { createProductCard } from "../components/productCard.js";
import { products } from "../data/products.js";
import { addToCart } from "../utils/storage.js";

export function productsPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="products">
      <div class="products-header">
        <h1>Our Products</h1>
        <p class="products-description">
          Discover our complete collection of Nike sneakers. Quality, style, and performance in every pair.
        </p>
        <div class="products-info">
          <span class="products-count">${products.length} available products</span>
        </div>
      </div>
      
      <div class="products-filters">
        <button class="filter-btn active" data-category="all">All</button>
        <button class="filter-btn" data-category="Running">Running</button>
        <button class="filter-btn" data-category="Training">Training</button>
        <button class="filter-btn" data-category="Lifestyle">Lifestyle</button>
      </div>

      <div class="products-grid"></div>
    </section>
  `;

  const grid = document.querySelector(".products-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  let currentFilter = "all";

  function renderProducts(filterCategory = "all") {
    const filteredProducts = filterCategory === "all" 
      ? products 
      : products.filter(product => product.category === filterCategory);
    
    grid.innerHTML = filteredProducts.map(createProductCard).join("");
    
    // Adicionar event listeners aos botões Buy
    document.querySelectorAll('.buy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        if (product) {
          addToCart(product);
          showNotification('Product added to cart!');
        }
      });
    });
    
    // Atualizar contador
    const countElement = document.querySelector(".products-count");
    if (countElement) {
      countElement.textContent = `${filteredProducts.length} available product${filteredProducts.length !== 1 ? 's' : ''}`;
    }
  }

  function showNotification(message) {
    // Remove existing notification if any
    const existing = document.querySelector('.cart-notification');
    if (existing) {
      existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  // Renderizar produtos iniciais
  renderProducts();

  // Adicionar event listeners aos filtros
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remover classe active de todos os botões
      filterButtons.forEach(b => b.classList.remove("active"));
      // Adicionar classe active ao botão clicado
      btn.classList.add("active");
      
      currentFilter = btn.getAttribute("data-category");
      renderProducts(currentFilter);
    });
  });
}
