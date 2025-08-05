
import React, { useState } from 'react';
import './BotaoCurtir.css';

function BotaoCurtir() {
  const [curtidas, setCurtidas] = useState(0);

  const handleCurtir = () => {
    setCurtidas(curtidas + 1);
  };

  return (
    <div className="botao-curtir-container">
      <button 
        className="botao-curtir"
        onClick={handleCurtir}
      >
        <span className="icone-curtir">❤️</span>
        <span className="contador">{curtidas}</span>
      </button>
    </div>
  );
}

export default BotaoCurtir;

