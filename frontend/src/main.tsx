import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";
import { AuthContextProvider } from "./context/AuthContext";
import { ContentContextProvider } from "./context/ContentContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <ContentContextProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <NextUIProvider>
              <App />
            </NextUIProvider>
          </BrowserRouter>
        </ThemeProvider>
      </ContentContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
