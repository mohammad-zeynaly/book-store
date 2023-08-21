import { shoppingCartProductCountUpdate } from "./general.js";
import { saveInProductInLocalStorage } from "./productGenerator.js";

let allShoppingCartProducts = JSON.parse(
  localStorage.getItem("products" || "[]")
);
// select element to dom
const cartProducts = document.querySelector("#cartProducts");

console.log("cartProducts => ", cartProducts);

const renderCartProductsToDom = (shoppingCartProducts) => {
  cartProducts.innerHTML = "";
  shoppingCartProducts?.forEach((product) => {
    let { id, title, img, price } = product;
    cartProducts.insertAdjacentHTML(
      "beforeend",
      `<tr class="shopping-cart-table-body__heading">
                  <td class="shopping-cart-table-body__column">
                    <span class="shopping-cart-table-body__close" onclick="removeProductFromCart('${id}')"> x </span>
                  </td>
                  <td class="shopping-cart-table-body__column">
                    <a href="./productDetails.html?id=${id}">
                      <img
                        class="shopping-cart-table-body__img"
                        src="${img}"
                        alt="عکس محصول"
                      />
                    </a>
                  </td>
                  <td class="shopping-cart-table-body__column">
                    <a
                      href="./productDetails.html?id=${id}"
                      class="shopping-cart-table-body__link"
                    >
                      ${title}
                    </a>
                  </td>
                  <td class="shopping-cart-table-body__column">${price} تومان</td>
                  <td class="shopping-cart-table-body__column">
                    <span>
                      <span class="shopping-cart-table-body__increment">
                        +
                      </span>
                      <input
                        type="number"
                        name="shoppingCartCount"
                        id=""
                        min="0"
                        max="10"
                        value="1"
                        class="shopping-cart-table-body__input"
                      />
                      <span class="shopping-cart-table-body__decrement">
                        -
                      </span>
                    </span>
                  </td>
                  <td class="shopping-cart-table-body__column">
                    ${price} تومان
                  </td>
                </tr>`
    );
  });
};
renderCartProductsToDom(allShoppingCartProducts);

// remove from from shopping cart
const removeProductFromCart = (productId) => {
  allShoppingCartProducts = allShoppingCartProducts.filter(
    (product) => product.id !== +productId
  );
  console.log(allShoppingCartProducts);
  saveInProductInLocalStorage(allShoppingCartProducts);
  renderCartProductsToDom(allShoppingCartProducts);
  shoppingCartProductCountUpdate(allShoppingCartProducts.length);
};

//
window.removeProductFromCart = removeProductFromCart;
