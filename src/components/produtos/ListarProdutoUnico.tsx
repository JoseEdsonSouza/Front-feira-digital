import { useNavigate } from "react-router-dom";
import Produto from "../../model/Produto";
import { setupApiClient } from "../../service/api";
import Busca from "../../model/Busca";

const ListarProdutoUnico = (
  codigo: string | null,
  navigate: ReturnType<typeof useNavigate>
) => {
  const token = sessionStorage.getItem("token");

  const api = setupApiClient(navigate);

  const produto: Busca = {
    pagina: null,
    tipoPreco: null,
    precoMin: null,
    precoMax: null,
    categoria: null,
    vendedor: null,
    nome: null,
    codigo: codigo
  };

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api
    .post("/produto/selecionar", produto)
    .then((resposta) => {
      return resposta.data as Produto;
    })
    .catch((erro) => {
      console.log(erro);
      return null;
    });
};

export default ListarProdutoUnico;
