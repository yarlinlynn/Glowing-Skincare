
export function BestSeller() {
    return `
        <section class="" id="shop" aria-label="shop" data-section>
            <div class="container xs:max-w-[540px] sm:max-w-[730px] md:max-w-[960px] lg:max-w-[1300px] lg:grid lg:items-center lg:gap-[30px]">
                <div class="flex flex-wrap justify-between gap-[18px] items-center mbe-[50px]">
                    <h2 class="text-[var(--black)] leading-[1.3] text-[3rem]">Our Bestsellers</h2>

                    <a href="#" class="text-[(--black)] font-semibold flex items-center gap-[3px] transition-[var(--transition-1)]">
                        <span>Shop All Products</span>

                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </a>
                </div>

                <ul class="has-scrollbar">
                    <li class="snap-start min-w-full sm:min-w-[calc(50%-15px)] md:min-w-[calc(33.33%-20px)] lg:min-w-[calc(20%-24px)]">
                        <div class="shop-card">

                            <div class="bg-[var(--light-gray)] aspect-[540/720] relative">
                                <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                                    src="../public/images/products/product-01.jpg" alt="Facial cleanser" loaading="lazy" width="540" height="720"
                                />

                                <span class="badge absolute top-[20px] left-[20px]" aria-label="20% off">-20%</span>

                                <div class="card-actions">

                                    <button id="addToCart" class="action-btn" aria-label="add to cart">
                                        <i class="ri-shopping-bag-4-line"></i>
                                    </button>

                                    <button id=""addToFavourites class="action-btn" aria-label="add to favourites">
                                        <i class="ri-heart-line"></i>
                                    </button>

                                    <button class="action-btn" aria-label="customer service">
                                        <i class="ri-chat-3-line"></i>
                                    </button>

                                </div>
                            </div>

                            <div class="text-center py-[20px]">
                                <div class="flex items-center justify-center gap-[8px]">
                                    <del class="font-extralight text-[var(--black_50)]">$39.00</del>

                                    <span class="font-semibold">$29.00</span>
                                </div>

                                <h3>
                                    <a href="#" class="font-medium transition-[var(--transition-1)] mbe-2 hover:underline hover:text-[var(--hoockers-green)]">Facial cleanser</a>
                                </h3>

                                <div class="flex items-center justify-center gap-[5px]">

                                    <div class="flex items-center justify-center gap-2px] text-[15px] text-[var(--hoockers-green)]" aria-label="5 start rating">
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </div>

                                    <p class="font-normal leading-none text-[var(--black_50)]">5170 reviews</p>

                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="snap-start min-w-full sm:min-w-[calc(50%-15px)] md:min-w-[calc(33.33%-20px)] lg:min-w-[calc(20%-24px)]">
                        <div class="shop-card">

                            <div class="bg-[var(--light-gray)] aspect-[540/720] relative">
                                <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                                    src="../public/images/products/product-02.jpg" alt="Bio-shroom Rejuvenating Serum" loaading="lazy" width="540" height="720"
                                />

                                <div class="card-actions">

                                    <button id="addToCart" class="action-btn" aria-label="add to cart">
                                        <i class="ri-shopping-bag-4-line"></i>
                                    </button>

                                    <button id=""addToFavourites class="action-btn" aria-label="add to favourites">
                                        <i class="ri-heart-line"></i>
                                    </button>

                                    <button class="action-btn" aria-label="customer service">
                                        <i class="ri-chat-3-line"></i>
                                    </button>

                                </div>
                            </div>

                            <div class="text-center py-[20px]">
                                <div class="flex items-center justify-center gap-[8px]">
                                    <span class="font-semibold">$29.00</span>
                                </div>

                                <h3>
                                    <a href="#" class="font-medium transition-[var(--transition-1)] mbe-2 hover:underline hover:text-[var(--hoockers-green)]">Bio-shroom Rejuvenating Serum</a>
                                </h3>

                                <div class="flex items-center justify-center gap-[5px]">

                                    <div class="flex items-center justify-center gap-2px] text-[15px] text-[var(--hoockers-green)]" aria-label="5 start rating">
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </div>

                                    <p class="font-normal leading-none text-[var(--black_50)]">5170 reviews</p>

                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="snap-start min-w-full sm:min-w-[calc(50%-15px)] md:min-w-[calc(33.33%-20px)] lg:min-w-[calc(20%-24px)]">
                        <div class="shop-card">

                            <div class="bg-[var(--light-gray)] aspect-[540/720] relative">
                                <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                                    src="../public/images/products/product-03.jpg" alt="Coffee Bean Caffeine Eye Cream" loaading="lazy" width="540" height="720"
                                />

                                <div class="card-actions">

                                    <button id="addToCart" class="action-btn" aria-label="add to cart">
                                        <i class="ri-shopping-bag-4-line"></i>
                                    </button>

                                    <button id=""addToFavourites class="action-btn" aria-label="add to favourites">
                                        <i class="ri-heart-line"></i>
                                    </button>

                                    <button class="action-btn" aria-label="customer service">
                                        <i class="ri-chat-3-line"></i>
                                    </button>

                                </div>
                            </div>

                            <div class="text-center py-[20px]">
                                <div class="flex items-center justify-center gap-[8px]">
                                    <span class="font-semibold">$29.00</span>
                                </div>

                                <h3>
                                    <a href="#" class="font-medium transition-[var(--transition-1)] mbe-2 hover:underline hover:text-[var(--hoockers-green)]">Coffee Bean Caffeine Eye Cream</a>
                                </h3>

                                <div class="flex items-center justify-center gap-[5px]">

                                    <div class="flex items-center justify-center gap-2px] text-[15px] text-[var(--hoockers-green)]" aria-label="5 start rating">
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </div>

                                    <p class="font-normal leading-none text-[var(--black_50)]">5170 reviews</p>

                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="snap-start min-w-full sm:min-w-[calc(50%-15px)] md:min-w-[calc(33.33%-20px)] lg:min-w-[calc(20%-24px)]">
                        <div class="shop-card">

                            <div class="bg-[var(--light-gray)] aspect-[540/720] relative">
                                <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                                    src="../public/images/products/product-04.jpg" alt="Facial cleanser" loaading="lazy" width="540" height="720"
                                />

                                <div class="card-actions">

                                    <button id="addToCart" class="action-btn" aria-label="add to cart">
                                        <i class="ri-shopping-bag-4-line"></i>
                                    </button>

                                    <button id=""addToFavourites class="action-btn" aria-label="add to favourites">
                                        <i class="ri-heart-line"></i>
                                    </button>

                                    <button class="action-btn" aria-label="customer service">
                                        <i class="ri-chat-3-line"></i>
                                    </button>

                                </div>
                            </div>

                            <div class="text-center py-[20px]">
                                <div class="flex items-center justify-center gap-[8px]">
                                    <span class="font-semibold">$29.00</span>
                                </div>

                                <h3>
                                    <a href="#" class="font-medium transition-[var(--transition-1)] mbe-2 hover:underline hover:text-[var(--hoockers-green)]">Facial cleanser</a>
                                </h3>

                                <div class="flex items-center justify-center gap-[5px]">

                                    <div class="flex items-center justify-center gap-2px] text-[15px] text-[var(--hoockers-green)]" aria-label="5 start rating">
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </div>

                                    <p class="font-normal leading-none text-[var(--black_50)]">5170 reviews</p>

                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="snap-start min-w-full sm:min-w-[calc(50%-15px)] md:min-w-[calc(33.33%-20px)] lg:min-w-[calc(20%-24px)]">
                        <div class="shop-card">

                            <div class="bg-[var(--light-gray)] aspect-[540/720] relative">
                                <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                                    src="../public/images/products/product-05.jpg" alt="Coffee Bean Caffeine Eye Cream" loaading="lazy" width="540" height="720"
                                />

                                <span class="badge absolute top-[20px] left-[20px]" aria-label="20% off">-20%</span>

                                <div class="card-actions">

                                    <button id="addToCart" class="action-btn" aria-label="add to cart">
                                        <i class="ri-shopping-bag-4-line"></i>
                                    </button>

                                    <button id=""addToFavourites class="action-btn" aria-label="add to favourites">
                                        <i class="ri-heart-line"></i>
                                    </button>

                                    <button class="action-btn" aria-label="customer service">
                                        <i class="ri-chat-3-line"></i>
                                    </button>

                                </div>
                            </div>

                            <div class="text-center py-[20px]">
                                <div class="flex items-center justify-center gap-[8px]">

                                    <del class="font-extralight text-[var(--black_50)]">$39.00</del>

                                    <span class="font-semibold">$29.00</span>
                                </div>

                                <h3>
                                    <a href="#" class="font-medium transition-[var(--transition-1)] mbe-2 hover:underline hover:text-[var(--hoockers-green)]">Coffee Bean Caffeine Eye Cream</a>
                                </h3>

                                <div class="flex items-center justify-center gap-[5px]">

                                    <div class="flex items-center justify-center gap-2px] text-[15px] text-[var(--hoockers-green)]" aria-label="5 start rating">
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </div>

                                    <p class="font-normal leading-none text-[var(--black_50)]">5170 reviews</p>

                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="snap-start min-w-full sm:min-w-[calc(50%-15px)] md:min-w-[calc(33.33%-20px)] lg:min-w-[calc(20%-24px)]">
                        <div class="shop-card">

                            <div class="bg-[var(--light-gray)] aspect-[540/720] relative">
                                <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                                    src="../public/images/products/product-06.jpg" alt="Facial cleanser" loaading="lazy" width="540" height="720"
                                />

                                <div class="card-actions">

                                    <button id="addToCart" class="action-btn" aria-label="add to cart">
                                        <i class="ri-shopping-bag-4-line"></i>
                                    </button>

                                    <button id=""addToFavourites class="action-btn" aria-label="add to favourites">
                                        <i class="ri-heart-line"></i>
                                    </button>

                                    <button class="action-btn" aria-label="customer service">
                                        <i class="ri-chat-3-line"></i>
                                    </button>

                                </div>
                            </div>

                            <div class="text-center py-[20px]">
                                <div class="flex items-center justify-center gap-[8px]">
                                    <span class="font-semibold">$29.00</span>
                                </div>

                                <h3>
                                    <a href="#" class="font-medium transition-[var(--transition-1)] mbe-2 hover:underline hover:text-[var(--hoockers-green)]">Facial cleanser</a>
                                </h3>

                                <div class="flex items-center justify-center gap-[5px]">

                                    <div class="flex items-center justify-center gap-2px] text-[15px] text-[var(--hoockers-green)]" aria-label="5 start rating">
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                        <i class="ri-star-s-fill"></i>
                                    </div>

                                    <p class="font-normal leading-none text-[var(--black_50)]">5170 reviews</p>

                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    `;
}