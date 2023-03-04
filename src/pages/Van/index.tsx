import { Box, Typography } from "@mui/material";
import { GroupButtonTool } from "../../shared/components/GroupButtonTool";
import TableVans from "./components/TableVans";

//Fazer a programação e as chamadas de API aqui para fornecer os dados para o TableVans e para o ListingTool

export default function Van() {
  return (
    <Box className="animeLeft" display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4">Vans</Typography>
      <GroupButtonTool showSearch />
      <Box>
        <TableVans />
      </Box>
    </Box>
  );
}
