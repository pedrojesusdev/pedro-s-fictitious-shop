import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { router } from "./router.js";

renderHeader();
renderFooter();
router();

window.addEventListener("popstate", router);
