"use strict";

import { allProducts } from "../data/allData.js";
import { addProductToCart } from "./general.js";
// select element in dom
const productTitle = document.querySelector(".product-details-content__title");
const productImage = document.querySelector(".product-details__img");
const productPriceReal = document.querySelector(
  ".product-details-content__price-real"
);
const productPriceDiscount = document.querySelector(
  ".product-details-content__price-discount"
);
const urlParams = new URLSearchParams(location.search);
const mainProductId = urlParams.get("id");
const addToCartBtn = document.querySelector(".product-details-content__btn");
const numberConvert = new Intl.NumberFormat("fa");

const mainProductGenerator = (mainProductDetail) => {
  productTitle.textContent = mainProductDetail.title;
  productImage.setAttribute("src", `.${mainProductDetail.img}`);
  productPriceReal.textContent = numberConvert.format(
    mainProductDetail.price + 15_000
  );
  productPriceDiscount.textContent = numberConvert.format(
    mainProductDetail.price
  );
};

if (allProducts?.length > 0) {
  const mainProduct = allProducts.find(
    (product) => product.id === +mainProductId
  );
  console.log(mainProduct);
  mainProductGenerator(mainProduct);
} else {
  fetch(`https://xtra-book.iran.liara.run/allProducts/${mainProductId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mainProductGenerator(data);
    });
}
// zoom in image
const zoomImage = (event) => {
  let xPosition = event.clientX - event.target.offsetLeft;
  let yPosition = event.clientY - event.target.offsetTop;

  productImage.style.transformOrigin = `${xPosition}px ${yPosition}px`;
  productImage.style.transform = "scale(1.4)";
};

// zoomOut in image
const zoomedOutImage = () => {
  productImage.style.transformOrigin = "center";
  productImage.style.transform = "scale(1)";
};

// set events
productImage.addEventListener("mousemove", zoomImage);
productImage.addEventListener("mouseleave", zoomedOutImage);
addToCartBtn.addEventListener("click", () => addProductToCart(mainProductId));
