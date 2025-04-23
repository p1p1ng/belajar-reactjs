import React, { useState } from "react";
import Product from "./components/Product/Product";
import Button from "./components/Button/Button";
import "./styles/style.css"; // Import global CSS
// latihan react
import Ucapan from "./components/Product/Welcome";
import Product_Food from "./components/Product/Product_Food";
import Nilai from "./components/Button/Nilai";
import MyButton from "./components/Button/Button";
import MyButton1 from "./components/Button/Button1";
import MyButton_DOM from "./components/Button/Button_DOM";
import MyContact from "./components/Button/Contact";



function App() {
  return (

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
    <hr></hr>
    <MyButton />
    <hr></hr>
    <MyButton1 />
    <hr></hr>
    <MyButton_DOM />
    <hr></hr>
    <MyContact />
</div>
    

    // Belajar useState
    
  );
}

export default App;