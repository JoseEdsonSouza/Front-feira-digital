import React, { useContext, useState } from "react";
import InputMask from "react-input-mask";
import CadastroCliente from "../model/CadastroCliente";
import UserRecord from "../model/UserRecord";
import { AuthContext } from "../service/auth-context";
import "./styles/login.css";
import { useNavigate } from "react-router-dom";

export default function CadastroPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nome, setNome] = useState("");

  const navigate = useNavigate();

  const { signUp } = useContext(AuthContext);

  const aoSubmeterFormulario = async (
    evento: React.FormEvent<HTMLFormElement>
  ) => {
    evento.preventDefault();

    if (password !== confirmPassword) {
      setConfirmPasswordError("As senhas não coincidem.");
      return;
    }

    const userRecord: UserRecord = {
      login,
      password,
    };

    const cadastro: CadastroCliente = {
      nome,
      documento: null,
      tipoDocumento: "CPF",
      celular: null,
      email: login,
      tipoPessoa: "FISICA",
      userRecord,
    };

    await signUp(cadastro);
  };

  function entrar(e: { preventDefault: () => void }) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <div className="container-login d-flex align-items-center justify-content-center">
      <div className="card-cadastro">
        <h1 className="mb-5 mb-5-login">Já tem conta?</h1>
        <div className="msgCadastrar">
          Entre para poder apreciar tudo que temos de melhor no mundo agrícola!
        </div>
        <button className="btncad btn-dark" onClick={entrar}>
          Entrar
        </button>
      </div>
      <div className="card-p-4-login">
        <div className="card-body">
          <h1>Criar conta</h1>
          <form onSubmit={aoSubmeterFormulario}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome:
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="login" className="form-label">
                Login:
              </label>
              <input
                type="text"
                className="form-control"
                id="login"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                required
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
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar senha:
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  setConfirmPasswordError("");
                }}
                required
              />
              {confirmPasswordError && (
                <div className="text-danger">{confirmPasswordError}</div>
              )}
            </div>
            <button className="btn btn-dark" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
