"use strict";
import { allProducts } from "../data/allData.js";
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
const mainProduct = allProducts.find(
  (product) => product.id === +mainProductId
);

const mainProductGenerator = () => {
  productTitle.textContent = mainProduct.title;
  productImage.setAttribute("src", `.${mainProduct.img}`);
  productPriceReal.textContent = mainProduct.price + 15_000;
  productPriceDiscount.textContent = mainProduct.price;
};
mainProductGenerator();

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
