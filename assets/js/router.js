import { homePage } from "./pages/home.js";
import { productsPage } from "./pages/products.js";
import { productPage } from "./pages/product.js";
import { cartPage } from "./pages/cart.js";

const routes = {
  "/": homePage,
  "/products": productsPage,
  "/product": productPage,
  "/cart": cartPage
};

export function router() {
  const path = window.location.pathname;
  const page = routes[path] || homePage;
  page();

  if (path.startsWith("/product/")) {
    const id = path.split("/")[2];
    productPage(id);
    return;
  }
}
