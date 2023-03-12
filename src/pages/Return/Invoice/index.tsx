import { Box, Button, Icon, Paper, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import InputControlled from "../../../shared/components/form/InputControlled";
import { GroupButtonTool } from "../../../shared/components/GroupButtonTool";
import InvoiceTable from "./InvoiceTable";

export default function Invoice() {
  const theme = useTheme();
  const mdDown = useTheme().breakpoints.down("md");
  const { control } = useForm();
  return (
    <Box className="animeLeft" display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5">Retorno NOTA FISCAL</Typography>
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
      <Box>{/* <InvoiceTable /> */}</Box>
    </Box>
  );
}
