import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginInterface from "../model/LoginInterface";
import "../styles/login.css";
import { MyContextType } from "../model/MyContextType";
import { KeyContext } from "../App";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useContext(KeyContext) as MyContextType;

  const navigate = useNavigate();

  const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const objLogin: LoginInterface = {
      login,
      password,
    };

    axios
      .post("http://localhost:8081/auth/login", objLogin)
      .then((resposta) => {
        sessionStorage.setItem("token", resposta.data.token);

        setIsLoggedIn(true);

        return navigate("/");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="card p-4 bg-secondary bg-opacity-10" >
        <div className="card-body">
          <h1 className="mb-4">Login</h1>
          <form onSubmit={aoSubmeterFormulario}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Nome de usuário:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button className="btn btn-dark" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
