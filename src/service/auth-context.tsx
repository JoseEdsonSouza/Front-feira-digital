import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CreateUserDto } from "../model/createUserDto";
import LoginDto from "../model/loginDto";
import LoginRetornoDto from "../model/loginRetornoDto";
import { setupApiClient } from "./api";
import { KeyContext } from "../App";
import { MyContextType } from "../model/MyContextType";

interface AuthContextData {
  user: UserProps | undefined;
  isAuthenticated: boolean;
  signIn: (credentials: LoginDto) => Promise<void>;
  signUp: (credentials: CreateUserDto) => Promise<void>;
  signOut: (navigate: ReturnType<typeof useNavigate>) => void;
}

interface UserProps {
  id: number;
  token: string;
  email: string;
  firstName: string | undefined;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);


export function signOut(navigate: ReturnType<typeof useNavigate>) {
  try {
    sessionStorage.removeItem("token");
    navigate("/login");
  } catch (err) {
    console.log("erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !(user == null);
  const navigate = useNavigate();
  const api = setupApiClient(navigate);
  const { setIsLoggedIn } = useContext(KeyContext) as MyContextType;

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      api
        .get("/infos")
        .then((response: any) => {
          const { id, firstName, email } = response.data;
          setUser({
            id,
            firstName,
            email: email,
            token,
          });
        })
        .catch(() => {
          setUser(undefined);
          signOut(navigate);
        });
    }
  }, []);

  const signIn = async ({ login, password }: LoginDto) => {
    try {
      const api = setupApiClient(navigate);

      const response = await api.post("/auth/login", {
        login: login,
        password,
      });

      const retorno: LoginRetornoDto = response.data;

      sessionStorage.setItem("token", retorno.token);
      sessionStorage.setItem("id", retorno.id.toString());

      setUser({
        id: retorno.id,
        token: retorno.token,
        email: retorno.login,
        firstName: undefined,
      });

      // passar para as proximas requisições o token
      api.defaults.headers.Authorization = `Bearer ${retorno.token}`;
      api.defaults.headers.common["id"] = retorno.id.toString();

      toast.success("Login efetuado com sucesso!");

      setIsLoggedIn(true);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  async function signUp(createUserDto: CreateUserDto) {
    try {
      const { firstName, lastName, email, password } = createUserDto;

      const api = setupApiClient(navigate);

      const response = await api.post("/cadastrar-user", {
        firstName,
        lastName,
        email,
        password,
      });

      toast.success("Conta criada com sucesso");
      navigate("/login");
    } catch (err) {
      toast.error("Algo deu errado, tente novamente mais tarde.");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
