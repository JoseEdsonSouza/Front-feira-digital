import React, { useContext, useState } from "react";
import Usuario from "../model/Usuario";
import { AuthContext } from "../service/auth-context";
import "../styles/login.css";
import LoginDto from "../model/loginDto";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

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

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="card p-4 bg-secondary bg-opacity-10">
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
