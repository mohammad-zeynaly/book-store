"use strict";
import { allProducts } from "../data/allData.js";
const allProductsContainer = document.querySelector("#allProducts");

allProducts.map((product) => {
  let { id, img, title, price } = product;
  allProductsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="best-sellers-box">
                <a
                  href="./productDetails.html"
                  class="best-sellers-box-img"
                >
                  <img
                    class="best-sellers-box__image"
                    src="${img}"
                    alt="عکس محصول "
                  />
                </a>
                <span class="best-sellers-box-content">
                  <span class="best-sellers-box-content__heading">
                    <a
                      href="./productDetails.html"
                      class="best-sellers-box__title"
                    >
                      ${title} 
                    </a>
                    <strong class="best-sellers-box__price">
                      ${price} هزار تومان
                    </strong>
                  </span>
                  <button class="best-sellers-box__btn" onclick="addProductToCart('${id}')">
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

const addProductToCart = (productId) => {
  console.log("add product to cart id: ", productId);
};
