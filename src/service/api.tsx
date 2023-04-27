import axios, { AxiosError } from "axios";
import { AuthTokenError } from "../errors/auth-token-error";
import { signOut } from "./auth-context";
import { useNavigate } from "react-router-dom";

export function setupApiClient(navigate: ReturnType<typeof useNavigate>) {
  const token = sessionStorage.getItem("token")
  const id = sessionStorage.getItem("id")

  const api = axios.create({
    baseURL: "http://localhost:8082/",
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError) => {
        console.log("teste")
      if (error.response?.status === 401) {
        // usuario deve ser deslogado

        if (window !== undefined) {
          signOut(navigate);
        } else {
          return await Promise.reject(new AuthTokenError());
        }
      }
      return await Promise.reject(error);
    }
  );

  return api;
}