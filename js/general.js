"use strict";

// select element in dom
const overlayContainer = document.querySelector("#overlay");
const mobileMenuContainer = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector("#mobile-nav__btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu__close-btn");
const BasketCount = document.querySelector(".nav-wrapper-left__basket-count");

const cartProductsCounts = JSON.parse(localStorage.getItem("products"))?.length;

cartProductsCounts ? (BasketCount.textContent = cartProductsCounts) : 0;

const overlayShowHandler = () => {
  overlayContainer.classList.remove("overlay");
  mobileMenuContainer.classList.remove("mobile-menu--open");
};

// is show mobile menu
const mobileMenuShowHandler = () => {
  mobileMenuContainer.classList.toggle("mobile-menu--open");
  overlayContainer.classList.toggle("overlay");
};

// set events
overlayContainer.addEventListener("click", overlayShowHandler);
mobileMenuBtn.addEventListener("click", mobileMenuShowHandler);
mobileMenuCloseBtn.addEventListener("click", overlayShowHandler);
