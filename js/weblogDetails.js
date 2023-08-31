"use strict";
import { allWeblogs } from "../data/allData.js";

const months = [
  "فروردین ",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

// select element in dom
const blogTitle = document.querySelector("#blogTitle");
const blogImage = document.querySelector("#blogImage");

//search url parameters
const urlParams = new URLSearchParams(location.search);
const mainWeblogId = urlParams.get("id");

const embedBlogInfo = (mainBlog) => {
  blogTitle.textContent = mainBlog.title;
  blogImage.setAttribute("src", mainBlog.img);
};

if (allWeblogs?.length > 0) {
  const mainBlog = allWeblogs.find((weblog) => weblog.id === +mainWeblogId);
  embedBlogInfo(mainBlog);
} else {
  fetch(`https://xtra-book.iran.liara.run/allWeblogs/${mainWeblogId}`)
    .then((response) => response.json())
    .then((data) => embedBlogInfo(data));
}

const allWeblogCommentsWrapper = document.querySelector("#allWeblogComments");

// select element to dom
const commentsForm = document.querySelector("#commentsForm");
const commentInputElem = document.querySelector("#comment");
const usernameInputElem = document.querySelector("#username");
const userEmailInputElem = document.querySelector("#userEmail");
const commentsCount = document.querySelector("#comments__count");

let numberMap = {
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
};

let commentCount = 3;

let allComments = JSON.parse(localStorage.getItem("comments") || "[]");

const weblogPostGenerator = () => {
  if (allComments.length > 0) {
    commentCount = commentCount + allComments.length;
    commentsCount.textContent = commentCount + " نظر ";
    allComments.map((comment) => {
      allWeblogCommentsWrapper.insertAdjacentHTML(
        "afterbegin",
        ` <div class="weblog-details-comments-item">
                    <div class="weblog-details-comments-item-heading">
                      <span
                        class="weblog-details-comments-item-heading__user-detail"
                      >
                        <img
                          class="weblog-details-comments-item-heading__img"
                          src="../assets/images/users/default-user.png"
                          alt="عکس کاربر"
                          loading="lazy"
                        />
                        <span
                          class="weblog-details-comments-item-heading__title"
                          >${comment.name} گفته:</span
                        >
                      </span>
                      <span class="weblog-details-comments-item-heading__date"
                        >${comment.commentDate.slice(7, 9)} ${
          months[
            comment.commentDate
              .slice(5, 6)
              .replace(/[۰-۹]/g, (match) => numberMap[match]) - 1
          ]
        } ${comment.commentDate.slice(
          0,
          4
        )} ساعت ${`${comment.commentHour}:${comment.commentMinus}`}
                      </span>
                    </div>
                    <p class="weblog-details-comments-item__body">
                 ${comment.description}
                    </p>
                      <span class="weblog-details-comments-item__status">
                      در انتظار تایید
                    </span>
                  </div>`
      );
    });
  }
};
weblogPostGenerator();

const newCommentRenderToDom = (comment) => {
  commentCount = commentCount + 1;
  commentsCount.textContent = commentCount + " نظر ";
  allWeblogCommentsWrapper.insertAdjacentHTML(
    "afterbegin",
    ` <div class="weblog-details-comments-item">
                    <div class="weblog-details-comments-item-heading">
                      <span
                        class="weblog-details-comments-item-heading__user-detail"
                      >
                        <img
                          class="weblog-details-comments-item-heading__img"
                          src="../assets/images/users/default-user.png"
                          alt="عکس کاربر"
                          loading="lazy"
                        />
                        <span
                          class="weblog-details-comments-item-heading__title"
                          >${comment.name} گفته:</span
                        >
                      </span>
                      <span class="weblog-details-comments-item-heading__date"
                        >${comment.commentDate.slice(7, 9)} ${
      months[
        comment.commentDate
          .slice(5, 6)
          .replace(/[۰-۹]/g, (match) => numberMap[match]) - 1
      ]
    } ${comment.commentDate.slice(
      0,
      4
    )} ساعت ${`${comment.commentHour}:${comment.commentMinus}`}
                      </span>
                    </div>
                    <p class="weblog-details-comments-item__body">
                 ${comment.description}
                    </p>
                      <span class="weblog-details-comments-item__status">
                      در انتظار تایید
                    </span>
                  </div>`
  );
};

const saveCommentsInLocalStorage = (allComments) => {
  localStorage.setItem("comments", JSON.stringify(allComments));
};

const clearInputsValues = () => {
  commentInputElem.value = "";
  usernameInputElem.value = "";
  userEmailInputElem.value = "";
};

const nowDateGenerate = () => {
  let nowDate = new Date().toLocaleString("fa-iran").split(" ");

  const commentDate = nowDate[0];
  const commentTimes = nowDate[1].split(",")[0].split(":");
  const commentHour = commentTimes[0];
  const commentMinus = commentTimes[1];

  return {
    commentDate,
    commentHour,
    commentMinus,
  };
};

const createNewComment = (event) => {
  event.preventDefault();

  if (
    commentInputElem.value.trim() !== "" &&
    usernameInputElem.value.trim() !== "" &&
    userEmailInputElem.value.trim() !== ""
  ) {
    let persianDateObj = nowDateGenerate();
    let newComment = {
      id: crypto.randomUUID(),
      name: usernameInputElem.value,
      description: commentInputElem.value,
    };
    let finalCommentObj = { ...newComment, ...persianDateObj };
    allComments.push(finalCommentObj);
    saveCommentsInLocalStorage(allComments);
    newCommentRenderToDom(finalCommentObj);
    clearInputsValues();
  } else {
  }
};

commentsForm.addEventListener("submit", createNewComment);
