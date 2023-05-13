import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KeyContext } from "../../App";
import { MyContextType } from "../../model/MyContextType";
import logo from "../../assets/logo.png";
import Carrinho from "../carrinho/Carrinho";
import ListarProdutos from "../produtos/ListaProdutos";
import Produto from "../../model/Produto";
import PaginaBusca from "../../routes/PaginaBusca";
import Busca from "../../model/Busca";

type NavbarProps = {
  onSearch: (searchTerm: string) => void;
};

const NavBar = () => {
  const { isLoggedIn } = useContext(KeyContext) as MyContextType;
  const [searchTerm, setSearchTerm] = useState("");
  const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<string | null>(null);
  const navigate = useNavigate();

  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    sessionStorage.setItem('busca', searchTerm);
    navigate('/busca');
  };

  return (
    <>
      <nav
        className="navbar fixed-top"
        style={{ backgroundColor: "rgba(167, 255, 167)", zIndex: 100 }}
      >
        <div className="container-fluid">
          <div className="nav-link active col-md-1 text-light">
            <Link
              to="/"
              className="nav-link active mx-2 text-light"
              aria-current="page"
            >
              <img
                src={logo}
                alt="Logo"
                height="100"
                width="100"
                className="mr-3"
              />
            </Link>
          </div>

          <div className="nav-link active col-md-8">
            <div className="d-flex align-items-center">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="Buscar por nome"
                  onChange={handleChange}
                />
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={handleButtonClick}
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>

          <div className="nav-link active col-md-3 text-light d-flex justify-content-around">
            <Carrinho></Carrinho>
            <Link
              to="/cadastro"
              hidden={isLoggedIn}
              className="btn btn-success"
              aria-current="page"
              type="button"
            >
              Cadastro
            </Link>
            <Link
              to="/login"
              hidden={isLoggedIn}
              className="btn btn-success"
              aria-current="page"
              type="button"
            >
              Entrar
            </Link>
            <Link
              to="/logout"
              hidden={!isLoggedIn}
              className="btn btn-success"
              aria-current="page"
              type="button"
            >
              Sair
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
