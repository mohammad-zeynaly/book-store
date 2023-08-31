"use strict";
import { allProducts } from "../data/allData.js";
import { toastTemplate } from "./toastTemplate.js";
// select element in dom
const overlayContainer = document.querySelector("#overlay");
const mobileMenuContainer = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector("#mobile-nav__btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu__close-btn");
const desktopBasketCount = document.querySelector(
  ".nav-wrapper-left__basket-count"
);
const mobileBasketCount = document.querySelector(".mobile-basket___count");
const shoppingCart = JSON.parse(localStorage.getItem("products") || "[]");

// all shopping cart products count
const cartProductsCounts = JSON.parse(localStorage.getItem("products"))?.length;

const overlayShowHandler = () => {
  overlayContainer.classList.remove("overlay");
  mobileMenuContainer.classList.remove("mobile-menu--open");
};
//get Product Data To Server
export const getProductDataToServer = (productGenerator, container, page) => {
  fetch("https://xtra-book.iran.liara.run/allProducts")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("allProducts", JSON.stringify(data));

      productGenerator(data, container, page);
    })
    .catch((error) => console.error("Fail to Fetch :(( ", error));
};

// is show mobile menu
const mobileMenuShowHandler = () => {
  mobileMenuContainer.classList.toggle("mobile-menu--open");
  overlayContainer.classList.toggle("overlay");
};

// save product in localStorage
export const saveInProductInLocalStorage = (productsArray) => {
  localStorage.setItem("products", JSON.stringify(productsArray));
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

// add product to cart
export const addProductToCart = (productId) => {
  const mainProduct = allProducts.find((product) => product.id === +productId);

  const productIsInCart = shoppingCart?.some(
    (product) => product.id === mainProduct.id
  );

  if (!productIsInCart) {
    shoppingCart.push(mainProduct);
    saveInProductInLocalStorage(shoppingCart);
    shoppingCartProductCountUpdate(shoppingCart.length);
    toastTemplate.fire({
      icon: "success",
      title: "محصول با موفقیت اضافه شد",
    });
  } else {
    toastTemplate.fire({
      icon: "warning",
      title: "محصول از قبل در سبد خرید موجود می باشد ",
    });
  }
  console.log(shoppingCart);
};

if (cartProductsCounts) {
  shoppingCartProductCountUpdate(cartProductsCounts);
}

// set events
overlayContainer.addEventListener("click", overlayShowHandler);
mobileMenuBtn.addEventListener("click", mobileMenuShowHandler);
mobileMenuCloseBtn.addEventListener("click", overlayShowHandler);
window.addProductToCart = addProductToCart;

// main api => https://xtra-book.iran.liara.run/
