import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DrawerProvider } from "./shared/context/ContextDrawer";
import { globalStyles } from "./shared/themes/global/global";
import { Ligth } from "./shared/themes/Light";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Ligth}>
      <DrawerProvider>
        <BrowserRouter>
          {globalStyles}
          <App />
        </BrowserRouter>
      </DrawerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
