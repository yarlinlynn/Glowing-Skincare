

export function Sidebar() {
    return `
        <aside class="z-[5]" data-sidebar>
            <div class="mobile-nav" data-navbar>
                <div class="flex justify-between items-center mbe-[55px]">
                    <a href="#">
                        <img src="../public/images/logo.png" alt="Glowing" loading="lazy" width="179" height="26"/>
                    </a>

                    <button class="nav-close-btn text-[var(--hoockers-green)] text-[28px]" aria-label="close menu" data-nav-close>
                        <i class="ri-close-fill"></i>
                    </button>
                </div>

                <ul class="flex flex-col gap-[10px]">
                    <li>
                        <a href="#home" class=" text-[var(--black)] font-medium uppercase transition-[var(--transition-1)] tracking-[1px] py-[5px] text-[var(--fs-9)] hover:text-[var(--hoockers-green)]">Home</a>
                    </li>
                    <li>
                        <a href="#collection" class="text-[var(--black)] font-medium uppercase transition-[var(--transition-1)] tracking-[1px] py-[5px] text-[var(--fs-9)] hover:text-[var(--hoockers-green)]">Collection</a>
                    </li>
                    <li>
                        <a href="#shop" class="text-[var(--black)] font-medium uppercase transition-[var(--transition-1)] tracking-[1px] py-[5px] text-[var(--fs-9)] hover:text-[var(--hoockers-green)]">Shop</a>
                    </li>
                    <li>
                        <a href="#offer" class="text-[var(--black)] font-medium uppercase transition-[var(--transition-1)] tracking-[1px] py-[5px] text-[var(--fs-9)] hover:text-[var(--hoockers-green)]">Offer</a>
                    </li>
                </ul>
            </div>
            <div class="overlay" data-overlay></div>
        </aside>
    `;
}