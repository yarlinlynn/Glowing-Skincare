
export function SidePanel() {
    return `
        <aside class="z-[5]">
            <div class="side-panel" data-side-panel>
                <div class="flex justify-between items-center mbe-[55px] border-b border-solid border-[var(--black_15)]">
                    <h2 class="text-[20px] font-bold" data-side-panel-title></h2>
                    <button type="button" aria-label="Close panel" data-side-panel-close
                        class="text-[var(--hoockers-green)] text-[28px]"
                    >
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
                <div data-side-panel-content 
                    class="h-[calc(100%-80px)] overflow-y-auto flex flex-col gap-[10px]"
                >
                </div>
            </div>
            <div class="overlay" data-overlay></div>
        </aside>
    `;
}