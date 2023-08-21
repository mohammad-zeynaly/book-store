"use strict";
// select element in dom
const overlayContainer = document.querySelector("#overlay");
const mobileMenuContainer = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector("#mobile-nav__btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu__close-btn");
const desktopBasketCount = document.querySelector(
  ".nav-wrapper-left__basket-count"
);
const mobileBasketCount = document.querySelector(".mobile-basket___count");

// all shopping cart products count
const cartProductsCounts = JSON.parse(localStorage.getItem("products"))?.length;

const overlayShowHandler = () => {
  overlayContainer.classList.remove("overlay");
  mobileMenuContainer.classList.remove("mobile-menu--open");
};

// is show mobile menu
const mobileMenuShowHandler = () => {
  mobileMenuContainer.classList.toggle("mobile-menu--open");
  overlayContainer.classList.toggle("overlay");
};

// update shopping-cart products count
export const shoppingCartProductCountUpdate = (productCount) => {
  desktopBasketCount.textContent = 0;
  mobileBasketCount.textContent = 0;
  if (productCount) {
    desktopBasketCount.textContent = productCount;
    mobileBasketCount.textContent = productCount;
  }
};

if (cartProductsCounts) {
  shoppingCartProductCountUpdate(cartProductsCounts);
}

// set events
overlayContainer.addEventListener("click", overlayShowHandler);
mobileMenuBtn.addEventListener("click", mobileMenuShowHandler);
mobileMenuCloseBtn.addEventListener("click", overlayShowHandler);
