
import React from 'react';
import CartaoPerfil from './components/CartaoPerfil';
import BotaoCurtir from './components/BotaoCurtir';
import BotaoToggle from './components/BotaoToggle';
import InputTextoDinamico from './components/InputTextoDinamico';
import ListaFrutas from './components/ListaFrutas';

function App() {
  return (
    <div className="App">
      {/* Componentes sem props obrigatórias */}
      <CartaoPerfil nome="Nome" descricao="Descricao" imagem={[
        'https://via.placeholder.com/150'
      ]} />
      <BotaoCurtir/>
      <BotaoToggle />
      <InputTextoDinamico />
      <ListaFrutas />
    </div>
  );
}

export default App;

