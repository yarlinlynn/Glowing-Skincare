
import { products } from "../data/products";
import { addToCart, isInCart } from "../utils/cart";

export function Offer() {
    const product = products.find(product => product.id === "product-13");
    if (!product) return "";
    const discount = product.originalPrice ? Math.round( ((product.originalPrice - product.price) /
            product.originalPrice) * 100) : 0;

    const price = (product.price / 100).toFixed(2);
    const originalPrice = (product.originalPrice / 100).toFixed(2);

    const inCart = isInCart(product.id);

    return `
        <section class="" id="offer" aria-label="offer" data-section>
            <div class="container xs:max-w-[540px] sm:max-w-[730px] md:max-w-[960px] lg:max-w-[1300px] lg:grid lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-[30px]">
                <figure class="grid mb-[60px] items-center grid-cols-[0.7fr_1fr] gap-[30px]">

                    <img class="w-full mx-auto"
                        src="${product.image[0]}" width="305" height="408" loading="lazy" alt="${product.alt}" class="w-100"
                    />

                    <img class="w-full mx-auto"
                        src="${product.image[1]}" width="450" height="625" loading="lazy" alt="${product.alt}" class="w-100"
                    />
                </figure>

                <div>
                    <p class="flex items-center gap-[10px] text-[1.5rem]">
                        <span class="text-[var(--black)] uppercase font-semibold tracking-[2px]">Special Offer</span>

                        ${
                            discount > 0 ? `
                                <span class="badge font-medium" aria-label="${discount}% off">-${discount}%</span>
                            ` : ""
                        }
   
                    </p>

                    <h2 class="my-[20px_8px] text-[2.7rem]">${product.name}</h2>

                    <p class="">
                        ${product.description}
                    </p>

                    <div id="countdown" class="text-[var(--hoockers-green)] leading-none flex my-5 mt-5 mb-10">

                        <span class="flex items-center text-[3rem] lg:text-[4rem] time" aria-label="days">15</span>
                        <span class="flex items-center text-[3rem] lg:text-[4rem] time" aria-label="hours">21</span>
                        <span class="flex items-center text-[3rem] time lg:text-[4rem]" aria-label="minutes">46</span>
                        <span class="flex items-center text-[3rem] time lg:text-[4rem]" aria-label="seconds">08</span>

                    </div>

                    <button type="button" data-product-id="${product.id}" data-product-action="cart" aria-label="${inCart ? "Remove from cart" : "Add to cart"}"
                        class="btn btn-primary hover:bg-[var(--hoockers-green)] hover:text-[var(--white)]
                        ${
                                inCart
                                    ? `
                                        bg-[var(--white)]
                                        border
                                        border-[var(--black)]
                                        text-[var(--black)]
                                    `
                                    : ""
                            }"
                    >
                        <span data-cart-button-text>
                            ${
                                inCart
                                    ? "Added to Cart"
                                    : `Get Only $${price}`
                            }
                        </span>
                    </button>
                </div>
            </div>
        </section>
    `;
}