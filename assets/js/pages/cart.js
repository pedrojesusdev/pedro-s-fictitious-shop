export function cartPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="cart">
      <h1>Your Cart</h1>
      <p>Cart is empty</p>
    </section>
  `;
}
