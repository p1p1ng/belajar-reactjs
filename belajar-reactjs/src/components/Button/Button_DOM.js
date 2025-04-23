import React from "react";
import styles from "./Button.module.css";

function Button_DOM() {
  const ubahWarna = () => {
    const elemen = document.getElementById("Conten");
    elemen.style.color = "red";
  };
  return (
    <div>
      <h1 id="Conten">Selamat Datang di STIKOM PGRI</h1>
      <button className={styles.button} onClick={ubahWarna}>Ubah Warna Teks</button>
    </div>
  );
}

export default Button_DOM;