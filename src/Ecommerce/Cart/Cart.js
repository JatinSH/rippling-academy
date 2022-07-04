import { useContext, useState } from "react";
import ThemeContext from "../ThemeContext";
import "../Ecommerce.css";
import CartProduct from "./CartProduct";
function Cart() {
  const productsInCart = JSON.parse(localStorage.getItem("cart"));
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [cartProducts, setCartProducts] = useState(productsInCart);
  // console.log(cartProducts);

  return (
    <div className={theme}>
      <div className="cart-container">
        {cartProducts.map((cartProduct) => {
          return (
            <CartProduct
              key={cartProduct.sku}
              product={cartProduct}
            ></CartProduct>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
