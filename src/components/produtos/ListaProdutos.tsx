import { useNavigate } from "react-router-dom";
import Busca from "../../model/Busca";
import Produto from "../../model/Produto";
import { setupApiClient } from "../../service/api";

const ListarProdutos = (props: Busca, navigate: ReturnType<typeof useNavigate>) => {
  const token = sessionStorage.getItem('token');

  const api = setupApiClient(navigate);
  
  api.interceptors.request.use(config => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api
    .post<Produto[]>("/produto/listar", props)
    .then((resposta) => {
      return resposta.data;
    })
    .catch((erro) => {
      console.log(erro);
      return [];
    });
};

export default ListarProdutos;
