const allShoppingCartProducts = JSON.parse(
  localStorage.getItem("products" || "[]")
);
// select element to dom
const cartProducts = document.querySelector("#cartProducts");

const renderCartProductsToDom = () => {
  allShoppingCartProducts?.forEach((product) => {
    let { id, title, img, price } = product;
    cartProducts.insertAdjacentHTML(
      "beforeend",
      `<tr class="shopping-cart-table-body__heading">
                  <td class="shopping-cart-table-body__column">
                    <span class="shopping-cart-table-body__close"> x </span>
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
renderCartProductsToDom();
