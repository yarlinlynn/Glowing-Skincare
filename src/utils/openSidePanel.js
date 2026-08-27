
import { products } from "../data/products.js";
import { getFavouriteIds, toggleFavourite } from "./favourites.js";
import { getCartItems, increaseCartQuantity, decreaseCartQuantity, removeFromCart, getCartTotal } from "./cart.js";

export function initSidePanel() {
    const panel = document.querySelector("[data-side-panel]");
    const closePanel = document.querySelector("[data-side-panel-close]");

    const title = document.querySelector("[data-side-panel-title]");
    const content = document.querySelector("[data-side-panel-content]");

    const overlay = document.querySelector("[data-overlay]");

    if (!panel) return;

    // click events to open side panel
    document.addEventListener("click", (event) => {
        // open side panel
        const openBtn = event.target.closest("[data-open-panel]");
        if (openBtn) {
            const type = openBtn.dataset.openPanel;
            openSidePanel(type);
            return;
        }

        // remove favourite
        const removeBtn = event.target.closest("[data-remove-favourite]");
        if(removeBtn) {
            const productId = removeBtn.dataset.removeFavourite;
            toggleFavourite(productId);
            renderFavourites();
            return;
        }

        // cart functionality
        const cartButton = event.target.closest("[data-cart-action]");
        if (cartButton) {
            const productId = cartButton.dataset.productId;
            const action = cartButton.dataset.cartAction;
            if (action === "increase") {
                increaseCartQuantity(productId);
            }
            if (action === "decrease") {
                decreaseCartQuantity(productId);
            }
            if (action === "remove") {
                removeFromCart(productId);
            }

            renderCart();
            return;
        }

        // removes product from cart
        const removeCart = event.target.closest("[data-remove-cart]");
        if (removeCart) {
            const productId = removeCart.dataset.removeCart;
            removeFromCart(productId);
            renderCart();
            return;
        }
        
        // increase quantity
        const increase = event.target.closest("[data-increase-cart]");
        if (increase) {
            const productId = increase.dataset.increaseCart;
            increaseQuantity(productId);
            renderCart();
            return;
        }

        // decrease quantity
        const decrease = event.target.closest("[data-decrease-cart]");
        if (decrease) {
            const productId = decrease.dataset.decreaseCart;
            decreaseQuantity(productId);
            renderCart();
            return;
        }


        // close side panel
        const closeBtn = event.target.closest("[data-side-panel-close]");
        if(closeBtn) {
            // const overlay = event.target.closest("[data-overlay]");
            closeSidePanel();
            return;
        }

    });

    // remove overlay
    overlay.addEventListener("click", closeSidePanel);

    // open side panel
    function openSidePanel(type) {
        renderSidePanelContent(type);

        panel.classList.add("active");
        overlay.classList.add("active");
    }

    // close side panel
    function closeSidePanel() {
        panel.classList.remove("active");
        overlay.classList.remove("active");
    }

    // render side panel content
    function renderSidePanelContent(type) {
        if(type === "cart") {
            title.textContent = "Your Cart";
            renderCart();
            return;
        }

        if(type === "favourites") {
            title.textContent = "Your Favourites";
            renderFavourites();
            return;
        }
    }

    function renderCart() {
        const cartItems = getCartItems();
        // no products in cart
        if (cartItems.length === 0) {
            content.innerHTML = `
                <p class="mt-4 text-[var(--black_50)] text-center">
                    Your cart is empty.
                </p>
            `;

            return;
        }

        const cartProducts = cartItems.map(item => {
            const product = products.find(product => product.id === item.id);
            if (!product) return null;
            return {...product, quantity: item.quantity};
        }).filter(Boolean);

        content.innerHTML = `
            <div class="flex flex-col gap-[20px]">
                ${
                   cartProducts.map(product => {
                        const price = product.price / 100;
                        const image = Array.isArray(product.image) ? product.image[0] : product.image;
                        const itemTotal = price * product.quantity;

                        return `
                            <div data-cart-item="${product.id}"
                                class="flex gap-[15px] border-b border-[var(--black_15)] pb-[20px]"
                            >

                                <img src="${image}" alt="${product.name}" loading="lazy"
                                    class="w-[80px] h-[100px] object-cover"
                                />

                                <div class="flex-1">
                                    <h3 class="font-semibold">${product.name}</h3>

                                    <div class="grid grid-cols-2">
                                        <p class="font-semibold mt-[10px]">$${itemTotal.toFixed(2)}</p>

                                        <button type="button" data-cart-action="remove" data-product-id="${product.id}"
                                            class="ml-auto" aria-label="Remove ${product.name} from cart"
                                        >
                                            <i class="ri-delete-bin-line"></i>
                                        </button>

                                        <div class="flex items-center justify-between gap-[10px]
                                            col-start-1 col-end-3 bg-[var(--black_5)] px-[10px] py-[5px] rounded-[5px] mt-[15px]"
                                        >
                                            <button type="button" data-cart-action="decrease" data-product-id="${product.id}"
                                                aria-label="Decrease quantity" class="w-[30px] h-[30px]"
                                            >
                                                −
                                            </button>

                                            <span class="min-w-[20px] text-center">${product.quantity}</span>

                                            <button type="button" data-cart-action="increase" data-product-id="${product.id}"
                                                aria-label="Increase quantity" class="w-[30px] h-[30px]"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                   }).join("")
                }
            </div>
        `;
    }

    // render favourited products
    function renderFavourites() {
        const favouriteIds = getFavouriteIds();
        const favouriteProducts = products.filter(product => favouriteIds.includes(product.id));

        // no favourites
        if (favouriteProducts.length === 0)  {
            content.innerHTML = `
                <p class="mt-4 text-[var(--black_50)] text-center">
                    You don't have any favourites yet.
                </p>
            `;
            return;
        }

        // favourited products
        content.innerHTML = favouriteProducts.map(product => {
            const price = (product.price / 100).toFixed(2);
            return `
                <div class="relative flex items-center gap-[5px]" data-favourite-item="${product.id}" class="flex items-center gap-[15px] p-[10px]">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-[80px] h-[100px] object-cover"/>

                    <div class="flex-1">
                        <h3 class="font-semibold">${product.name}</h3>
                        <div class="flex items-center justify-between mt-[5px]">
                            <p class="mt-1">$${price}</p>
                            <button type="button"  data-remove-favourite="${product.id}" aria-label="Remove ${product.name} from favourites">
                                <i class="ri-delete-bin-line"></i>
                            </button>
                        </div>
                    
                    </div>

                    <span class="absolute top-0 left-0 text-red-500 px-2.5 py-1.25 rounded-full">
                        <i class="ri-heart-fill"></i>
                    </span>

                </div>
            `;
        }).join("");
    }
}