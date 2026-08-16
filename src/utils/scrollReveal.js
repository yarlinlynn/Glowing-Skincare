
export function sectionAnimations() {
    const sections = document.querySelectorAll("[data-section]");

    const revealSections = () => {
        sections.forEach((section) => {
            if (
                section.getBoundingClientRect().top <
                window.innerHeight / 2
            ) {
                section.classList.add("active");
            }
        });
    };

    revealSections();

    window.addEventListener("scroll", revealSections);
}