import axios from "axios";
import Busca from "../model/Busca";
import Produto from "../model/Produto";

const ListarProdutos = (props: Busca) => {
  const token = sessionStorage.getItem('token');

  const api = axios.create({
    baseURL: 'http://localhost:8081',
  });
  
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
