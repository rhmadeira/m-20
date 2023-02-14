import {
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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

export default function InfoProcess() {
  const theme = useTheme();
  const navigate = useNavigate();

  function handleClickNewProcess() {
    navigate("/processos/novoprocesso");
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="300px"
      padding="10px"
      boxSizing="border-box"
      overflow="auto"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop={1}
        marginBottom={2}
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
      {/* <Divider /> */}
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Processo</TableCell>
            <TableCell>Vans</TableCell>
            <TableCell>Versão</TableCell>
            <TableCell>Habilitação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {processos.map((process) => (
            <TableRow key={process.id}>
              <TableCell component="th" scope="row">
                {process.code}
              </TableCell>
              <TableCell>{process.processo}</TableCell>
              <TableCell>{process.van}</TableCell>
              <TableCell>{process.versao}</TableCell>
              <TableCell align="center">
                {process.habilitado ? (
                  <Icon color="success" fontSize="small">
                    check_circle
                  </Icon>
                ) : (
                  <Icon color="warning" fontSize="small">
                    circle
                  </Icon>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
