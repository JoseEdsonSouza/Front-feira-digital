import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";

export const KeyContext = createContext({});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('token'));

  return (
    <div className="App">
      <KeyContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </KeyContext.Provider>
    </div>
  );
}

export default App;
