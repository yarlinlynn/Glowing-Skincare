
export function Blog() {
    return `
        <section class="text-center" id="blog" aria-label="blog" data-section>
            <div class="container xs:max-w-[540px] sm:max-w-[730px] md:max-w-[960px] lg:max-w-[1300px]">
                <h2 class="mb-[40px] text-[2.7rem]">More to Discover</h2>

                <ul class="flex flex-wrap items-center justify-center gap-[30px]">
                    <li class="sm:max-w-[calc(50%-15px)] md:max-w-[calc(33.33%-20px)] lg:max-w-[calc(33.33%-66.66px)]">
                        <div>
                            <figure class="aspect-[700/450] bg-[var(--light-gray)] img-holder has-before has-after hover:shine">
                                <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                                    src="/images/blog/blog-1.jpg" alt="Find a Store" loaading="lazy" width="700" height="450"
                                />
                            </figure>

                            <h3 class="text-[1.7rem] mt-[30px] mb-[20px]">
                                <a href="#" class="transition-[var(--transition-1)]">Find a Store</a>
                            </h3>

                            <a href="#" class="flex items-center justify-center gap-[3px] text-[var(--black)] font-semibold transition-[var(--transition-1)]">
                                <span class="span">Our Store</span>

                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                            </a>
                        </div>
                    </li>

                    <li class="sm:max-w-[calc(50%-15px)] md:max-w-[calc(33.33%-20px)] lg:max-w-[calc(33.33%-66.66px)]">
                        <div>
                            <figure class="aspect-[700/450] bg-[var(--light-gray)] img-holder has-before has-after hover:shine">
                                <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                                    src="/images/blog/blog-2.jpg" alt="From our Blog" loaading="lazy" width="700" height="450"
                                />
                            </figure>

                            <h3 class="text-[1.7rem] mt-[30px] mb-[20px]">
                                <a href="#" class="transition-[var(--transition-1)]">From our Blog</a>
                            </h3>

                            <a href="#" class="flex items-center justify-center gap-[3px] text-[var(--black)] font-semibold transition-[var(--transition-1)]">
                                <span class="span">Our Store</span>

                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                            </a>
                        </div>
                    </li>

                    <li class="sm:max-w-[calc(50%-15px)] md:max-w-[calc(33.33%-20px)] lg:max-w-[calc(33.33%-66.66px)]">
                        <div>
                            <figure class="aspect-[700/450] bg-[var(--light-gray)] img-holder has-before has-after hover:shine">
                                <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                                    src="/images/blog/blog-3.jpg" alt="Our Story" loaading="lazy" width="700" height="450"
                                />
                            </figure>

                            <h3 class="text-[1.7rem] mt-[30px] mb-[20px]">
                                <a href="#" class="transition-[var(--transition-1)]">Our Story</a>
                            </h3>

                            <a href="#" class="flex items-center justify-center gap-[3px] text-[var(--black)] font-semibold transition-[var(--transition-1)]">
                                <span class="span">Our Store</span>

                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    `;
}