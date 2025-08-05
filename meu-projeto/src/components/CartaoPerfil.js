
import React from "react";
import "./CartaoPerfil.css";

function CartaoPerfil({ titulo, descricao, imagem }) {
  return (
    <div className="cartao-perfil">
        <img src="https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" alt="Perfil" />
        <h3>{titulo}</h3>
        <p>{descricao}</p>
    </div>
  );
}

export default CartaoPerfil;

