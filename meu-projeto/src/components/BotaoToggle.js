import React, { useState } from 'react';
import './BotaoToggle.css';

function BotaoToggle() {
  const [ligado, setLigado] = useState(false);

  const alternarEstado = () => {
    setLigado(!ligado);
  };

  return (
    <div className="botao-toggle-container">
      <button 
        className={`botao-toggle ${ligado ? 'ligado' : 'desligado'}`}
        onClick={alternarEstado}
      >
        {ligado ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default BotaoToggle;
