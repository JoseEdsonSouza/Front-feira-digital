import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { KeyContext } from '../../App';
import { MyContextType } from '../../model/MyContextType';

const NavBar = () => {
  const {isLoggedIn} = useContext(KeyContext) as MyContextType;

  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/cadastro" hidden={isLoggedIn}>Cadastro</Link>
        <Link to="/login" hidden={isLoggedIn}>Login</Link>
    </nav>
  )
}

export default NavBar
