import React, { useState } from "react";

// Componente em classe
export function Counter() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ marginTop: "20px", marginLeft: "100px" }}>
      <h1>{contador}</h1>
      <div>
        <button
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}
// }
