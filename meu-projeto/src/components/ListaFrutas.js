import React, { useState } from 'react';
import './ListaFrutas.css';

function ListaFrutas() {
  const [frutas, setFrutas] = useState(['Maçã', 'Banana', 'Uva']);

  const adicionarFruta = () => {
    setFrutas([...frutas, 'Morango']);
  };

  return (
    <div className="lista-frutas-container">
      <h3>Lista de Frutas</h3>
      <ul className="lista-frutas">
        {frutas.map((fruta, index) => (
          <li key={index} className="item-fruta">
            {fruta}
          </li>
        ))}
      </ul>
      <button onClick={adicionarFruta} className="botao-adicionar">
        Adicionar Fruta
      </button>
    </div>
  );
}

export default ListaFrutas;
