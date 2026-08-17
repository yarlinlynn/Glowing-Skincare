
export function Footer() {
    return `
        <footer class="bg-[var(--cultured-1)] py-[70px] font-thin text-[var(--black_50)] md:pt-[100px] md:pb-[80px]" data-section>
            <div class="container xs:max-w-[540px] sm:max-w-[730px] md:max-w-[960px] lg:max-w-[1300px]">
                <div class="grid gap-[40px] mbe-15 sm:grid-cols-3 md:grid-cols-[0.4fr_0.4fr_0.4fr_1fr] md:mb-[120px] lg:items-baseline">
                    <ul>
                        <li>
                            <p class="font-semibold text-[var(--black)] text-[1rem] mbe-[10px]">Company</p>
                        </li>
                        <li>
                            <p class="text-[1rem]">
                                Find a location nearest you. See  <a href="#" class="inline-block text-[var(--black)] transition-[var(--transition-1)] font-semibold underline">Our Stores</a>
                            </p>
                        </li>
                        <li>
                            <p class="text-[var(--black)] font-extrabold my-[15px_2px] lg:text-[12px]">+391 (0)35 2568 4593</p>
                        </li>
                        <li>
                            <p>hello@domain.com</p>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <p class="font-semibold text-[var(--black)] text-[1rem] mbe-[10px]">Useful links</p>
                        </li>
                        <li>
                            <a href="#" class="pt-[5px] pb-[5px] font-light">New Products</a>
                        </li>
                        <li>
                            <a href="#" class="pt-[5px] pb-[5px] font-light">Best Sellers</a>
                        </li>
                        <li>
                            <a href="#" class="pt-[5px] pb-[5px] font-light">Bundle &amp; Save</a>
                        </li>
                        <li>
                            <a href="#" class="pt-[5px] pb-[5px] font-light">Online Gift Card</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <p class="font-semibold text-[var(--black)] text-[1rem] mbe-[10px]">Infomation</p>
                        </li>
                        <li>
                            <a href="#" class="pt-[5px] pb-[5px] font-light">Start a Return</a>
                        </li>
                        <li>
                            <a href="#" class="pt-[5px] pb-[5px] font-light">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" class="pt-[5px] pb-[5px] font-light">Shipping FAQ</a>
                        </li>
                        <li>
                            <a href="#" class="pt-[5px] pb-[5px] font-light">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="#" class="pt-[5px] pb-[5px] font-light">Privacy Policy</a>
                        </li>
                    </ul>

                    <div class="col-[1/4] lg:col-auto">
                        <p class="text-[var(--black)] font-semibold text-[1.8rem] leading-[1.3]">Good emails.</p>
                        <p class="leading-[2] mt-2.5 mb-[35px] font-light">
                            Enter your email below to be the first to know about new collections and product launches.
                        </p>
                        <form action class="relative">
                            <input class="bg-[var(--white)] w-full transition-[var(--transition-1)] p-[12px_145px_12px_18px] border border-solid border-[var(--black_15)] rounded-[--radius-3] outline-none"
                                type="email" name="email_address" placeholder="Enter your email address" required 
                            />

                            <button type="submit" class="btn btn-primary absolute top-0 bottom-0 right-0 font-normal">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex flex-wrap items-center gap-4 justify-start mbe-5 lg:mbe-0">
                        <p class="font-medium">© 2026 yarlinlynn</p>
                        <ul class="social-link flex gap-5">
                            <li>
                                <a href="#" class="text-[var(--black)] transition-[var(--transition-1)] text-[18px]">
                                    <i class="ri-twitter-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[var(--black)] transition-[var(--transition-1)] text-[18px]">
                                    <i class="ri-facebook-circle-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[var(--black)] transition-[var(--transition-1)] text-[18px]">
                                    <i class="ri-instagram-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[var(--black)] transition-[var(--transition-1)] text-[18px]">
                                    <i class="ri-youtube-fill"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <a href="#" class="hidden lg:block">
                        <img src="../public/images/logo.png" width="179" height="26" loading="lazy" alt="Glowing">
                    </a>

                    <img src="../public/images/pay.png" width="313" height="28" alt="available all payment method" class="w-full max-w-max">
                </div>
            </div>
        </footer>
    `;
}