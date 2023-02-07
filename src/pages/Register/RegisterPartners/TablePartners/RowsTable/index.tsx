import {
  Box,
  Collapse,
  Icon,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface LinhaProps {
  row: {
    id: number;
    name: string;
    email: string;
  };
}

export function RowsTable({ row }: LinhaProps) {
  const [open, setOpen] = useState(false);

  function handleDoubleClick() {
    console.log("double click");
  }
  return (
    <>
      <TableRow hover>
        <TableCell
          padding="checkbox"
          onDoubleClick={handleDoubleClick}
          component="th"
          scope="row"
        >
          {row.id}
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={handleDoubleClick}>
          {row.name}
        </TableCell>
        <TableCell padding="checkbox" onDoubleClick={handleDoubleClick}>
          {row.email}
        </TableCell>
        <TableCell padding="checkbox">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <Icon>expand_more</Icon>
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Processos:
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
