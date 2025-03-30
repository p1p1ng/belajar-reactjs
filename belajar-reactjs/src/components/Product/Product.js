import React from "react";
import productStyles from "./stylesheets";

const Product = ({ name, price, discount = 0 }) => {
  const discountedPrice = parseInt(price) - parseInt(price) * (parseInt(discount) / 100);

  return (
    <div style={productStyles.container}>
      <h2 style={productStyles.title}>{name}</h2>
      <p style={productStyles.price}>
        <s>Rp {price}</s> ({discount}%)
      </p>
      <p style={productStyles.discountedPrice}>Rp {discountedPrice}</p>
      <hr style={productStyles.separator} />
    </div>
  );
};

export default Product;