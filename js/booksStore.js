"use strict";
import { allProducts } from "../data/allData.js";
import productGenerator from "./productGenerator.js";
const allProductsContainer = document.querySelector("#allProducts");
const productSort = document.querySelector("#productSort");
let products = allProducts;

// render all products
productGenerator(products, allProductsContainer, "bookStore");

const allProductsSortHandler = (event) => {
  const sortValue = event.target.value;
  productGenerator((products = []), allProductsContainer, "bookStore");

  switch (sortValue) {
    case "all": {
      productGenerator(allProducts, allProductsContainer, "bookStore");
      break;
    }
    case "popularity": {
      productGenerator(
        allProducts.filter((product) => product.sortType === "popularity"),
        allProductsContainer,
        "bookStore"
      );
      break;
    }
    case "date": {
      productGenerator(
        allProducts.filter((product) => product.sortType === "date"),
        allProductsContainer,
        "bookStore"
      );
      break;
    }
    case "price-inexpensive": {
      productGenerator(
        allProducts.filter((product) => product.price < 60_000),
        allProductsContainer,
        "bookStore"
      );
      break;
    }
    case "price-expensive": {
      productGenerator(
        allProducts.filter((product) => product.price > 60_000),
        allProductsContainer,
        "bookStore"
      );
      break;
    }

    default: {
      return false;
    }
  }
};

// set events
productSort.addEventListener("change", allProductsSortHandler);
