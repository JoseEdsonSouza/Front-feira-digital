import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { KeyContext } from "../../App";
import { MyContextType } from "../../model/MyContextType";
import logo from "../../assets/logo.png";
import iconLogin from "../../assets/Vector.png";
import Carrinho from "../carrinho/Carrinho";

type NavbarProps = {
  onSearch: (searchTerm: string) => void;
};

const NavBar = () => {
  const { isLoggedIn } = useContext(KeyContext) as MyContextType;
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(searchTerm); // Aqui você pode fazer o que quiser com o texto do input
  };

  // useEffect(() => {
  //   onSearch(searchTerm);
  // }, [searchTerm, onSearch]);

  return (
    <>
      <nav
        className="navbar fixed-top"
        style={{ backgroundColor: "rgba(0, 128, 0, 0.5)", zIndex: 100 }}
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

          <div className="nav-link active col-md-9">
            <div className="d-flex align-items-center">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="Buscar por nome"
                  onChange={handleChange}
                />
                <button className="btn btn-success" type="button"
                onClick={handleButtonClick}>
                  Button
                </button>
              </div>
            </div>
          </div>

          <div className="nav-link active col-md-2 text-light d-flex justify-content-end">
            <Link
              to="/cadastro"
              hidden={isLoggedIn}
              className="nav-link active mx-2 text-light"
              aria-current="page"
            >
              Cadastro
            </Link>
            <Carrinho></Carrinho>
            <Link
              to="/login"
              hidden={isLoggedIn}
              className="nav-link active mx-2 text-light"
              aria-current="page"
            >
              <img
                src={iconLogin}
                alt="Logo"
                height="25"
                width="25"
                className="mr-3"
              />
            </Link>
            <Link
              to="/logout"
              hidden={!isLoggedIn}
              className="nav-link active mx-2 text-light"
              aria-current="page"
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
