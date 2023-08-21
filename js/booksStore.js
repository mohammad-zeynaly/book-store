"use strict";
import productGenerator from "./productGenerator.js";
const allProductsContainer = document.querySelector("#allProducts");

// render all products
productGenerator(allProductsContainer, "bookStore");
