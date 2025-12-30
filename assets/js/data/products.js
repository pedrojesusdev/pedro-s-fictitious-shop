export const products = [
  {
    id: 1,
    name: "Air Run Pro",
    price: 799.90,
    image: "air-run.jpg",
    category: "running"
  }
];

products.forEach(product => {
  const card = createProductCard(product);
  container.appendChild(card);
});

// Carrinho
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}
