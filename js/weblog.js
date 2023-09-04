"use strict";
// import { allWeblogs } from "../data/allData.js";
const allWeblogsContainer = document.getElementById("allWeblogs");

const fetchGetAllWeblogs = () => {
  fetch("https://handy-deluxe-hovercraft.glitch.me/allWeblogs")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("allWeblogs", JSON.stringify(data));
      allWeblogsGenerator(data);
    });
};
fetchGetAllWeblogs();
const allWeblogsGenerator = (allWeblogs) => {
  allWeblogs.map((weblog) => {
    let { id, title, img, caption } = weblog;
    allWeblogsContainer.insertAdjacentHTML(
      "beforeend",
      ` <div class="weblog-item">
              <a href="./weblogDetails.html?id=${id}" class="weblog-item-img">
                <img
                  class="weblog-item__image"
                  src="${img}"
                  alt="عکس هر وبلاگ"
                  loading="lazy"
                  
                />
              </a>
              <span class="weblog-item__description">
                <a href="./weblogDetails.html?id=${id}" class="weblog-item__title"
                  > ${title} </a

                >
                <p class="weblog-item__caption">
                  ${caption}
                </p>
                <a href="./weblogDetails.html?id=${id}" class="weblog-item__link">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    class="weblog-item__icon"
                  >
                    <path
                      d="M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z"
                      fill="#1C274C"
                    />
                  </svg>
                  <span>ادامه مطلب</span>
                </a>
              </span>
            </div>`
    );
  });
};
