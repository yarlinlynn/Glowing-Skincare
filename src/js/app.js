import "../css/index.css";

// add imported components below
import { Header } from "../components/header.js";
import { Hero } from "../components/hero.js";

import { initNavigation } from "../utils/initSidebar.js";
import { sectionAnimations } from "../utils/scrollReveal.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    <main>
      ${Hero()}
    </main>
  `;

  initNavigation();
  sectionAnimations();
});