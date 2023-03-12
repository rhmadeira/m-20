import { Box, Paper, Typography, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import CardSubMenu from "../../shared/components/CardSubMenu";
import CardTest from "../../shared/components/CardTest";

export default function Return() {
  const theme = useTheme();
  return (
    <Box className="animeLeft" display="flex" flexDirection="column" gap={1}>
      <Typography variant="h5">Retornos</Typography>
      <Box display="flex" gap={3}>
        <CardSubMenu
          borderColor="#007863"
          title={"Industria"}
          text={"Visualizar retorno industria"}
          path="/retorno"
          icon="business"
          construction
        />
        <CardSubMenu
          borderColor="#086aad"
          title={"Nota Fiscal"}
          text={"Visualizar retorno Nota fiscal"}
          path="/retorno/notafiscal"
          icon="attach_money"
        />
        <CardSubMenu
          borderColor="#4fbfa5"
          title={"Cancelamento"}
          text={"Visualizar retorno Cancelamento"}
          path="/retorno"
          icon="cancel"
          construction
        />
      </Box>
    </Box>
  );
}
