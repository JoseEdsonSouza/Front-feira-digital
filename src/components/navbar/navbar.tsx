import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(token !== null);
  }, []);

  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/cadastro" hidden={isLoggedIn}>Cadastro</Link>
        <Link to="/login" hidden={isLoggedIn}>Login</Link>
    </nav>
  )
}

export default NavBar
