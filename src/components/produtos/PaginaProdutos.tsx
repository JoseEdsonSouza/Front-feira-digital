import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";
import NavBar from "../navbar/navbar";
import Produto from "../../model/Produto";

const Home = ( listaProdutos: Produto[] ) => {
  const [filtro, setFiltro] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="container">
      <NavBar></NavBar>
      <h1 className="text-center my-5" style={{ paddingTop: "80px" }}>
        Os melhores produtos da feira na sua casa
      </h1>
      <div className="row produtos-container">
        <div className="col-md-8">
          <div className="d-flex align-items-center"></div>
        </div>
        <div className="col-md-2 ms-auto">
          <select
            className="form-control form-select-sm"
            id="filtro"
            value={filtro ?? ""}
            onChange={(event) => setFiltro(event.target.value || null)}
          >
            <option value="">Ordenar por:</option>
            <option value="MENOR_PRECO">Menor preço</option>
            <option value="MAIOR_PRECO">Maior preço</option>
          </select>
        </div>
      </div>
      <div className="row">
        {listaProdutos.map((produto) => (
          <div className="col-md-2 mb-4" key={produto.id}>
            <div
              className="card align-items-center maximizar-width card-img-top"
              style={{ maxHeight: "500px" }}
            >
              <Link to={`/produto/${produto.codigo}`} state={{ produto }}>
                <img
                  className="card-img-top"
                  src={produto.imagem ?? undefined}
                  alt={produto.nome ?? ""}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{produto.nome}</p>
                <h4 className="card-text">
                  {produto.tipoEstoque !== "PESO"
                    ? `R$ ${produto.preco?.toFixed(2).replace(".", ",")}/Kg`
                    : `R$ ${produto.preco?.toFixed(2).replace(".", ",")}`}
                </h4>
                <p className="card-text">
                  {produto.tipoEstoque !== "PESO"
                    ? `${produto.descricao} (Peso médio unidade: ${produto.pesoMedio}Kg)`.replace(
                        ".",
                        ","
                      )
                    : `${produto.descricao} ${produto.descQuantidade}Kg`.replace(
                        ".",
                        ","
                      )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
