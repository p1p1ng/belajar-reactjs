import React from "react";
import productStyles from "./stylesheets";

function Ucapan(props){
  return (
    <h1 style={productStyles.teks}>Hello, {props.jenenge}</h1>
  );
}

export default Ucapan;