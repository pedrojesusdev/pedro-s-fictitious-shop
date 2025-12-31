export const products = [
  {
    id: 1,
    name: "Air Zoom Alpha",
    price: 799.9,
    image: "/assets/img/products/air-zoom-alpha.png",
    category: "Running"
  },
  {
    id: 2,
    name: "React Infinity",
    price: 699.9,
    image: "/assets/img/products/react-infinity.png",
    category: "Training"
  },
  {
    id: 3,
    name: "Air Force One",
    price: 649.9,
    image: "/assets/img/products/air-force-one.png",
    category: "Lifestyle"
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
