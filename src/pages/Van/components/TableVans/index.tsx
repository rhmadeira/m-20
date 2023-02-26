import {
  Divider,
  Paper,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { useState } from "react";
import { RowsTable } from "./RowsTable";
const rows = [
  {
    id: 111,
    name: "John Doe lalal",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
  {
    id: 222,
    name: "John Doe",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
  {
    id: 333,
    name: "John Doe",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
  {
    id: 444,
    name: "John Doe",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
  {
    id: 555,
    name: "John Doe",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
  {
    id: 666,
    name: "John Doe",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
  {
    id: 777,
    name: "John Doe",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
  {
    id: 888,
    name: "John Doe",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
  {
    id: 999,
    name: "John Doe",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
  {
    id: 10,
    name: "John Doe",
    tipo: "tipo da Vans",
    versao: "1.0",
  },
];

export default function TableVans() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell width="40%">Nome</TableCell>
              <TableCell width="40%">Tipo</TableCell>
              <TableCell width="20%">Versão</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <RowsTable key={row.id} row={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 30, 45]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
