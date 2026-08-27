
export function BackToTopActive() {
    const button = document.querySelector("[data-back-to-top]");
    if (!button) return;

    // Show/hide button when scrolling
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 300) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // Scroll to the top
    button.addEventListener("click", () => {
        window.scrollTo({top: 0,  behavior: "smooth"});
    });
}