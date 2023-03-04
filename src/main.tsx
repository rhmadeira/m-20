import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DrawerProvider } from "./shared/context/ContextDrawer";
import { globalStyles } from "./shared/themes/global/global";
import { Ligth } from "./shared/themes/Light";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./shared/services/queryClient";
import AuthProvider from "./shared/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={Ligth}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DrawerProvider>
          <BrowserRouter>
            {globalStyles}
            <App />
          </BrowserRouter>
        </DrawerProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>
);
