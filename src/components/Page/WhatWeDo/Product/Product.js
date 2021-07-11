import React from "react";
import "./Product.scss";

const Product = ({ product }) => {
  const { title, description, image } = product;
  return (
    <div className="product">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Product;
