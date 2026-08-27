
export function Hero() {
    return `
        <section class="hero" id="home" aria-label="hero" data-section>
            <div class="container xs:max-w-none">
                <ul class="has-scrollbar">
                    <li class="min-w-full">
                        <div class="hero-card bg-[url('/images/banners/hero-banner/hero-banner-1.jpg')]">
                            <div class="card-content">
                                <h1 class="text-[4rem]">
                                    Reveal The <br>
                                    Beauty of Skin
                                </h1>
                                <p class="mt-[16px] mb-[30px] text-[var(--fs-6)] text-[var(--gray-web)] xs:max-w-[30ch]">
                                    Made using clean, non-toxic ingredients, our products are designed for everyone.
                                </p>
                                <p class="text-[var(--black)] text-[var(--fs-5)] font-[var(--fw-600)] mb-5">Starting at $7.99</p>
                                <a href="#shop" class="btn btn-primary hover:bg-[var(--hoockers-green)]">Shop Now</a>
                            </div>
                        </div>
                    </li> 

                    <li class="min-w-full">
                        <div class="hero-card bg-[url('/images/banners/hero-banner/hero-banner-2.jpg')]">
                            <div class="card-content">
                                <h1 class="text-[4rem]">
                                    Reveal The <br>
                                    Beauty of Skin
                                </h1>
                                <p class="mt-[16px] mb-[30px] text-[var(--fs-6)] text-[var(--gray-web)] xs:max-w-[30ch]">
                                    Made using clean, non-toxic ingredients, our products are designed for everyone.
                                </p>
                                <p class="text-[var(--black)] text-[var(--fs-5)] font-[var(--fw-600)] mb-5">Starting at $7.99</p>
                                <a href="#shop" class="btn btn-primary over:bg-[var(--hoockers-green)]">Shop Now</a>
                            </div>
                        </div>
                    </li> 

                    <li class="hero-slide min-w-full">
                        <div class="hero-card bg-[url('/images/banners/hero-banner/hero-banner-3.jpg')]">
                            <div class="card-content">
                                <h1 class="text-[4rem]">
                                    Reveal The <br>
                                    Beauty of Skin
                                </h1>
                                <p class="mt-[16px] mb-[30px] text-[var(--fs-6)] text-[var(--gray-web)] xs:max-w-[30ch]">
                                    Made using clean, non-toxic ingredients, our products are designed for everyone.
                                </p>
                                <p class="text-[var(--black)] text-[var(--fs-5)] font-[var(--fw-600)] mb-5">Starting at $7.99</p>
                                <a href="#shop" class="btn btn-primary over:bg-[var(--hoockers-green)]">Shop Now</a>
                            </div>
                        </div>
                    </li> 
                </ul>
            </div>
        </section>
    `;
}