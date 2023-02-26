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
import { getVan } from "../../../../../shared/services/van";

interface LinhaProps {
  row: {
    id: number;
    name: string;
    tipo: string;
    versao: string;
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
          {row.name}
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={() => setOpen(!open)}>
          <Box
            // display="block"
            width={smDown ? "200px" : "100%"}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {row.tipo}
          </Box>
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={() => setOpen(!open)}>
          {row.versao}
        </TableCell>
        {/* <TableCell align="right" padding="checkbox">
          <Box display="flex" alignItems="center">
            <IconButton>
              <Icon fontSize="small">edit</Icon>
            </IconButton>
            <IconButton>
              <Icon fontSize="small">delete_icon</Icon>
            </IconButton>
          </Box>
        </TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse
            sx={{ backgroundColor: open ? "#e9e9e9" : "white" }}
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <Box sx={{ margin: 1 }}></Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
