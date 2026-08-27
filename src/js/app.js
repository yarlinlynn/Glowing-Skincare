import "../css/index.css";

// add imported components below
import { Header } from "../components/header.js";
import { Hero } from "../components/hero.js";
import { Collection } from "../components/collection.js";
import { BestSeller } from "../components/bestSeller.js";
import { under$50 } from "../components/under50.js";
import { Banner } from "../components/banner.js";
import { Feature } from "../components/feature.js";
import { Offer } from "../components/offer.js";
import { Blog } from "../components/blog.js";
import { Footer } from "../components/footer.js";
import { SidePanel } from "../components/sidePanel.js";

import { initNavigation } from "../utils/initSidebar.js";
import { initSidePanel } from "../utils/openSidePanel.js";
import { sectionAnimations } from "../utils/scrollReveal.js";
import { countdown } from "../utils/countdown.js";
import { fixedHeader } from "../utils/fixedHeader.js";
import { initProductActions } from "../utils/productButtons.js";
import { updateFavouriteUI } from "../utils/favourites.js";
import { updateCartUI } from "../utils/cart.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    ${SidePanel()}
    <main>
      ${Hero()}
      ${Collection()}
      ${BestSeller()}
      ${under$50()}
      ${Banner()}
      ${Feature()}
      ${Offer()}
      ${Blog()}
    </main>
    ${Footer()}
  `;

  initNavigation();
  initSidePanel();
  fixedHeader();
  sectionAnimations();
  countdown();
  initProductActions();
  updateFavouriteUI();
  updateCartUI();
});