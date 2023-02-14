import {
  Box,
  Collapse,
  Icon,
  IconButton,
  TableCell,
  TableRow,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import PartenersProcesses from "../PartenersProcesses";

interface LinhaProps {
  row: {
    id: number;
    name: string;
    cpfCnpj: number;
    email: string;
    telefone: number;
  };
}

export function RowsTable({ row }: LinhaProps) {
  const [open, setOpen] = useState(false);
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  function handleDoubleClick() {
    console.log("double click");
  }
  return (
    <>
      <TableRow
        style={{
          cursor: "pointer",
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
        <TableCell padding="checkbox" onDoubleClick={handleDoubleClick}>
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
        <TableCell padding="checkbox" onDoubleClick={handleDoubleClick}>
          {row.cpfCnpj}
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={handleDoubleClick}>
          {row.email}
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={handleDoubleClick}>
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
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <PartenersProcesses />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
