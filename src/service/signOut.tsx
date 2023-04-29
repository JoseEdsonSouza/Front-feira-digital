import { useNavigate } from "react-router-dom";

export function signOut(navigate: ReturnType<typeof useNavigate>) {
  try {
    sessionStorage.removeItem("token");
    navigate("/");
  } catch (err) {
    console.log("erro ao deslogar:", err);
  }
}
