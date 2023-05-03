import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Produto from "../../model/Produto";
import ListarProdutoUnico from "./ListarProdutoUnico";
import "./produto.css";

const ProdutoSelecionado = () => {
  const location = useLocation();
  const produtoBusca = location.state.produto as Produto;
  const [produto, setProduto] = useState<Produto | null>();
  const navigate = useNavigate();

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
    <div className="bg-secondary bg-opacity-10">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card col-md-10">
          <div className="card-body row">
            <div className="col-md-7">
              <img
                className="card-img-top"
                src={produto?.imagem ?? undefined}
                alt={produto?.nome ?? ""}
              />
            </div>
            <div className="col-md-5 ">
              <div className="container d-flex justify-content-around">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>{produto?.nome}</h2>
                  </div>
                  <div className="col-12">
                    <h4 className="card-text">
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
                  </div>
                  <div className="col-12">
                    <button onClick={handleProduto}>Comprar </button>
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
