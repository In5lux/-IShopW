const cart = () => {
  const cartBtn = document.querySelector("#cart");
  const cart = document.querySelector(".cart");
  const cartCloseBtn = document.querySelector(".cart-close");

  cartBtn.addEventListener("click", () => {
    cart.style.display = "flex";
  });

  cartCloseBtn.addEventListener("click", () => {
    cart.style.display = "";
  });
};

export default cart
