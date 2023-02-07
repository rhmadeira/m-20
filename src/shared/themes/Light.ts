import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const Ligth = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
      dark: grey[800],
      light: grey[600],
      contrastText: grey[900],
    },
    secondary: {
      main: grey[800],
      dark: grey[800],
      light: grey[300],
      contrastText: "#ffffff",
    },
    background: {
      default: grey[200],
      paper: grey[100],
    },
  },
});
