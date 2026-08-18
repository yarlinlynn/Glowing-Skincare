

export function Offer() {
    return `
        <section class="" id="offer" aria-label="offer" data-section>
            <div class="container xs:max-w-[540px] sm:max-w-[730px] md:max-w-[960px] lg:max-w-[1300px] lg:grid lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-[30px]">
                <figure class="grid mb-[60px] items-center grid-cols-[0.7fr_1fr] gap-[30px]">

                    <img class="w-full mx-auto"
                        src="../public/images/banners/offer-banner/offer-banner-1.jpg" width="305" height="408" loading="lazy" alt="offer products" class="w-100"
                    />

                    <img class="w-full mx-auto"
                        src="../public/images/banners/offer-banner/offer-banner-2.jpg" width="450" height="625" loading="lazy" alt="offer products" class="w-100"
                    />
                </figure>

                <div>
                    <p class="flex items-center gap-[10px] text-[1.5rem]">
                        <span class="text-[var(--black)] uppercase font-semibold tracking-[2px]">Special Offer</span>

                        <span class="badge font-medium" aria-label="20% off">-20%</span>
                    </p>

                    <h2 class="my-[20px_8px] text-[2.7rem]">Mountain Pine Bath Oil</h2>

                    <p class="">
                        Made using clean, non-toxic ingredients, our products are designed for everyone.
                    </p>

                    <div id="countdown" class="text-[var(--hoockers-green)] leading-none flex my-5 mt-5 mb-10">

                        <span class="flex items-center text-[3rem] lg:text-[4rem] time" aria-label="days">15</span>
                        <span class="flex items-center text-[3rem] lg:text-[4rem] time" aria-label="hours">21</span>
                        <span class="flex items-center text-[3rem] time lg:text-[4rem]" aria-label="minutes">46</span>
                        <span class="flex items-center text-[3rem] time lg:text-[4rem]" aria-label="seconds">08</span>

                    </div>

                    <button onclick="" class="btn btn-primary">Get Only $39.00</button>
                </div>
            </div>
        </section>
    `;
}