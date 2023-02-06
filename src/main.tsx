import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DrawerProvider } from "./shared/context/ContextDrawer";
import { LightTheme } from "./shared/themes/Light";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <DrawerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DrawerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
