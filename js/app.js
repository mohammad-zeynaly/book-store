"use strict";
// import all products
import { allProducts } from "./allData.js";

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

allProducts.map((product) => {
  bestSellersProducts.insertAdjacentHTML(
    "beforeend",
    `<div class="best-sellers-box">
              <a
                href="./pages/productDetails.html"
                class="best-sellers-box-img"
              >
                <img
                  class="best-sellers-box__image"
                  src="${product.img}"
                  alt="عکس محصول "
                />
              </a>
              <span class="best-sellers-box-content">
                <span class="best-sellers-box-content__heading">
                  <a
                    href="./pages/productDetails.html"
                    class="best-sellers-box__title"
                  >
                    ${product.title} 
                  </a>
                  <strong class="best-sellers-box__price">
                    ${product.price} هزار تومان
                  </strong>
                </span>
                <button class="best-sellers-box__btn">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="best-sellers-box__icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  افزودن به سبد
                </button>
              </span>
            </div>`
  );
});

// set events
overlayContainer.addEventListener("click", overlayShowHandler);
mobileMenuBtn.addEventListener("click", mobileMenuShowHandler);
mobileMenuCloseBtn.addEventListener("click", overlayShowHandler);
