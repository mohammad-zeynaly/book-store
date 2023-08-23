import {
  shoppingCartProductCountUpdate,
  toastTemplate,
  saveInProductInLocalStorage,
} from "./general.js";

let allShoppingCartProducts = JSON.parse(
  localStorage.getItem("products" || "[]")
);

const shoppingCartTotalPrice = document.querySelector(
  ".shopping-cart-total-price__price"
);
// select element to dom
const cartProducts = document.querySelector("#cartProducts");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const emptyShoppingCart = document.querySelector("#emptyShoppingCart  ");
let productCount = 1;

const renderCartProductsToDom = (shoppingCartProducts) => {
  cartProducts.innerHTML = "";
  shoppingCartProducts?.forEach((product) => {
    let { id, title, img, price, count } = product;
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
                        src=".${img}"
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
                      <span class="shopping-cart-table-body__increment" onclick="incrementProductCount('${id}')" >
                        +
                      </span>
                      <input
                        type="number"
                        name="shoppingCartCount"
                        id=""
                        min="0"
                        max="10"
                        value="${count}"
                        class="shopping-cart-table-body__input"
                      />
                      <span class="shopping-cart-table-body__decrement" onclick="decrementProductCount('${id}')">
                        -
                      </span>
                    </span>
                  </td>
                  <td class="shopping-cart-table-body__column">
                    ${price * count} تومان
                  </td>
                </tr>`
    );
  });
};

const checkInShoppingCart = () => {
  if (allShoppingCartProducts?.length > 0) {
    renderCartProductsToDom(allShoppingCartProducts);
    totalPrice(allShoppingCartProducts);
    shoppingCartContainer.classList.remove("hidden");
    emptyShoppingCart.classList.add("hidden");
  } else {
    shoppingCartContainer.classList.add("hidden");
    emptyShoppingCart.classList.remove("hidden");
  }
};
checkInShoppingCart();
// remove from from shopping cart
const removeProductFromCart = (productId) => {
  allShoppingCartProducts = allShoppingCartProducts.filter(
    (product) => product.id !== +productId
  );
  saveInProductInLocalStorage(allShoppingCartProducts);
  renderCartProductsToDom(allShoppingCartProducts);
  shoppingCartProductCountUpdate(allShoppingCartProducts.length);
  totalPrice(allShoppingCartProducts);
  toastTemplate.fire({
    icon: "error",
    title: "محصول با موفقیت از سبد خرید حذف شد ",
  });
  checkInShoppingCart();
};

// calculate all product total price
function totalPrice(productsArray) {
  let totalPriceValue = 0;
  productsArray.forEach(
    (product) => (totalPriceValue += product.count * product.price)
  );

  shoppingCartTotalPrice.textContent = totalPriceValue + " هزار تومان ";
}

// increment product count
const incrementProductCount = (productId) => {
  const mainProduct = allShoppingCartProducts.find(
    (product) => product.id === +productId
  );
  productCount = mainProduct.count;
  if (productCount < 10) {
    productCount++;
  }

  mainProduct.count = productCount;
  saveInProductInLocalStorage(allShoppingCartProducts);
  totalPrice(allShoppingCartProducts);
  renderCartProductsToDom(allShoppingCartProducts);
};

//decrement product count
const decrementProductCount = (productId) => {
  const mainProduct = allShoppingCartProducts.find(
    (product) => product.id === +productId
  );

  productCount = mainProduct.count;

  if (productCount > 0) {
    productCount--;
  }

  mainProduct.count = productCount;
  saveInProductInLocalStorage(allShoppingCartProducts);
  renderCartProductsToDom(allShoppingCartProducts);
  totalPrice(allShoppingCartProducts);
};

//
window.removeProductFromCart = removeProductFromCart;
window.incrementProductCount = incrementProductCount;
window.decrementProductCount = decrementProductCount;
