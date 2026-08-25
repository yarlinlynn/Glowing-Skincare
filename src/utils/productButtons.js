

export function initProductActions() {
    document.addEventListener("click", (event) => {
        const button = event.target.closest("[data-product-action]");
        if (!button) return;

        const productId = Number(button.dataset.productId);
        const action = button.dataset.productAction;

        const product = products.find(product => product.id === productId);
        if (!product) return;
        if (action === "cart") {
            addToCart(product);
        }
        if (action === "favourites") {
            toggleFavourite(product)
        }
    });
}