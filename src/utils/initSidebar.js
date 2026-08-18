
import { Sidebar } from "../components/sidebar.js";

// initailize sidebar
export function initNavigation() {
    const sidebarToggle = document.querySelector("[data-nav-toggle]");
    if (!sidebarToggle) return;
    sidebarToggle.addEventListener("click", openSidebar);
}

// open and render sidebar mobile navigation
function openSidebar() {
    if (document.querySelector("[data-sidebar]")) return;

    document.body.insertAdjacentHTML("beforeend", Sidebar());

    const sidebar = document.querySelector("[data-sidebar]");
    const navbar = sidebar.querySelector("[data-navbar]");
    const closeNav = sidebar.querySelector("[data-nav-close]");
    const overlay = sidebar.querySelector("[data-overlay]");
    const navLinks = sidebar.querySelectorAll("a[href^='#']");

    // activate sidebar
    requestAnimationFrame( () => {
        navbar.classList.add("active");
        overlay.classList.add("active");
    });

    // close sidebar and remove overlay
    closeNav.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            closeSidebar();
        });
    });
}

// close and remove sidebar mobile navigation
function closeSidebar() {
    const sidebar = document.querySelector("[data-sidebar]");
    if (!sidebar) return;

    const navbar = sidebar.querySelector("[data-navbar]");
    const overlay = sidebar.querySelector("[data-overlay]");

    navbar.classList.remove("active");
    overlay.classList.remove("active");

    setTimeout(() => {
        sidebar.remove();
    }, 400);
}