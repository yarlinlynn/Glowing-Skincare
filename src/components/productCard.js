
export function ProductCard(product) {
    // calculate discount for product 
    const discount = product.originalPrice ? Math.round( ((product.originalPrice - product.price) / product.originalPrice) * 100 ) : 0;
    const price = (product.price / 100).toFixed(2);
    const originalPrice = product.originalPrice ? (product.originalPrice / 100).toFixed(2) : null;

    return `
        <li class="snap-start min-w-full sm:min-w-[calc(50%-15px)] md:min-w-[calc(33.33%-20px)] lg:min-w-[calc(20%-24px)]">
            <div class="shop-card">
                <div class="bg-[var(--light-gray)] aspect-[540/720] relative">
                    <img class="transition-[var(--transition-2)] w-full h-full object-cover"
                        src="${product.image}" alt="${product.name}" loaading="lazy" width="540" height="720"
                    />

                    ${
                        discount > 0 ? `
                            <span class="badge absolute top-[20px] left-[20px]" aria-label="${discount}% off">-${discount}%</span>
                        ` : ""
                    }

                    <div class="card-actions">
                        <button data-product-id="${product.id}" class="action-btn" aria-label="Add ${product.name} to cart">
                            <i class="ri-shopping-bag-4-line"></i>
                        </button>

                        <button data-product-id="${product.id}" class="action-btn" aria-label="Add ${product.name} to favourites">
                            <i class="ri-heart-line"></i>
                        </button>

                        <button class="action-btn" aria-label="customer service">
                            <i class="ri-chat-3-line"></i>
                        </button>
                    </div>
                </div>

                <div class="text-center py-[20px]">
                    <div class="flex items-center justify-center gap-[8px]">
                        ${
                            originalPrice ? `
                                <del class="font-extralight text-[var(--black_50)]">$39.00</del>
                            ` : ""
                        }

                        <span class="font-semibold">$29.00</span>
                    </div>

                    <h3>
                        <a href="#" class="font-medium transition-[var(--transition-1)] mbe-2 hover:underline hover:text-[var(--hoockers-green)]">${product.name}</a>
                    </h3>

                    <div class="flex items-center justify-center gap-[5px]">
                        <div class="flex items-center justify-center gap-2px] text-[15px] text-[var(--hoockers-green)]" aria-label="5 start rating">
                            ${"★".repeat(product.rating)}
                        </div>

                        <p class="font-normal leading-none text-[var(--black_50)]">${product.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        </li>
    `;
}