import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const Ligth = createTheme({
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
      default: "red",
      paper: "red",
    },
  },
});
