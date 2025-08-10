import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";          // tailwind (base/components/utilities)
import "./styles/theme.css";   // optional tiny overrides

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
