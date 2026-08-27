
const STORAGE_KEY = "favourites";

// Load saved IDs when the application starts
let favouriteIds = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// get favourited products by IDs
export function getFavouriteIds() {
    return favouriteIds;
}

// check if product is favourited 
export function isFavourite(productId) {
    return favouriteIds.includes(productId);
}

// both adds and removes product from/to favourites side panel
export function toggleFavourite(productId) {
    if (isFavourite(productId)) {
        // removes product 
        favouriteIds = favouriteIds.filter(id => id !== productId);
    } else {
        // adds product
        favouriteIds.push(productId);
    }

    // saves updated state
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favouriteIds));
    updateFavouriteUI();  //updates ui component either removing/adding product 
    return isFavourite(productId);
}

// updates all favourite related ui components
export function updateFavouriteUI() {
    updateFavouriteButtons();
    updateFavouriteBadge();
}

// updates heart icon to products
export function updateFavouriteButtons() {
    document.querySelectorAll('[data-product-action="favourites"]').forEach(button => {
        const productId = button.dataset.productId;
        const active = isFavourite(productId);
        button.classList.toggle("text-red-500", active);
        const icon = button.querySelector("i");
        if (icon) {
            icon.className = active ? "ri-heart-fill" : "ri-heart-line";
        }

        button.setAttribute("aria-label", active ? "Remove from favourites" : "Add to favourites")
    })
}

// updates favourite counter
export function updateFavouriteBadge() {
    const badge = document.querySelector("[data-favourites-badge]");
    if (!badge) return;
    const count = favouriteIds.length;
    badge.textContent = count;
    badge.style.display = count > 0 ? "block" : "none";
}
