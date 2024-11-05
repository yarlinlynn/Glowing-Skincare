  
/*========================= SHOW MENU  ==========================*/

'use strict';

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
}

const navToggle = document.querySelectorAll("[data-nav-toggle]");
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("open");
    overlay.classList.toggle("open");
}

addEventOnElem(navToggle, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("open");
    overlay.classList.remove("open");
}

addEventOnElem(navLinks, "click", closeNav);

const header = document.querySelector("[data-header]");

const headerActive = function () {
    if (window.scrollY > 150) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

addEventOnElem (window, "scroll", headerActive);


let lastScroll = 0;

const headerSticky = function () {
    if (lastScroll >= window.scrollY) {
      header.classList.remove("header-hide");
    } else {
      header.classList.add("header-hide");
    }
  
    lastScroll = window.scrollY;
  }
  
  addEventOnElem(window, "scroll", headerSticky);


/*========================= CART  ==========================*/

const openCart = document.querySelector(".open_cart");
const closeCart = document.querySelector(".close_cart");
const cartContainer = document.querySelector(".cart_container");

if (openCart) {
    openCart.addEventListener('click', () =>{
        cartContainer.classList.add('open')
        overlay.classList.add('open')
    });
}

if (closeCart) {
    closeCart.addEventListener('click', () =>{
        cartContainer.classList.remove('open')
        overlay.classList.remove('open')
    });
}

/*===================== CART FUNCTIONALITY ======================*/

//SELECT ELEMENTS 

const productsElement = document.querySelector(".scrollbar");
const cartItemsElement = document.querySelector(".cart_content");
const cartTotalElement = document.querySelector(".cart_footer");
const cartAmountElement = document.querySelector(".cart_amount");

// RENDER PRODUCTS ON HTML DOCMENT
function renderProducts () {
    products.forEach( (product) => {
        productsElement.innerHTML += `
        <li class="scrollbar_item">
            <div class="shop_card">
                <div class="img_holder card_banner" style="--width: 440;--height: 620;">
                    <img src="${product.imgSrc}" alt="${product.name}" class="img_cover" width="440" height="620" loading="lazy">

                    <div class="card_actions">
                        <button class="action_btn" onclick="addToCart(${product.id})">
                            <i class="ri-shopping-bag-4-line "></i>
                        </button>
                        <button class="action_btn">
                            <i class="ri-star-line"></i>
                        </button>
                        <button class="action_btn">
                            <i class="ri-repeat-line"></i>
                        </button>
                    </div>
                </div>

                <div class="card_content">
                    <div class="card_container">
                        <span class="product_price">R${product.price}.00</span>
                    </div>

                    <h4 class="product_title">${product.name}</h4>

                    <div class="product_rating" aria-label="5 star ratings">
                        <div class="rating_wrapper">
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                        </div>

                        <p class="rating_text"> 5170 reviews </p>
                    </div>
                </div>
            </div>
        </li>
        `;
    });
}
renderProducts();

// CART ARRAY
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();


// ADD PRODUCTS  TO CART
function addToCart(id) {
    //CHECK IF ITEMS ARE ALREADY IN CART
    if (cart.some((item) => item.id === id)) {
        updateCartQunatity("plus", id);
    } else {
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            cartQuantity : 1
        });
    }
    
    updateCart();
}

//UPDATE CART
function updateCart() {
    renderCartItems();
    renderCartTotal();

    // SAVE CART ITEMS TO LOCAL STORAGE
    localStorage.setItem("CART", JSON.stringify(cart));
}

// CALCULATE ITEMS IN CART
function renderCartTotal() {
    let totalPrice = 0, totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.cartQuantity;
        totalItems += item.cartQuantity;
    });

    cartTotalElement.innerHTML = `
        <div class="total">
            <strong class="total_title">Total
                <span>(Items: ${totalItems})</span>
            </strong>
            <span class="total_price">R ${totalPrice}.00</span>
        </div>
        <button class="checkout_btn">Checkout</button>
    `;

    cartAmountElement.innerHTML = totalItems;
}


//RENDER PRODUCTS IN CART
function renderCartItems() {
    cartItemsElement.innerHTML = ""; //clears cart element
    cart.forEach((item) => {
        cartItemsElement.innerHTML += `
        <div class="cart_item">
            <i class="ri-delete-bin-6-line remove_item" onclick="removeItemFromCart(${item.id})"></i>

            <div class="product_details">
                <img src="${item.imgSrc}">
                <div class="cart_product_info">
                    <p class="cart_product_title"> ${item.name} </p>
                    <p class="cart_product">R${item.price}.00</p>
  
                    <div class="cart_item_quantity">
                        <i class="ri-subtract-line" onclick="updateCartQunatity('minus', ${item.id})"></i>
                        <span class="quantity">${item.cartQuantity}</span>
                        <i class="ri-add-line" onclick="updateCartQunatity('plus', ${item.id})"></i>
                    </div>
                </div>
                        
                </div>
            </div>
        `;
    });
}

// UPDATE QUANITY OF ITEMS IN CART
function updateCartQunatity(action, id) {
    cart = cart.map((item) => {

        let cartQuantity = item.cartQuantity;

        if(item.id === id) {
            if(action === "minus" && cartQuantity > 1) {
                cartQuantity--;
            } else if(action === "plus" && cartQuantity < item.instock) {
                cartQuantity++;
            }
        } 

        return {
            ...item,
            cartQuantity,
        }
    });

    updateCart();
}

// REMOVE ITEMS FROM CART
function removeItemFromCart(id) {
    cart = cart.filter( (item) => item.id != id);

    updateCart();
}


