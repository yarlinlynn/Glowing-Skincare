
let lastScrolledPosition = 0;

export function fixedHeader() {
    const header = document.querySelector("[data-header]");
    if (!header) return;

    function handleScroll() {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition <= 0) {
            header.classList.remove("active", "header-hide");

            lastScrolledPosition = currentScrollPosition;
            return;
        }
        if (currentScrollPosition < lastScrolledPosition) {
            header.classList.add("active");
            header.classList.remove("header-hide");
        }
        else if (currentScrollPosition > lastScrolledPosition) {
            header.classList.add("header-hide");
            header.classList.remove("active");
        }
        lastScrolledPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
}
