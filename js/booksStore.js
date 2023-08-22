"use strict";
import { allProducts } from "../data/allData.js";
import productGenerator from "./productGenerator.js";
const allProductsContainer = document.querySelector("#allProducts");
const productSort = document.querySelector("#productSort");
const paginationContainer = document.querySelector(".best-sellers-pagination");
let products = allProducts;
let pageNumbers = [];
let pageSize = 8;
let currentPage = 1;

// render all products
productGenerator(products.slice(0, 8), allProductsContainer, "bookStore");

// sort allProduct
const allProductsSortHandler = (event) => {
  const sortValue = event.target.value;
  productGenerator([], allProductsContainer, "bookStore");

  switch (sortValue) {
    case "all": {
      products = allProducts;
      productGenerator(
        products.slice(0, pageSize),
        allProductsContainer,
        "bookStore"
      );
      isShowProductPagination();
      paginatedProductRenderToDom(pageNumbers, currentPage);
      break;
    }
    case "popularity": {
      products = allProducts.filter(
        (product) => product.sortType === "popularity"
      );
      productGenerator(products, allProductsContainer, "bookStore");
      isShowProductPagination();
      break;
    }
    case "date": {
      products = allProducts.filter((product) => product.sortType === "date");
      productGenerator(products, allProductsContainer, "bookStore");
      isShowProductPagination();
      break;
    }
    case "price-inexpensive": {
      products = allProducts.filter((product) => product.price < 60_000);
      productGenerator(products, allProductsContainer, "bookStore");
      isShowProductPagination();
      break;
    }
    case "price-expensive": {
      products = allProducts.filter((product) => product.price > 60_000);
      productGenerator(products, allProductsContainer, "bookStore");
      isShowProductPagination();
      break;
    }
    default: {
      products = allProducts;
      break;
    }
  }
};

const isShowProductPagination = () => {
  if (products.length < 8) {
    paginationContainer.classList.add("hidden");
    allProductsContainer.style.marginBottom = "5rem";
  } else {
    paginationContainer.classList.remove("hidden");
  }
};
isShowProductPagination();

//render pagination button
const paginatedProductRenderToDom = (pageNumbers, currentPage = 1) => {
  paginationContainer.innerHTML = "";
  pageNumbers.forEach((pageNum) => {
    paginationContainer.insertAdjacentHTML(
      "beforeend",
      `<button onclick="changePaginatedProduct('${
        pageNum + 1
      }')" class="best-sellers-pagination__btn ${
        pageNum + 1 === +currentPage
          ? "best-sellers-pagination__btn--active"
          : ""
      } ">${pageNum + 1}</button>
      `
    );
  });
};
paginatedProductRenderToDom(pageNumbers, currentPage);

//  pagination logic
const paginationLogic = () => {
  const endProductIndex = currentPage * pageSize;
  const startProductIndex = endProductIndex - pageSize;

  products = allProducts.slice(startProductIndex, endProductIndex);

  pageNumbers = Array.from(
    Array(Math.ceil(allProducts.length / pageSize)).keys()
  );
  paginatedProductRenderToDom(pageNumbers, currentPage);
};
paginationLogic();

// change pagination button
const changePaginatedProduct = (pageNumber) => {
  currentPage = pageNumber;
  paginationLogic();
  paginatedProductRenderToDom(pageNumbers, currentPage);
  productGenerator(products, allProductsContainer, "bookStore");
};

// set events
productSort.addEventListener("change", allProductsSortHandler);
window.changePaginatedProduct = changePaginatedProduct;
