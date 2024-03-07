import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import MainProvider from "./components/Context/MainProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <MainProvider>
        <App />
      </MainProvider>
    </HashRouter>
  </React.StrictMode>
);
