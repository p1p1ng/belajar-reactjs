import React from "react";
// import "./styles/style.css"; // Import global CSS

function Product_Food(props){
  return (
    <div>
      <h2>Nama Produk : {props.nama}</h2>
      <p>Harga : {props.harga}</p>
      <p>Diskripsi : {props.diskripsi}</p>
    </div>
  );
}

export default Product_Food;