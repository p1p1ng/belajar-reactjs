import React, { useState } from "react";

function Nilai() {
  const [nilai, setNilai] = useState(0);

  const tambahNilai = () => {
    setNilai(prevNilai => prevNilai + 1);
  };

  return (
    <div>
      <p>Nilai: {nilai}</p>
      <button onClick={tambahNilai}>Tambah</button>
    </div>
  );
}

export default Nilai;