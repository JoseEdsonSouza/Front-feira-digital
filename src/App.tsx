import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";

export const KeyContext = createContext({});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <KeyContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <NavBar></NavBar>
        <h1>React Router</h1>
        <Outlet></Outlet>
      </KeyContext.Provider>
    </div>
  );
}

export default App;
