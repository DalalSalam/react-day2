import React from "react";
import "../assets/css/starter.css";
import products from "../assets/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const displayBookStore = products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        bookstoreTitle={product.name}
        bookstoreImage={product.image}
        bookstorePrice={product.price}
      />
    );
  });

  return <div className="books-container">{displayBookStore}</div>;
};

export default ProductList;
