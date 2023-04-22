import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <NavBar></NavBar>
        <h1>React Router</h1>
        <Outlet></Outlet>
      </Layout>
    </div>
  );
}

export default App;
