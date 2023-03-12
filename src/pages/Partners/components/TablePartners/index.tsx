import {
  Paper,
  Skeleton,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { useState } from "react";
import { IPartner } from "../../../../shared/services/schemas/partners";
import { Rows } from "./Rows";

interface ITablePartners {
  partners: IPartner[];
  partnersLoading: boolean;
}

export default function TablePartners({
  partners,
  partnersLoading,
}: ITablePartners) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
              {partnersLoading ? (
                [...Array(6)].map((_, index) => (
                  <TableCell key={index}>
                    <Skeleton />
                  </TableCell>
                ))
              ) : (
                <>
                  <TableCell width="5%">Id</TableCell>
                  <TableCell width="30%">Nome</TableCell>
                  <TableCell width="15%">CNPJ</TableCell>
                  <TableCell width="20%">email</TableCell>
                  <TableCell width="10%">telefone</TableCell>
                  {/* <TableCell width="5%">Status</TableCell> */}
                  <TableCell width="5%" align="center">
                    Ações
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {partnersLoading ? (
              [...Array(10)].map((_, index) => (
                <TableRow key={index}>
                  {[...Array(6)].map((_, index) => (
                    <TableCell key={index}>
                      <Skeleton height="30px" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <>
                {partners
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <Rows key={row.id} row={row} />
                  ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 30, 45]}
        component="div"
        count={partners?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
