import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContextProvider.tsx";
import { MainRoutes } from "./routes.tsx";
import "./style/index.scss";
const mainRouter = <RouterProvider router={MainRoutes} />;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider childre={mainRouter} />
  </React.StrictMode>
);
