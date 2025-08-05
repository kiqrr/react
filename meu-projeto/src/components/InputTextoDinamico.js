import React, { useState } from 'react';
import './InputTextoDinamico.css';

function InputTextoDinamico() {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div className="input-texto-container">
      <h3>Digite algo:</h3>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        placeholder="Digite aqui..."
        className="input-texto"
      />
      <p className="texto-exibido">
        {texto ? `Você digitou: ${texto}` : 'Nenhum texto digitado ainda'}
      </p>
    </div>
  );
}

export default InputTextoDinamico;
