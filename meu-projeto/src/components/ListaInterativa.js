
import React from "react";
import "./ListaInterativa.css";

function ListaInterativa({ itens = [], aoClicar }) {
  if (!Array.isArray(itens) || itens.length === 0) {
    return <p className="lista-vazia">Nenhum item disponível</p>;
  }

  return (
    <ul className="lista-interativa">
      {itens.map((item, idx) => (
        <li key={idx} onClick={() => aoClicar && aoClicar(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListaInterativa;

