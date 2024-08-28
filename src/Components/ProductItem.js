import React from "react";
import "./ProductItem.css";
import products from "../assets/products";

const ProductItem = () => {
  return (
    <div>
      <div className="books-container">
        <h2>{products[0].title}</h2>
        <img className="book-image" src={bookstoreImage} alt="Book" />
        <p>{products[0].price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
