import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Busca from "../model/Busca";
import Produto from "../model/Produto";
import ListarProdutos from "../components/produtos/ListaProdutos";

const Home = () => {
  const [nome, setNome] = useState("");
  const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);
  const navigate = useNavigate();

  const busca: Busca = {
    pagina: 1,
    tipoPreco: "MENOR_PRECO",
    precoMin: null,
    precoMax: null,
    categoria: null,
    vendedor: null,
    nome: nome.length !== 0 ? nome : null,
  };

  const handleSubmit = async (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.preventDefault();

    setListaProdutos(await ListarProdutos(busca, navigate));
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-5">Produtos</h1>
      <div className="row">
        <div className="col-md-4 offset-md-8 mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Buscar por nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {listaProdutos.map((produto) => (
          <div className="col-md-4 mb-3" key={produto.id}>
            <div className="card h-100">
              <img
                className="card-img-top"
                src={produto.imagem !== null ? produto.imagem : undefined}
                alt={produto.nome !== null ? produto.nome : undefined}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/produto/${produto.codigo}`} state={{ produto }}>
                    {produto.nome}
                  </Link>
                </h5>
                <p className="card-text">
                  Preço: R${produto.preco?.toFixed(2)}
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
