import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import routes from "~react-pages";
import "./styles/global.css";

import NotFoundPage from "./pages/404.js";

function App() {
  const page = useRoutes([
    ...routes,
    { path: "*", element: <NotFoundPage /> },
  ]);

  return page;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
