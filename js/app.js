"use strict";
import { allProducts } from "../data/allData.js";
// import products generator
import productGenerator from "./productGenerator.js";
// select element in dom
const bestSellersProducts = document.querySelector("#bestSellersProducts");

// render product selected
productGenerator(allProducts, bestSellersProducts, "index");
