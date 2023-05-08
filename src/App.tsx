import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./service/auth-context";

export const KeyContext = createContext({});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem("token")
  );

  return (
    <KeyContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <AuthProvider>
        <Outlet></Outlet>
      </AuthProvider>
    </KeyContext.Provider>
  );
}

export default App;
