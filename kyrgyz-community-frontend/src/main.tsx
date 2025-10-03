import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css";
import "./i18n";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import RouteProgress from "./utils/RouteProgress.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <RouteProgress />
      <App />
    </BrowserRouter>
  </StrictMode>
);
