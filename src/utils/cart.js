
import { products } from "../data/products";

const STORAGE_KEY = "cart";

// Load cart from localStorage
let cartItems = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Get current cart state
export function getCartItems() {
    return cartItems;
}

// Get cart quantity
export function getCartQuantity() {
    return cartItems.reduce( (total, item) => total + item.quantity, 0);
}

// Get cart total in cents
export function getCartTotal() {
    return cartItems.reduce( (total, item) => {
        const product = products.find(product => product.id === item.id);
        if (!product) return total;
        return total + (product.price * item.quantity);
    }, 0);
}

// Check whether product is already inside cart
export function isInCart(productId) {
    return cartItems.some(item => item.id === productId);
}

// Add product to cart
export function addToCart(productId) {
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({id: productId, quantity: 1});
    }

    saveCart();
    updateCartUI();
}

// Increase quantity
export function increaseCartQuantity(productId) {
    const item = cartItems.find(item => item.id === productId);
    if (!item) return;
    item.quantity += 1;
    saveCart();
    updateCartUI();
}

// Decrease quantity
export function decreaseCartQuantity(productId) {
    const item = cartItems.find(item => item.id === productId);
    if (!item) return;
    item.quantity -= 1;
    // remove product completely if quantity is 0
    if (item.quantity <= 0) {
        cartItems = cartItems.filter(item => item.id !== productId);
    }

    saveCart();
    updateCartUI();
}

// Delete product from cart
export function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// saves cart state
function saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
}

// Update cart UI
export function updateCartUI() {
    updateCartButtons();
    updateCartBadge();
    updateCartTotal();
}

// Update product card cart buttons
function updateCartButtons() {
    document.querySelectorAll('[data-product-action="cart"]').forEach(button => {
        const productId = button.dataset.productId;
        const active = isInCart(productId);
        // change button icon
        button.classList.toggle("text-[var(--hoockers-green)]", active);
        const icon = button.querySelector("i");
        if (icon) {
            icon.className = active ? "ri-shopping-bag-4-fill" : "ri-shopping-bag-4-line";
        }
        const text = button.querySelector("[data-cart-button-text]");
        if (text && productId === "product-13") {
            text.textContent = active ? "Added to Cart" : "Get Only $39.00";
        }
        if (productId === "product-13") {
            button.classList.toggle("bg-[var(--white)]", active);
            button.classList.toggle("border", active);
            button.classList.toggle("border-[var(--black)]", active);
            button.classList.toggle("text-[var(--black)]", active);
        }

        button.setAttribute("aria-label", active ? "Remove from cart" : "Add to cart");
    });
}

function updateCartBadge() {
    const badge = document.querySelector("[data-cart-badge]");
    if (!badge) return;
    const cartItems = getCartItems();
    const productCount = cartItems.length;
    badge.textContent = productCount;
    badge.style.display = productCount > 0 ? "block" : "none";
}

// update cart total inside header
function updateCartTotal() {
    const totalElement = document.querySelector("[data-cart-total]");
    if (!totalElement) return;
    const total = cartItems.reduce( (sum, item) => {
        const product = products.find(product => product.id === item.id);
        if (!product) return sum;
        return sum + (product.price * item.quantity);
    }, 0);

    totalElement.textContent = `$${(total / 100).toFixed(2)}`;
}