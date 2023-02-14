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
import InfoProcess from "../InfoProcess";

interface LinhaProps {
  row: {
    id: number;
    name: string;
    cpfCnpj: number;
    email: string;
    telefone: number;
  };
}

export function Rows({ row }: LinhaProps) {
  const [open, setOpen] = useState(false);
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  function handleDoubleClick() {
    console.log("double click");
  }

  useEffect(() => {
    (async function handleGetInfoProcess() {
      if (open) console.log("load");
    })();
  }, [open]);

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
            {row.name}
          </Box>
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={() => setOpen(!open)}>
          {row.cpfCnpj}
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
            <IconButton>
              <Icon fontSize="small">edit</Icon>
            </IconButton>
            <IconButton>
              <Icon fontSize="small">delete_icon</Icon>
            </IconButton>
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
