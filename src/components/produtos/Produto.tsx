import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Produto from "../../model/Produto";
import ListarProdutoUnico from "./ListarProdutoUnico";
import "./produto.css";
import { auto } from "@popperjs/core";

const ProdutoSelecionado = () => {
  const location = useLocation();
  const produtoBusca = location.state.produto as Produto;
  const [produto, setProduto] = useState<Produto | null>();
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    (async () => setProduto(await buscarProduto(produtoBusca, navigate)))();
  }, [produtoBusca, navigate]);

  const buscarProduto = async (
    prod: Produto,
    navigate: ReturnType<typeof useNavigate>
  ) => {
    return await ListarProdutoUnico(prod.codigo, navigate);
  };

  const handleProduto = () => {
    console.log("Pronto");
    return navigate("/");
  };

  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center overflow-hidden">
        <div
          className="bg-secondary bg-opacity-10"
          style={{ maxWidth: "700px", maxHeight: "700px", padding: "20px" }}
        >
          <div className="card-body row">
            <div className="col-md-7 centralizar">
              <img
                className="w-100 m-2"
                src={produto?.imagem ?? undefined}
                alt={produto?.nome ?? ""}
              />
            </div>
            <div className="col-md-5">
              <div className="container d-flex justify-content-around">
                <div className="row">
                  <div className="col-12 text-center centralizar">
                    <h2>{produto?.nome}</h2>
                  </div>
                  <div className="col-12 centralizar-junto texto">
                    <h4 className="card-text maximizar-width">
                      {produto?.tipoEstoque !== "PESO"
                        ? `R$ ${produto?.preco
                            ?.toFixed(2)
                            .replace(".", ",")}/Kg`
                        : `R$ ${produto?.preco?.toFixed(2).replace(".", ",")}`}
                    </h4>
                    <p className="card-text">
                      {produto?.tipoEstoque !== "PESO"
                        ? `${produto?.descricao} (Peso médio unidade: ${produto?.pesoMedio}Kg)`.replace(
                            ".",
                            ","
                          )
                        : `${produto.descricao} ${produto.descQuantidade}Kg`.replace(
                            ".",
                            ","
                          )}
                    </p>
                    <div className="margin-span">
                      <button onClick={decrement} className="btn btn-primary">
                        -
                      </button>

                      <span className="margin-span">{count}</span>

                      <button onClick={increment} className="btn btn-primary">
                        +
                      </button>
                    </div>
                    <div className="separar">
                      <button
                        onClick={handleProduto}
                        className="btn btn-primary btn-lg"
                      >
                        Comprar{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoSelecionado;
