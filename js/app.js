"use strict";
import { allProducts } from "../data/allData.js";
// import products generator
import productGenerator from "./productGenerator.js";
// select element in dom
const overlayContainer = document.querySelector("#overlay");
const mobileMenuContainer = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector("#mobile-nav__btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu__close-btn");
const bestSellersProducts = document.querySelector("#bestSellersProducts");

const overlayShowHandler = () => {
  overlayContainer.classList.remove("overlay");
  mobileMenuContainer.classList.remove("mobile-menu--open");
};

// is show mobile menu
const mobileMenuShowHandler = () => {
  mobileMenuContainer.classList.toggle("mobile-menu--open");
  overlayContainer.classList.toggle("overlay");
};

// render product selected
productGenerator(allProducts, bestSellersProducts, "index");

// set events
overlayContainer.addEventListener("click", overlayShowHandler);
mobileMenuBtn.addEventListener("click", mobileMenuShowHandler);
mobileMenuCloseBtn.addEventListener("click", overlayShowHandler);
