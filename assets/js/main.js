import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { router } from "./router.js";

renderHeader();
renderFooter();

router();

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");
  if (!link) return;

  event.preventDefault();
  const path = link.getAttribute("data-link");

  history.pushState(null, "", path);
  router();
});

window.addEventListener("popstate", router);
