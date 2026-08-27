
export function Banner() {
    return `
        <section class="banner" id="banner" aria-label="banner" data-section>
            <div class="container xs:max-w-[540px] sm:max-w-[730px] md:max-w-[960px] lg:max-w-[1300px]">
                <ul class="grid gap-[30px] sm:grid-cols-[1fr_0.7fr]">
                    <li class="min-h-[420px] p-[30px] has-before has-after hover:shine">
                        <p class="text-shadow-[0_0_2px_var(--cultured-2)] text-[var(--black)] text-[var(--fs-6)] tracking-[2px] uppercase font-semibold">New Collection</p>
                        <h2 class="text-shadow-[0_0_2px_var(--cultured-2)] mt-[10px] mb-[30px]">
                            Discover Our Autumn Skincare
                        </h2>
                        <a href="#" class="btn btn-secondary">Explore More</a>
                        <div class="bg-[url('/images/banners/banner-1.jpg')] has-bg-image"></div>
                    </li>

                    <li class="min-h-[420px] p-[30px] has-before has-after hover:shine">
                        <p class="text-shadow-[0_0_2px_var(--cultured-2)] text-[var(--black)] text-[var(--fs-6)] tracking-[2px] uppercase font-semibold">New Collection</p>
                        <h2 class="text-shadow-[0_0_2px_var(--cultured-2)] mt-[10px] mb-[30px]">
                            Discover Our Autumn Skincare
                        </h2>
                        <a href="#" class="btn btn-secondary">Explore More</a>
                        <div class="bg-[url('/images/banners/banner-2.jpg')] has-bg-image"></div>
                    </li>
                </ul>
            </div
        </section>
    `;
}