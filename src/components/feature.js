
export function Feature() {
    return `
        <section class="text-center" id="feature" aria-label="feature" data-section>
            <div class="container xs:max-w-[540px] sm:max-w-[730px] md:max-w-[960px] lg:max-w-[1300px]">
                <h2 class="text-[2.7rem] mt-[20px] mb-[60px]">Why Shop with Glowing?</h2>

                <ul class="flex flex-wrap justify-center items-center gap-[30px]">
                    <li class="sm:max-w-[calc(50%-15px)] md:max-w-[calc(33.33%-20px)] lg:max-w-[calc(33.33%-66.66px)]">
                        <div class="feature-card">

                            <img class="w-[100px] mx-auto"
                                src="../public/images/features/feature-1.jpg" alt="Guaranteed PURE" loaading="lazy" width="204" height="236"
                            />

                            <h3 class="text-[1.6rem] mt-[35px] mb-[15px]">Guaranteed PURE</h3>

                            <p class="text-[var(--fs-7)]">
                                All Grace formulations adhere to strict purity standards and will never contain harsh or toxic
                            ingredients
                            </p>

                        </div>
                    </li>

                    <li class="sm:max-w-[calc(50%-15px)] md:max-w-[calc(33.33%-20px)] lg:max-w-[calc(33.33%-66.66px)]">
                        <div class="feature-card">

                            <img class="w-[100px] mx-auto"
                                src="../public/images/features/feature-2.jpg" alt="Completely Cruelty-Free" loaading="lazy" width="204" height="236"
                            />

                            <h3 class="text-[1.6rem] mt-[35px] mb-[15px]">Completely Cruelty-Free</h3>

                            <p class="text-[var(--fs-7)]">
                                All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients
                            </p>

                        </div>
                    </li>

                    <li class="sm:max-w-[calc(50%-15px)] md:max-w-[calc(33.33%-20px)] lg:max-w-[calc(33.33%-66.66px)]">
                        <div class="feature-card">

                            <img class="w-[100px] mx-auto"
                                src="../public/images/features/feature-3.jpg" alt="Ingredient Sourcing" loaading="lazy" width="204" height="236"
                            />

                            <h3 class="text-[1.6rem] mt-[35px] mb-[15px]">Ingredient Sourcing</h3>

                            <p class="text-[var(--fs-7)]">
                                All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients
                            </p>

                        </div>
                    </li>
                </ul>
            </div>
        </section>
    `;
}