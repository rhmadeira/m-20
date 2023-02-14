import { Box, styled, Typography, useTheme } from "@mui/material";
import CardTool from "../../shared/components/CardTool";

export default function Home() {
  const theme = useTheme();

  const BoxCardHome = styled(Box)(({ theme }) => ({
    width: "auto",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "end",
    margin: theme.spacing(1),
    gap: theme.spacing(2),
  }));

  return (
    <Box
      className="animeLeft"
      display="flex"
      flexDirection="column"
      height="100%"
      gap={2}
    >
      <Box>
        <Typography variant="h5">Menu Rápido</Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={4}>
        <Box bgcolor={theme.palette.background.paper}>
          <Typography variant="body1">CADASTRO:</Typography>
        </Box>
        <BoxCardHome>
          <CardTool
            to="parceiros/novoparceiro"
            icon="people"
            icon2="add"
            title="Novo parceiro"
            colorBgIcon="parceiro"
          />

          <CardTool
            to="vans/novavans"
            icon="assignment"
            icon2="add"
            title="Nova Vans"
            colorBgIcon="vans"
          />
        </BoxCardHome>
      </Box>
      <Box display="flex" flexDirection="column" gap={4}>
        <Box bgcolor={theme.palette.background.paper}>
          <Typography variant="body1">CONSULTA:</Typography>
        </Box>
        <BoxCardHome>
          <CardTool
            to="parceiros"
            icon="people"
            icon2="search"
            title="Parceiros"
            colorBgIcon="parceiro"
          />
          <CardTool
            to="/"
            icon="account_tree"
            icon2="search"
            title="Processos"
            colorBgIcon="processo"
          />
          <CardTool
            to="vans"
            icon="assignment"
            icon2="search"
            title="Vans"
            colorBgIcon="vans"
          />
          <CardTool
            to="/"
            icon="shopping_cart"
            icon2="search"
            title="Pedidos"
            colorBgIcon="pedidos"
          />
        </BoxCardHome>
      </Box>
    </Box>
  );
}
