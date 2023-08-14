"use strict";
// select element in dom
const overlayContainer = document.querySelector("#overlay");
const mobileMenuContainer = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector("#mobile-nav__btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu__close-btn");
// is show mobile menu

const overlayShowHandler = () => {
  overlayContainer.classList.remove("overlay");
  mobileMenuContainer.classList.remove("mobile-menu--open");
};

const mobileMenuShowHandler = () => {
  mobileMenuContainer.classList.toggle("mobile-menu--open");
  overlayContainer.classList.toggle("overlay");
};

// set events
overlayContainer.addEventListener("click", overlayShowHandler);
mobileMenuBtn.addEventListener("click", mobileMenuShowHandler);
mobileMenuCloseBtn.addEventListener("click", overlayShowHandler);
