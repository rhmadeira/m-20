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
import { RowsTable } from "./RowsTable";
const rows = [
  {
    id: 1,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 2,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 3,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 4,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 12,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 23,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 34,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 45,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 16,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 27,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 38,
    name: "John Doe",
    email: "asdhuh@usah",
  },
  {
    id: 48,
    name: "John Doe",
    email: "asdhuh@usah",
  },
];

export default function TabelaTeste() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>email</TableCell>
              <TableCell></TableCell>
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
        rowsPerPageOptions={[12, 24, 32]}
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
