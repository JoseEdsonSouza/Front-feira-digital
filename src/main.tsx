import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./routes/LoginPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import App from "./App.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Produtos from "./components/produtos/Produto.tsx";
import LogoutPage from "./routes/LogoutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "produto/:codigo",
        element: <Produtos></Produtos>
      },
      {
        path: "/logout",
        element: <LogoutPage></LogoutPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
