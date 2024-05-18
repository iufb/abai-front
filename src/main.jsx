import React from "react";
import ReactDOM from "react-dom/client";
import "../src/utils/i18net.js";
import App from "./App.jsx";
import "./index.css";
import "./reset.css";
import { LangProvider } from "./utils";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
);
