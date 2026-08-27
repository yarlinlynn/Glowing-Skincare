
import { getFavouriteIds, toggleFavourite } from "./favourites.js";
import { products } from "../data/products.js";

export function initSidePanel() {
    const panel = document.querySelector("[data-side-panel]");
    const closePanel = document.querySelector("[data-side-panel-close]");

    const title = document.querySelector("[data-side-panel-title]");
    const content = document.querySelector("[data-side-panel-content]");

    const overlay = document.querySelector("[data-overlay]");

    if (!panel) return;

    // click events to open side panel
    document.addEventListener("click", (event) => {
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

    // render cart content
    function renderCart() {
        content.innerHTML = `
            <p class="mt-4 text-[var(--black_50)] text-center">
                Your cart is empty.
            </p>
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