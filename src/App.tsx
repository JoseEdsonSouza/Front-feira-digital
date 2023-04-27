import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import { AuthProvider } from "./service/auth-context";

export const KeyContext = createContext({});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem("token")
  );

  return (
    <div className="App">
      <KeyContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <AuthProvider>
          <NavBar></NavBar>
          <Outlet></Outlet>
        </AuthProvider>
      </KeyContext.Provider>
    </div>
  );
}

export default App;
