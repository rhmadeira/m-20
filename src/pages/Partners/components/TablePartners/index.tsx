import {
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
import { Rows } from "./Rows";
const rows = [
  {
    id: 111,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
  {
    id: 222,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
  {
    id: 333,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
  {
    id: 444,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
  {
    id: 555,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
  {
    id: 666,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
  {
    id: 777,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
  {
    id: 888,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
  {
    id: 999,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
  {
    id: 10,
    name: "John Doe",
    cpfCnpj: 1231525234234,
    email: "asdhuh@usah",
    telefone: 123123123,
  },
];

export default function TablePartners() {
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
              <TableCell width="5%">Id</TableCell>
              <TableCell width="30%">Razão Social</TableCell>
              <TableCell width="15%">Cpf / Cnpj</TableCell>
              <TableCell width="20%">email</TableCell>
              <TableCell width="15%">telefone</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Rows key={row.id} row={row} />
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
