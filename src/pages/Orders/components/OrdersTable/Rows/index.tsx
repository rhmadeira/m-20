import {
  Box,
  Collapse,
  Icon,
  IconButton,
  TableCell,
  TableRow,
  Theme,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../../../../../shared/components/AlertDialog";
import useEnumsAssociation from "../../../../../shared/services/hooks/useEnumsAssociation";
import { useDeletePartner } from "../../../../../shared/services/hooks/usePartner";
import { getProcessPartner } from "../../../../../shared/services/process";
import { IOrders } from "../../../../../shared/services/schemas/orders";
import { IProcesso } from "../../../../../shared/services/schemas/process";
import { cnpjMask } from "../../../../../shared/utils/masks";
// import InfoProcess from "../InfoProcess";

interface IRowsProps {
  row: IOrders;
}

export function Rows({ row }: IRowsProps) {
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [processos, setProcessos] = useState<IProcesso[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const client = useQueryClient();
  const deletePartner = useDeletePartner();
  const { communication, integration } = useEnumsAssociation();

  function handleClickDelete() {
    setAlertOpen(true);
  }

  function confirmationDelete() {
    handleDelete(row.id);
    setAlertOpen(false);
  }

  function handleDelete(id: number) {
    deletePartner.mutate(id, {
      onSuccess: () => {
        client.invalidateQueries("partner");
      },
    });
  }

  async function handleDobleClickProcess(id: number) {
    try {
      if (open) return setOpen(!open);
      setIsLoading(true);
      setOpen(true);
      const responseProcess = await getProcessPartner(id);
      setProcessos(responseProcess.value.processos);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <TableRow
        style={{
          cursor: "pointer",
        }}
        sx={{
          "& > *": { borderBottom: "unset" },
          "&:hover": { bg: "e9e9e9" },
          backgroundColor: open ? "#e9e9e9" : "white",
        }}
        hover
        onDoubleClick={() => handleDobleClickProcess(row.id)}
      >
        <TableCell padding="checkbox" component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell padding="checkbox">
          <Box
            // display="block"
            width={smDown ? "200px" : "100%"}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {row.name.toLocaleUpperCase()}
          </Box>
        </TableCell>
        <TableCell padding="checkbox">{row.status}</TableCell>
        <TableCell padding="checkbox">{row.email}</TableCell>
        <TableCell padding="checkbox">{row.phone}</TableCell>
        {/* <TableCell padding="checkbox">
          {row.ativo ? (
            <Typography color="green">Ativo</Typography>
          ) : (
            <Typography color="red">Inativo</Typography>
          )}
        </TableCell> */}

        <TableCell align="right" padding="checkbox">
          <Box display="flex" alignItems="center">
            Processos
            <Tooltip title="Ver processos">
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => handleDobleClickProcess(row.id)}
              >
                {open ? (
                  <Icon>keyboard_arrow_up</Icon>
                ) : (
                  <Icon>keyboard_arrow_down</Icon>
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Editar">
              <IconButton onClick={() => navigate(`/parceiros/${row.id}`)}>
                <Icon fontSize="small">edit</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Deletar">
              <IconButton onClick={handleClickDelete}>
                <Icon fontSize="small">delete_icon</Icon>
              </IconButton>
            </Tooltip>
            <Tooltip title={row.status ? "Ativo" : "Inativo"}>
              <IconButton>
                <Icon fontSize="small" color={row.status ? "success" : "error"}>
                  circle
                </Icon>
              </IconButton>
            </Tooltip>
            {alertOpen && (
              <AlertDialog
                alertOpen={alertOpen}
                setAlertOpen={setAlertOpen}
                confirmation={confirmationDelete}
                title="Deletar"
                description="Tem certeza que deseja deletar este parceiro?"
              />
            )}
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse
            sx={{ backgroundColor: open ? "#e9e9e9" : "white" }}
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <Box sx={{ margin: 1 }}>
              {/* <InfoProcess
                isLoading={isLoading}
                process={processos}
                communication={communication}
                integration={integration}
                id={row.id}
                idParceiro={row.id}
                setOpen={setOpen}
              /> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
