import { createTheme } from "@mui/material";
import { cyan, grey, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[700],
      dark: grey[800],
      light: grey[600],
      contrastText: "#ffffff",
    },
    secondary: {
      main: grey[800],
      dark: grey[800],
      light: grey[800],
      contrastText: "#ffffff",
    },
    background: {
      default: "#D3D3D3",
      paper: "#ffffff",
    },
  },
});
