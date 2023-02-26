import {
  Box,
  Collapse,
  Icon,
  IconButton,
  TableCell,
  TableRow,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../../../../../shared/components/AlertDialog";
import AlertController from "../../../../../shared/components/AlertDialog";
import { api } from "../../../../../shared/services/axios";
import { useDeletePartner } from "../../../../../shared/services/hooks/usePartner";
import { deletePartnerId } from "../../../../../shared/services/partners";
import InfoProcess from "../InfoProcess";

interface LinhaProps {
  row: {
    id: number;
    nome: string;
    cnpj: string;
    razaoSocial: string;
    email: string;
    telefone: string;
  };
}

export function Rows({ row }: LinhaProps) {
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const client = useQueryClient();
  const { mutate } = useDeletePartner();

  function handleClickDelete() {
    setAlertOpen(true);
  }

  function handleDelete(id: number) {
    mutate(id, {
      onSuccess: () => {
        client.invalidateQueries("partner");
      },
    });
  }
  function confirmationDelete() {
    handleDelete(row.id);
    setAlertOpen(false);
  }

  function handleDoubleClick() {
    console.log("double click");
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
      >
        <TableCell
          padding="checkbox"
          onDoubleClick={handleDoubleClick}
          component="th"
          scope="row"
        >
          {row.id}
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={() => setOpen(!open)}>
          <Box
            // display="block"
            width={smDown ? "200px" : "100%"}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {row.nome}
          </Box>
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={() => setOpen(!open)}>
          {row.cnpj}
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={() => setOpen(!open)}>
          {row.email}
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={() => setOpen(!open)}>
          {row.telefone}
        </TableCell>

        <TableCell align="right" padding="checkbox">
          <Box display="flex" alignItems="center">
            Processos
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <Icon>keyboard_arrow_up</Icon>
              ) : (
                <Icon>keyboard_arrow_down</Icon>
              )}
            </IconButton>
            <IconButton onClick={() => navigate(`/parceiros/${row.id}`)}>
              <Icon fontSize="small">edit</Icon>
            </IconButton>
            <IconButton onClick={handleClickDelete}>
              <Icon fontSize="small">delete_icon</Icon>
            </IconButton>
            {alertOpen && (
              <AlertDialog
                alertOpen={alertOpen}
                setAlertOpen={setAlertOpen}
                confirmationDelete={confirmationDelete}
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
              <InfoProcess />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
