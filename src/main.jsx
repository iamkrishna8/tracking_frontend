import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: { borderRadius: "8px", background: "#333", color: "#fff" },
      }}
    />
  </BrowserRouter>
);
