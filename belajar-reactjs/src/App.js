import React from "react";
import Product from "./components/Product/Product";
import Button from "./components/Button/Button";
import "./styles/style.css"; // Import global CSS

function App() {
  return (
    <div className="container">
      <h1>Welcome to School Website</h1>
      <Product name="Iphone X" price="10000000" discount="50" />
      <Product name="Oppo Find X" price="14000000" discount="30" />
      <Product name="Redmi Note X" price="12000000" discount="42" />
      <Button text="Click Me" onClick={() => alert("Button Clicked")} />
    </div>
  );
}

export default App;