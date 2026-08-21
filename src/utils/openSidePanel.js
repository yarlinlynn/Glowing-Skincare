
export function openSidePanel() {
    const panel = document.querySelector("[data-side-panel]");
    const closePanel = document.querySelector("[data-side-panel-close]");

    const title = document.querySelector("[data-side-panel-title]");
    const content = document.querySelector("[data-side-panel-content]");

    const overlay = document.querySelector("[data-overlay]");

    if (!panel) return;
    document.addEventListener("click", (event) => {
        const openBtn = event.target.closest("[data-open-panel]");
        if (openBtn) {
            const type = openBtn.dataset.openPanel;
            openSidePanel(type);
            return;
        }
        const closeBtn = event.target.closest("[data-side-panel-close]");
        if(closeBtn) {
            const overlay = event.target.closest("[data-overlay]");
            closeSidePanel();
            return;
        }
    });

    closePanel.addEventListener("click", closeSidePanel);
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

    }

    // render favourited products
    function renderFavourites() {

    }
}