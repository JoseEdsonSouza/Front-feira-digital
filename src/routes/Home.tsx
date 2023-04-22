import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Pagina de Produtos</h1>
      <p>
        <Link to="/produto/1">Produto 1</Link>
      </p>
      <p>
        <Link to="/produto/2">Produto 2</Link>
      </p>
      <p>
        <Link to="/produto/3">Produto 3</Link>
      </p>
    </div>
  );
};

export default Home;
