import React from "react";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = React.useState([]);
  const [productSearchValue, setProductSearchValue] = React.useState("");

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const searchProductHandler = (event) => {
    setProductSearchValue(event.target.value);
  };

  // Show all products
  // show products which match productSearchValue
  return (
    <div>
      <h1>Product List</h1>
      <input onChange={searchProductHandler} />
      {products
        .filter((product) =>
          productSearchValue !== ""
            ? product.title
                .toLowerCase()
                .startsWith(productSearchValue.toLowerCase())
            : product
        )
        .map((item) => (
          <Product {...item} addToCartButtonDisplayed />
        ))}
    </div>
  );
}

export default ProductList;
