import React, { useContext, useState } from "react";
import InputMask from "react-input-mask";
import CadastroCliente from "../model/CadastroCliente";
import UserRecord from "../model/UserRecord";
import { AuthContext } from "../service/auth-context";
import "../styles/login.css";
import { useNavigate } from 'react-router-dom'

export default function CadastroPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nome, setNome] = useState("");
  const [documento, setDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

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
      documento,
      tipoDocumento: "CPF",
      celular,
      email,
      tipoPessoa: "FISICA",
      userRecord,
    };

    await signUp(cadastro);
  };

  function telalogin (e) {
    e.preventDefault()
    navigate('/login') 
 };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="card-login">
          <h1 className="mb-6">Já tem Conta?</h1>
          <div className = "msglogin" >Entre para poder apreciar tudo que temos de melhor no mundo da agricultura!!</div>
          <button className="btncad btn-dark" onClick={telalogin}>
              Entrar
          </button>

      </div>
      <div className="card-p-5">
        <div className="card-body">
          <h1 className="mb-4">Criar Conta</h1>
          <form onSubmit={aoSubmeterFormulario}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
              </label>
              <input
                type="text"  placeholder="Nome"
                className="form-control"
                id="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">
              </label>
              <InputMask
                mask="999.999.999-99"
                type="text" placeholder="CPF"
                className="form-control"
                id="cpf"
                value={documento}
                onChange={(event) => setDocumento(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="celular" className="form-label">
              </label>
              <InputMask
                mask="(99) 99999-9999"
                type="text" placeholder="Numero de Contato"
                className="form-control"
                id="celular"
                value={celular}
                onChange={(event) => setCelular(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
              </label>
              <input
                type="email" placeholder="Email"
                className="form-control"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="login" className="form-label">
              </label>
              <input
                type="text" placeholder="Login"
                className="form-control"
                id="login"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
              </label>
              <input
                type="password" placeholder="Senha"
                className="form-control"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
              </label>
              <input
                type="password" placeholder="Confirmar Senha"
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
