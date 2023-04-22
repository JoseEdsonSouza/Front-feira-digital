import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Produtos = () => {
  const { codigo } = useParams();
  const navigate = useNavigate();

  const handleProduto = () => {
    console.log("Pronto");
    return navigate("/");
  };

  return (
    <div>
      <h1>Informações</h1>
      <p>Produto de codigo: {codigo}</p>
      <button onClick={handleProduto}>Comprar </button>
    </div>
  );
};

export default Produtos;
