import { Box, keyframes, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ListingTool } from "../../shared/components/ListingTool";
import TablePartners from "./components/TablePartners";

export default function Partners() {
  const theme = useTheme();
  const navigate = useNavigate();

  // Fazer as chamadas de API aqui para fornecer os dados para o TablePartners e para o ListingTool

  const handleNewPartner = () => {
    navigate("/parceiros/novoparceiro");
  };
  const handleEditPartner = () => {
    navigate("/parceiros/editarparceiro");
  };
  const handleDeletePartner = () => {
    console.log("deletando");
  };
  const handleRefresh = () => {
    navigate("/parceiros");
  };
  const handleGenerateSpreadsheet = () => {
    console.log("gerando planilha");
  };
  const handleClickButtonSearch = () => {
    console.log("buscando");
  };

  return (
    <Box className="animeLeft" display="flex" flexDirection="column" gap={2}>
      <Typography variant="h4">Parceiros</Typography>
      <ListingTool
        handleButtonNew={handleNewPartner}
        handleButtonRefresh={handleRefresh}
        handleButtonGenerateSpreadsheet={handleGenerateSpreadsheet}
        handleButtonSearch={handleClickButtonSearch}
        textBottomAdd="Novo parceiro"
        showSearch
      />
      <Box>
        <TablePartners />
      </Box>
    </Box>
  );
}
