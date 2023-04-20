import React from "react";
import axios from "axios";
import { useState } from "react";
import Login from "../../model/Login";

export default function LoginComponent() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const objLogin: Login = {
      login,
      password,
    };

    axios
      .post("http://localhost:8081/auth/login", objLogin)
      .then((resposta) => {
        sessionStorage.setItem("token", resposta.data.token);

        console.log(resposta.data.token)
      })
      .catch((erro) => {
        console.log(erro)
      });
  };

  return (
    <div>
        <form onSubmit={aoSubmeterFormulario}>
      <div>
        <label htmlFor="username">Nome de usuário:</label>
        <input
          type="text"
          id="username"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
    </div>
  )
}
