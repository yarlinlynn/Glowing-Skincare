import "../css/index.css";

// add imported components below
import { Header } from "../components/header.js";
import { Hero } from "../components/hero.js";
import { Collection } from "../components/collection.js";

import { Banner } from "../components/banner.js";
import { Feature } from "../components/feature.js";
import { Offer } from "../components/offer.js";
import { Blog } from "../components/blog.js";

import { initNavigation } from "../utils/initSidebar.js";
import { sectionAnimations } from "../utils/scrollReveal.js";
import { heroSlideShow } from "../utils/heroSlide.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    <main>
      ${Hero()}
      ${Collection()}

      ${Banner()}
      ${Feature()}
      ${Offer()}
      ${Blog()}
    </main>
  `;

  initNavigation();
  sectionAnimations();
  heroSlideShow();
});