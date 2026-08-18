
import { products } from "../data/products.js";
import { ProductCard } from "./productCard.js";

export function BestSeller() {

    const bestSeller = products.filter(product => product.collections.includes("bestseller"));

    return `
        <section class="" id="shop" aria-label="shop" data-section>
            <div class="container xs:max-w-[540px] sm:max-w-[730px] md:max-w-[960px] lg:max-w-[1300px] lg:grid lg:items-center lg:gap-[30px]">
                <div class="flex flex-wrap justify-between gap-[18px] items-center mbe-[50px]">
                    <h2 class="text-[var(--black)] leading-[1.3] text-[3rem]">Our Bestsellers</h2>

                    <a href="#" class="text-[(--black)] font-semibold flex items-center gap-[3px] transition-[var(--transition-1)]">
                        <span>Shop All Products</span>

                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </a>
                </div>

                <ul class="has-scrollbar">
                    ${bestSeller.map(ProductCard).join("")}
                </ul>
            </div>
        </section>
    `;
}