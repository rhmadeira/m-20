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
import { useState } from "react";
import { useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AlertDialog from "../../../../../shared/components/AlertDialog";
import useEnumsAssociation from "../../../../../shared/services/hooks/useEnumsAssociation";
import { useDeleteProcess } from "../../../../../shared/services/hooks/useProcess";
import {
  ICommunication,
  IIntegration,
} from "../../../../../shared/services/schemas/enums";
import { IProcesso } from "../../../../../shared/services/schemas/process";

interface IProcessoProps {
  process: IProcesso[];
  communication: ICommunication[];
  integration: IIntegration[];
  isLoading: boolean;
  id: number;
  idParceiro: number;
  setOpen: (open: boolean) => void;
}

export default function InvoiceInfo({
  process,
  communication,
  integration,
  isLoading,
  id,
  idParceiro,
  setOpen,
}: IProcessoProps) {
  const navigate = useNavigate();
  const { van } = useEnumsAssociation();
  const processDelete = useDeleteProcess();
  const client = useQueryClient();
  const [alertOpen, setAlertOpen] = useState(false);
  const [idProcessDelete, setIdProcessDelete] = useState("");

  function handleClickNewProcess() {
    navigate(`/processos/novoprocesso/${idParceiro}`);
  }

  function handleClickDeleteProcess(idParceiro: string, idProcesso: string) {
    const id = { idParceiro, idProcesso };
    processDelete.mutate(id, {
      onSuccess: () => {
        client.invalidateQueries("partner");
        setOpen(false);
        toast("Processo excluído com sucesso!", {
          type: "success",
        });
      },
      onError: () => {
        toast("Erro ao excluir processo!", {
          type: "error",
        });
      },
    });
  }

  function handleClickDelete(id: number) {
    setAlertOpen(true);
    if (id) setIdProcessDelete(String(id));
  }

  function confirmationDelete() {
    handleClickDeleteProcess(String(idParceiro), String(idProcessDelete));
    setAlertOpen(false);
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
            <TableCell>Van</TableCell>
            <TableCell>Tipo Processo</TableCell>
            <TableCell>Comunicação</TableCell>
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
              <TableRow key={`${process.id}`}>
                <TableCell component="th" scope="row">
                  {van.find((item) => item.id === process.vanId)?.nome}
                </TableCell>
                <TableCell>
                  {
                    integration.find(
                      (item) => item.valor === process.tipoProcesso
                    )?.nome
                  }
                </TableCell>
                <TableCell>
                  {
                    van.find((item) => item.id === process.vanId)
                      ?.tipoComunicacao
                  }
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Editar">
                    <IconButton
                      onClick={() =>
                        navigate(`/processos/${idParceiro}/${process.id}`)
                      }
                    >
                      <Icon fontSize="small">edit</Icon>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Deletar">
                    <IconButton onClick={() => handleClickDelete(process.id!)}>
                      <Icon fontSize="small">delete_icon</Icon>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={process.ativo ? "ativo" : "inativo"}>
                    <IconButton>
                      <Icon
                        fontSize="small"
                        color={process.ativo ? "success" : "error"}
                      >
                        circle
                      </Icon>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      {alertOpen && (
        <AlertDialog
          alertOpen={alertOpen}
          setAlertOpen={setAlertOpen}
          confirmation={confirmationDelete}
          title="Deletar"
          description="Tem certeza que deseja deletar este processo?"
        />
      )}
    </Box>
  );
}
