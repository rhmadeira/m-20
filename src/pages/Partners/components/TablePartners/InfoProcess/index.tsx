import {
  Icon,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { IProcesso } from "../../../../../shared/services/schemas/partners";
import {
  ICommunication,
  IIntegration,
} from "../../../../../shared/services/schemas/process";

interface IProcessoProps {
  process: IProcesso[];
  communication: ICommunication[];
  integration: IIntegration[];
  isLoading: boolean;
  id: number;
}

export default function InfoProcess({
  process,
  communication,
  integration,
  isLoading,
  id,
}: IProcessoProps) {
  const navigate = useNavigate();

  function handleClickNewProcess() {
    navigate(`/processos/novoprocesso/${id}`);
  }
  function handleClickDelete() {
    console.log("deletar");
  }
  function handleClickStatus() {
    console.log("status");
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
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Vans</TableCell>
            <TableCell>Tipo de integração</TableCell>
            <TableCell>Tipo de comunicação</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        {isLoading && (
          <TableBody>
            {[...Array(10)].map((_, index) => (
              <TableRow key={index}>
                {[...Array(6)].map((_, index) => (
                  <TableCell key={index}>
                    <Skeleton />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        )}
        {!isLoading && (
          <TableBody>
            {process.map((process) => (
              <TableRow key={process.id}>
                <TableCell component="th" scope="row">
                  {process.van.nome}
                </TableCell>
                <TableCell>
                  {integration?.map((int) => (
                    <Typography key={int.nome}>
                      {int?.valor === +process.van.tipocomunicacao &&
                        int?.descricao}
                    </Typography>
                  ))}
                </TableCell>

                <TableCell>
                  {communication?.map((communication) => (
                    <Typography key={communication.descricao}>
                      {communication?.valor === +process.van.tipocomunicacao &&
                        communication?.descricao}
                    </Typography>
                  ))}
                </TableCell>
                <Tooltip title="Editar">
                  <IconButton
                    onClick={() => navigate(`/processos/${process.id}`)}
                  >
                    <Icon fontSize="small">edit</Icon>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Deletar">
                  <IconButton onClick={handleClickDelete}>
                    <Icon fontSize="small">delete_icon</Icon>
                  </IconButton>
                </Tooltip>
                <Tooltip title={process.ativo ? "Ativo" : "Inativo"}>
                  <IconButton onClick={handleClickStatus}>
                    <Icon
                      fontSize="small"
                      color={process.ativo ? "success" : "error"}
                    >
                      circle
                    </Icon>
                  </IconButton>
                </Tooltip>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </Box>
  );
}
