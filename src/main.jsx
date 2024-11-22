import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TestProvider } from "./context/TextContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TestProvider>
      <App />
    </TestProvider>
  </StrictMode>
);
