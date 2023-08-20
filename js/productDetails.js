"use strict";
// select element in dom
const productDetailsImg = document.querySelector(".product-details__img");

const zoomImage = (event) => {
  let xPosition = event.clientX - event.target.offsetLeft;
  let yPosition = event.clientY - event.target.offsetTop;

  productDetailsImg.style.transformOrigin = `${xPosition}px ${yPosition}px`;
  productDetailsImg.style.transform = "scale(1.5)";
};

const zoomedOutImage = () => {
  productDetailsImg.style.transformOrigin = "center";
  productDetailsImg.style.transform = "scale(1)";
};

// set events
productDetailsImg.addEventListener("mousemove", zoomImage);
productDetailsImg.addEventListener("mouseleave", zoomedOutImage);
