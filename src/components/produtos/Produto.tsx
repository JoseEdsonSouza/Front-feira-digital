import { useLocation, useNavigate, useParams } from "react-router-dom";
import Produto from "../../model/Produto";

const Produtos = () => {
  const location = useLocation();
  const produto = location.state.produto as Produto;

  const { codigo } = useParams();
  const navigate = useNavigate();

  const handleProduto = () => {
    console.log("Pronto");
    return navigate("/");
  };

  return (
    <div>
      <h1>{produto.nome}</h1>
      <h3>R$ {produto.preco}</h3>
      <p>Produto de codigo: {produto.codigo}</p>
      <button onClick={handleProduto}>Comprar </button>
    </div>
  );
};

export default Produtos;
