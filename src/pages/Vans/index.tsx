import { Box, Typography } from "@mui/material";
import { ListingTool } from "../../shared/components/ListingTool";
import TableVans from "./components/TableVans";

//Fazer a programação e as chamadas de API aqui para fornecer os dados para o TableVans e para o ListingTool

export default function Vans() {
  return (
    <Box className="animeLeft" display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4">Vans</Typography>
      <ListingTool
        // handleButtonNew={handleNewPartner}
        // handleButtonRefresh={handleRefresh}
        // handleButtonGenerateSpreadsheet={handleGenerateSpreadsheet}
        // handleButtonSearch={handleClickButtonSearch}
        textBottomAdd="Nova Vans"
        showSearch
      />
      <Box>
        <TableVans />
      </Box>
    </Box>
  );
}
