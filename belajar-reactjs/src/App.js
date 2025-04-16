import React, { useState } from "react";
import Product from "./components/Product/Product";
import Button from "./components/Button/Button";
import "./styles/style.css"; // Import global CSS
// latihan react
import Ucapan from "./components/Product/Welcome";
import Product_Food from "./components/Product/Product_Food";
import Nilai from "./components/Button/Nilai";



function App() {
  return (
    // // <div className="container">
    // //   <h1>Welcome to School Website</h1>
    // //   <Product name="Iphone X" price="10000000" discount="50" />
    // //   <Product name="Oppo Find X" price="14000000" discount="30" />
    // //   <Product name="Redmi Note X" price="12000000" discount="42" />
    // //   <Button text="Click Me" onClick={() => alert("Button Clicked")} />
    // // </div>
<div>
    <Ucapan jenenge='STIKOM PGRI' />
    <hr></hr>
    
    <Product_Food
      nama="Kelpon"
      harga="Rp. 2000"
      diskripsi="Kelpon merupakan jajanan khas Banyuwangi yang bentuknya bulat-bulat yang dibuat dari tepung ketan dan di dalamnya ada gula merahnya"
    />
    
    <Product_Food
      nama="Uceng-Uceng"
      harga="Rp. 1.500"
      diskripsi="Uceng-uceng merupakan jajanan khas Banyuwangi yang bentuknya panjang yang dibuat dari tepung beras dan dilumuri gula pasir"
    />
    <hr></hr>

    <Nilai/>
</div>
    

    // Belajar useState
    
  );
}

export default App;