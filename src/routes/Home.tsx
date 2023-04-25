import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Produto from "../model/Produto";
import ListarProdutos from "../service/ListaProdutos";
import Busca from "../model/Busca";

const Home = () => {
  const [nome, setNome] = useState("");
  const[listaProdutos, setListaProdutos] = useState<Produto[]>([]);

  const busca: Busca = {
    precoMin: null,
    precoMax: null,
    categoria: null,
    vendedor: null,
    nome: nome.length !== 0 ? nome : null,
  };

  useEffect(() => {
    (async () => setListaProdutos(await ListarProdutos(busca)))();
  }, [nome]);
  

  return (
    <div>
      <h1>Pagina de Produtos</h1>
      <input
        type="text"
        className="form-control"
        id="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      {listaProdutos.map((produto) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>Preço: R${produto.preco?.toFixed(2)}</p>
          <Link to="/produto/´${produto.codigo}´">{produto.nome}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

