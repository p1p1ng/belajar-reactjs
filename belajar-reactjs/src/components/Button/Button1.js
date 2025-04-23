import React from "react";
import styles from "./Button.module.css";

function Button1() {
  const TombolClick = (nama) => {
    alert("Selamat Datang di " + nama);
  };
  return (
    <div>
      <button className={styles.button} onClick={() => TombolClick("STIKOM PGRI")}>
        Tombol Aktif
      </button>
    </div>
  );
}

export default Button1;