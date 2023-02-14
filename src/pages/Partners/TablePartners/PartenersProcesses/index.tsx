import {
  Icon,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

export default function PartenersProcesses() {
  const theme = useTheme();
  const navigate = useNavigate();
  const processos = [
    {
      id: 1,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 1",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: true,
    },
    {
      id: 2,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 2",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação  1",
      habilitado: false,
    },
    {
      id: 3,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 3",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: false,
    },
    {
      id: 4,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 4",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: true,
    },
    {
      id: 5,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 1",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: true,
    },
    {
      id: 6,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 2",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação  1",
      habilitado: false,
    },
    {
      id: 7,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 3",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: false,
    },
    {
      id: 8,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 4",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: true,
    },
    {
      id: 9,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 3",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: false,
    },
    {
      id: 11,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 4",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: true,
    },
    {
      id: 12,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 1",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: true,
    },
    {
      id: 13,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 2",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação  1",
      habilitado: false,
    },
    {
      id: 14,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 3",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: false,
    },
    {
      id: 15,
      code: "123",
      processo: "Acode - Dicionario (Exportação) 4",
      van: "Van Acode Dicionario 1",
      versao: "Versão 1",
      operacao: "Operação 1",
      habilitado: true,
    },
  ];

  function handleClickNewProcess() {
    navigate("/processos/novoprocesso");
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="300px"
      bgcolor={theme.palette.background.default}
      padding="10px"
      boxSizing="border-box"
      overflow="auto"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={1}
      >
        <Box>
          <Typography variant="h6">Processos:</Typography>
        </Box>
        <Button
          color="secondary"
          size="small"
          variant="contained"
          onClick={handleClickNewProcess}
          endIcon={<Icon>add</Icon>}
        >
          Novo processo
        </Button>
      </Box>
      <Divider />
      <List disablePadding dense>
        {processos.map((processo) => (
          <ListItem dense divider key={processo.id} disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <Typography
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                variant="body2"
                fontSize={12}
              >
                Cod: {processo.code}
              </Typography>
              <Typography
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                marginLeft={2}
                variant="body2"
                fontSize={12}
              >
                {processo.processo}
              </Typography>
              <Typography
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                marginLeft={2}
                variant="body2"
                fontSize={12}
              >
                Van: {processo.van}
              </Typography>
              <Typography
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                marginLeft={2}
                variant="body2"
                fontSize={12}
              >
                Versão: {processo.versao}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography marginLeft={2} fontSize={12}>
                  Habilitado
                </Typography>
                {processo.habilitado ? (
                  <Icon color="success" fontSize="small">
                    check_circle
                  </Icon>
                ) : (
                  <Icon color="warning" fontSize="small">
                    circle
                  </Icon>
                )}
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
