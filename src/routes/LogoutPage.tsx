import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { KeyContext } from "../App";
import { MyContextType } from "../model/MyContextType";
import { AuthContext } from "../service/auth-context";

const LogoutPage = () => {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(KeyContext) as MyContextType;

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(false);
      signOut(navigate);
    }, 1000);
  }, [navigate, setIsLoggedIn, signOut]);

  return (
    <div style={{ paddingTop: "60px" }}>
      <h1>Saindo...</h1>
    </div>
  );
};

export default LogoutPage;
