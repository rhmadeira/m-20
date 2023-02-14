import { createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { ptBR } from "@mui/material/locale";

export const Ligth = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#ffffff",
        dark: grey[800],
        light: grey[600],
        contrastText: grey[800],
      },
      secondary: {
        main: "#00B398",
        dark: "#006C5B",
        light: grey[300],
        contrastText: "#ffffff",
      },
      background: {
        default: grey[200],
        paper: grey[100],
      },
    },
  },
  ptBR
);
