
import { Alert } from "./alert.js";
import { Sidebar } from "./sidebar.js";

export function Header() {
    return `
        <header class="relative pbe-20 lg:pb-[60px] lg:mb-2.5">
            ${Alert()}

            <div class="header-top" data-header>
                <div class="container flex items-center justify-between gap-5 lg:flex-wrap xs:px-[30px] xs:max-w-[unset]">
                    <button class="w-[26px] grid gap-[6px] py-[5px] lg:hidden" aria-label="open menu" data-nav-toggle>
                        <span class="line w-[15px]"></span>
                        <span class="line"></span>
                        <span class="line w-[18px]"></span>
                    </button>

                    <div class="input-wrapper lg:relative">
                        <input type="search" name="search" placeholder="Search product" class="search-field"/>
                        <button aria-label="search" class="absolute top-1/2 right-[15px] -translate-y-1/2 text-[22px]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                        </button>
                    </div>

                    <a href="#" class="lg:me-15">
                        <img src="../public/images/logo.png" alt="Glowing" loading="lazy" width="179" height="26"/>
                    </a>

                    <div id="header-actions" class="flex gap-10 items-center">
                        <button type="button" aria-label="user" 
                            class="hidden text-[28px] transition-[var(--transition-1)] relative lg:block"
                        >
                            <i class="ri-user-line"></i>
                        </button>
                        <button type="button" aria-label="favourites" data-open-panel="favourites"
                            class="hidden text-[28px] transition-[var(--transition-1)] relative lg:block"
                        >
                            <i class="ri-heart-line"></i>

                            <span data-favourites-badge class="btn-badge">0</span>
                        </button>
                        <button type="button" aria-label="cart" data-open-panel="cart" 
                            class="text-[28px] transition-[var(--transition-1)] relative lg:flex lg:items-center lg:gap-[10px]"
                        >
                            <data data-cart-total value="0" 
                                class="mt-[3px] text-[14px] font-bold hidden lg:block" 
                            >
                                $0.00
                            </data>

                            <i class="ri-shopping-bag-4-line"></i>

                            <span data-cart-badge class="btn-badge">0</span>
                        </button>
                    </div>

                    <nav class="navbar hidden lg:block" data-navbar>
                        <ul class="flex gap-[45px] justify-center">
                            <li>
                                <a href="#home" class="nav-link relative z-[1] text-[var(--black)] font-bold">Home</a>
                            </li>
                            <li>
                                <a href="#collection" class="nav-link relative z-[1] text-[var(--black)] font-bold">Collection</a>
                            </li>
                            <li>
                                <a href="#shop" class="nav-link relative z-[1] text-[var(--black)] font-bold">Shop</a>
                            </li>
                            <li>
                                <a href="#offer" class="nav-link relative z-[1] text-[var(--black)] font-bold">Offer</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    `;
}