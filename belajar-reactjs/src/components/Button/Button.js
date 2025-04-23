import React from "react";
import styles from "./Button.module.css";

function Button() {
  const TombolClick = () => {
    alert("Tombol telah diklik");
  };
  return (
    <div>
      <button className={styles.button} onClick={TombolClick}>
        Tombol Aktif
      </button>
    </div>
  );
}

export default Button;