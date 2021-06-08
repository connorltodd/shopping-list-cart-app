import React from "react";
import { CartContext } from "../contexts/CartContext";
import Product from "./Product";

function CartList() {
  const { cartProducts } = React.useContext(CartContext);
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartProducts.map((product) => (
        <Product {...product} removeFromCartButtonDisplayed />
      ))}
    </div>
  );
}

export default CartList;
