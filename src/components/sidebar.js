

export function Sidebar() {
    return `
        <aside class="z-[5]" data-sidebar>
            <div class="mobile-nav" data-navbar>
                <div class="flex justify-between items-center mbe-[55px]">
                    <a href="#">
                        <img src="../public/images/logo.png" alt="Glowing" loading="lazy" width="179" height="26"/>
                    </a>

                    <button class="nav-close-btn text-[var(--hoockers-green)] text-[28px]" aria-label="close menu" data-nav-close>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>
                    </button>
                </div>

                <ul>
                    <li>
                        <a href="#home" class=" text-[var(--black)] font-bold uppercase transition-[var(--transition-1)] tracking-[1px] py-[5px] text-[var(--fs-9)]">Home</a>
                    </li>
                    <li>
                        <a href="#collection" class="text-[var(--black)] font-bold uppercase transition-[var(--transition-1)] tracking-[1px] py-[5px] text-[var(--fs-9)]">Collection</a>
                    </li>
                    <li>
                        <a href="#shop" class="text-[var(--black)] font-bold uppercase transition-[var(--transition-1)] tracking-[1px] py-[5px] text-[var(--fs-9)]">Shop</a>
                    </li>
                    <li>
                        <a href="#offer" class="text-[var(--black)] font-bold uppercase transition-[var(--transition-1)] tracking-[1px] py-[5px] text-[var(--fs-9)]">Offer</a>
                    </li>
                </ul>
            </div>
            <div class="overlay" data-overlay></div>
        </aside>
    `;
}