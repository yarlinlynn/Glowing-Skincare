
export function heroSlideShow() {
    const slider = document.querySelector(".hero-slider");
    if(!slider) return;

    const slides = document.querySelectorAll(".hero-slide");

    if (slides.length === 0) return;

    const firstSlideClone = slides[0].cloneNode(true);
    slider.appendChild(firstSlideClone);

    let currentSlide = 0;
    const nexSlide = () => {
        currentSlide++

        const slideWidth = slides[0].offsetWidth + 15;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

        if(currentSlide === slides.length) {
            setTimeout( () => {
                slider.style.transition = "none";
                currentSlide = 0;
                slider.style.transform = "translateX(0)";
                slider.offsetHeight;
                slider.style.transition = "transform 700ms ease-in-out";
            }, 700)
        }
    }
    setInterval(nexSlide, 4000);
}