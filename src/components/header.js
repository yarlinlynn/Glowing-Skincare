
import { Alert } from "./alert.js";
// import mobile view

export function Header() {
    return `
        <header class="relative pbe-20 lg:pb-[60px] lg:mb-2.5">
            ${Alert()}

            <div class="header absolute w-full bottom-0 left-0 z-[4] py-[26px] lg:static lg:pt-6 lg:[position:unset] lg:pt-6 lg:pb-1" data-header>
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
                        <button aria-label="user" class="hidden text-[28px] transition-[var(--transition-1)] relative lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"/></svg>
                        </button>
                        <button aria-label="favourites" class="hidden text-[28px] transition-[var(--transition-1)] relative lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>

                            <span class="absolute top-0 -right-[10px] bg-[var(--black)] text-[var(--white)] text-[12.4px] min-w-[18px] h-[18px] leading-[1.4] rounded-[20px] font-bold">0</span>
                        </button>
                        <button aria-label="cart" class="text-[28px] transition-[var(--transition-1)] relative lg:flex lg:items-center lg:gap-[10px]">
                            <data class="mt-[3px] text-[14px] font-bold hidden lg:block" value="0">$0.00</data>

                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm421.5-298.5Q680-517 680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400q83 0 141.5-58.5ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/></svg>

                            <span id="cart-btn-badge" class="absolute top-0 -right-[10px] bg-[var(--black)] text-[var(--white)] text-[12.4px] min-w-[18px] h-[18px] leading-[1.4] rounded-[20px] font-bold">0</span>
                        </button>
                    </div>

                    <nav class="hidden lg:block absolute w-full bottom-0 left-0 bg-[var(--white)] py-[18px] z-[4]">
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