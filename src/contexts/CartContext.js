import React from "react";

export const CartContext = React.createContext(null);

function CartContextProvider(props) {
  const [cartProducts, setCartProducts] = React.useState([]);

  const addToCart = (productToAdd) => {
    const productExistsInCart = cartProducts.find(
      (item) => item.id === productToAdd.id
    );

    if (!productExistsInCart) {
      setCartProducts([productToAdd, ...cartProducts]);
    } else {
      alert(`Product is already in your cart`);
    }
  };

  const removeFromCart = (productToRemove) => {
    const newProductList = cartProducts.filter(
      (item) => item.id !== productToRemove.id
    );
    setCartProducts(newProductList);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
