import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { router } from "./router.js";

renderHeader();
renderFooter();

window.addEventListener("popstate", router);
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (!link) return;
  e.preventDefault();
  history.pushState(null, "", link.getAttribute("href"));
  router();
});

router();
