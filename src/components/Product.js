import React from "react";
import { CartContext } from "../contexts/CartContext";

function Product({
  addToCartButtonDisplayed,
  removeFromCartButtonDisplayed,
  ...props
}) {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} height="100" width="100" />
      <p>{props.price}</p>
      <p>{props.category}</p>
      <p>{props.description}</p>
      {addToCartButtonDisplayed && (
        <button onClick={() => addToCart(props)}>ADD TO CART</button>
      )}
      {removeFromCartButtonDisplayed && (
        <button onClick={() => removeFromCart(props)}>ReMOVE FROM CART</button>
      )}
    </div>
  );
}

export default Product;
