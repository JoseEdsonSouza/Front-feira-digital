import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Produto from "../../model/Produto";
import ListarProdutoUnico from "./ListarProdutoUnico";

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
    <div>
      <h1>{produto?.nome}</h1>
      <h3>R$ {produto?.preco}</h3>
      <p>Produto de codigo: {produto?.codigo}</p>
      <button onClick={handleProduto}>Comprar </button>
    </div>
  );
};

export default ProdutoSelecionado;
