import React from "react";
import ReactDOM from "react-dom/client";
import { initConfig } from "@joyid/evm/web2login";
import App from "./App";
import "./styles.css";
import '@unocss/reset/tailwind.css'
import 'uno.css'

initConfig({
  joyidAppURL: "https://joyid-app-git-fix-web2login-nervina.vercel.app",
  backgroundImage: `center center / cover no-repeat url("https://images.unsplash.com/photo-1601314167099-232775b3d6fd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
