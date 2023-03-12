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
import { IOrders } from "../../../../shared/services/schemas/orders";
import { Rows } from "./Rows";

interface ITablePartners {
  orders: IOrders[];
  ordersLoading: boolean;
}

export default function OrdersTable({ orders, ordersLoading }: ITablePartners) {
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
              {ordersLoading ? (
                [...Array(6)].map((_, index) => (
                  <TableCell key={index}>
                    <Skeleton />
                  </TableCell>
                ))
              ) : (
                <>
                  <TableCell width="30%">Parceiro</TableCell>
                  <TableCell width="10%">ped. Ind</TableCell>
                  <TableCell width="25%">Status</TableCell>
                  <TableCell width="30%">Empresa</TableCell>
                  {/* <TableCell width="5%">Status</TableCell> */}
                  <TableCell width="5%" align="center">
                    Ações
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersLoading ? (
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
                {orders
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
        count={orders?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
