"use strict";
import { allWeblogs } from "../data/allData.js";

// select element in dom
const blogTitle = document.querySelector("#blogTitle");
const blogImage = document.querySelector("#blogImage");
//search url parameters
const urlParams = new URLSearchParams(location.search);
const mainWeblogId = urlParams.get("id");
const mainBlog = allWeblogs.find((weblog) => weblog.id === +mainWeblogId);

blogTitle.textContent = mainBlog.title;
blogImage.setAttribute("src", mainBlog.img);
