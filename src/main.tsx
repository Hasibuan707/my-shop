import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { CartProvider } from "./components/CartContext.tsx";


createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </CartProvider>
);
