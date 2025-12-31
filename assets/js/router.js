import { homePage } from "./pages/home.js";
import { productsPage } from "./pages/products.js";
import { productPage } from "./pages/product.js";
import { cartPage } from "./pages/cart.js";

export function router() {
  const path = window.location.pathname;

  if (path.startsWith("/product/")) {
    const id = path.split("/")[2];
    productPage(id);
    return;
  }

  const routes = {
    "/": homePage,
    "/products": productsPage,
    "/cart": cartPage
  };

  (routes[path] || homePage)();
}
