import { useContext } from 'react';
import { Link } from "react-router-dom";
import { KeyContext } from '../../App';
import { MyContextType } from '../../model/MyContextType';
import "./navbar.css"

const NavBar = () => {
  const {isLoggedIn} = useContext(KeyContext) as MyContextType;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid justify-content-end">
        <Link to="/" className="nav-link active mx-2" aria-current="page">Home</Link>
        <Link to="/cadastro" hidden={isLoggedIn} className="nav-link active mx-2" aria-current="page">Cadastro</Link>
        <Link to="/login" hidden={isLoggedIn} className="nav-link active mx-2" aria-current="page">Login</Link>
      </div>
    </nav>
  )
}

export default NavBar






