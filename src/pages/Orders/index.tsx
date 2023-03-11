import { Box, Button, Icon, Paper, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import InputControlled from "../../shared/components/form/InputControlled";
import { GroupButtonTool } from "../../shared/components/GroupButtonTool";
import OrdersTable from "./components/OrdersTable";

const orders = [
  {
    id: 1,
    name: "João",
    email: "teste@.gmail.com",
    phone: "99999-9999",
    status: "Ativo",
    date: "2021-10-10",
    total: 100,
  },
  {
    id: 2,
    name: "João",
    email: "teste@.gmail.com",
    phone: "(11) 99999-9999",
    status: "Inativo",
    date: "2021-10-10",
    total: 100,
  },
  {
    id: 3,
    name: "João",
    email: "teste@.gmail.com",
    phone: "(11) 99999-9999",
    status: "Ativo",
    date: "2021-10-10",
    total: 100,
  },
];

export default function Orders() {
  const theme = useTheme();
  const mdDown = useTheme().breakpoints.down("md");
  const ordersLoading = false;
  const { handleSubmit, control } = useForm();
  return (
    <Box className="animeLeft" display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5">Pedidos</Typography>
      <Box
        component={Paper}
        display="flex"
        alignItems="center"
        padding={1}
        height={theme.spacing(7)}
      >
        <GroupButtonTool showButtonAdd={false} showSearch />
        <Box
          display="flex"
          component="form"
          alignItems="center"
          gap={1}
          flex={1}
          justifyContent="end"
        >
          <InputControlled
            controller={{ name: "search", control, defaultValue: "" }}
            size="small"
            variant="standard"
            color="secondary"
            placeholder="Pesquisar"
            fullWidth={false}
          />
          <Button
            variant="contained"
            size={mdDown ? "small" : "medium"}
            color="secondary"
            disableElevation
            type="submit"
            endIcon={<Icon>search</Icon>}
          >
            Buscar
          </Button>
        </Box>
      </Box>
      <Box>
        <OrdersTable orders={orders} ordersLoading={ordersLoading} />
      </Box>
    </Box>
  );
}
