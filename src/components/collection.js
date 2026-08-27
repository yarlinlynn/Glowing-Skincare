
export function Collection() {
    return `
        <section class="collection" id="collection" aria-label-"collection" data-section>
            <div class="container xs:max-w-[540px] sm:max-w-[730px] md:max-w-[960px] lg:max-w-[1300px]">
                <ul class="grid gap-4 md:grid-cols-3 md:gap-[30px]">
                    <li>
                        <div class="bg-[var(--light-gray)] min-h-100 p-10 pbe-[30px] flex flex-col has-before has-after hover:shine">
                            <h2 class="mbe-3 text-[var(--fs-3)]">Summer Collection</h2>
                            <p class="text-[var(--black)] text-[var(--fs-6)] font-semibold mbe-auto">Starting at $17.99</p>
                            <a href="#shop" class="text-[var(--black)] font-semibold flex items-center gap-1 transition-[var(--transition-1)]">
                                <span>Shop Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                            </a>
                            <div class="has-bg-image bg-[url('/images/collections/collection-1.jpg')]"></div>
                        </div>
                    </li>

                    <li>
                        <div class="bg-[var(--light-gray)] min-h-100 p-10 pbe-[30px] flex flex-col has-before has-after hover:shine">
                            <h2 class="mbe-3 text-[var(--fs-3)]">What’s New?</h2>
                            <p class="text-[var(--black)] text-[var(--fs-6)] font-semibold mbe-auto">Get the glow</p>
                            <a href="#shop" class="text-[var(--black)] font-semibold flex items-center gap-1 transition-[var(--transition-1)]">
                                <span>Discover Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                            </a>
                            <div class="has-bg-image bg-[url('/images/collections/collection-2.jpg')]"></div>
                        </div>
                    </li>

                    <li>
                        <div class="bg-[var(--light-gray)] min-h-100 p-10 pbe-[30px] flex flex-col has-before has-after hover:shine">
                            <h2 class="mbe-3 text-[var(--fs-3)]">Buy 1 Get 1</h2>
                            <p class="text-[var(--black)] text-[var(--fs-6)] font-semibold mbe-auto">Starting at $7.99</p>
                            <a href="#shop" class="text-[var(--black)] font-semibold flex items-center gap-1 transition-[var(--transition-1)]">
                                <span>Discover Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                            </a>
                            <div class="has-bg-image bg-[url('/images/collections/collection-3.jpg')]"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    `;
}