import "../css/index.css";

// add imported components below
import { Header } from "../components/header.js";
import { initNavigation } from "../utils/initSidebar.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    <main>

    </main>
  `;

  initNavigation();
});