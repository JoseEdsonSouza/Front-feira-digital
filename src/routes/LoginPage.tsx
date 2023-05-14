import React, { useContext, useState } from "react";
import LoginDto from "../model/loginDto";
import { AuthContext } from "../service/auth-context";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const aoSubmeterFormulario = async (
    evento: React.FormEvent<HTMLFormElement>
  ) => {
    evento.preventDefault();

    const objLogin: LoginDto = {
      login,
      password,
    };

    await signIn(objLogin);
  };

  function cadastro(e: { preventDefault: () => void }) {
    e.preventDefault();
    navigate("/cadastro");
  }

  return (
    <div className="container-login d-flex align-items-center justify-content-center">
      <div className="card-cadastro">
        <h1 className="mb-5 mb-5-login">Não tem cadastro?</h1>
        <div className="msgCadastrar">
          Estamos felizes em ter você no nosso App!
        </div>
        <button className="btncad btn-dark" onClick={cadastro}>
          Cadastrar
        </button>
      </div>
      <div className="card-p-4 card-p-4-login">
        <div className="card-body">
          <h1 className="mb-4">Entrar</h1>
          <form onSubmit={aoSubmeterFormulario}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label"></label>
              <input
                type="text"
                placeholder="Email"
                className="form-control personalizado"
                id="username"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"></label>
              <input
                type="password"
                placeholder="Senha"
                className="personalizado form-control"
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
