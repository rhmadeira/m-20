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
            colorBgIcon="green300"
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
            colorBgIcon="green500"
          />
          {/* <CardTool
            to="/"
            icon="account_tree"
            icon2="search"
            title="Processos"
            colorBgIcon="processo"
          /> */}
          <CardTool
            to="/"
            icon="assignment"
            icon2="search"
            title="Pedidos"
            colorBgIcon="blue400"
            construction
          />
          <CardTool
            to="retorno"
            icon="call_split"
            icon2="search"
            title="Retornos"
            colorBgIcon="blue200"
          />
        </BoxCardHome>
      </Box>
    </Box>
  );
}
