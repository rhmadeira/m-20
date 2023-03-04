import { Box, Button, Icon, Paper, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputControlled from "../../shared/components/form/InputControlled";
import { GroupButtonTool } from "../../shared/components/GroupButtonTool";
import { useGetPartner } from "../../shared/services/hooks/usePartner";
import { IPartner } from "../../shared/services/schemas/partners";
import TablePartners from "./components/TablePartners";

interface IFormSearch {
  search: string;
}

export default function Partners() {
  const navigate = useNavigate();
  const partners = useGetPartner();
  const [partnersFiltered, setPartnersFiltered] = useState<IPartner[]>([]);
  const mdDown = useTheme().breakpoints.down("md");
  const theme = useTheme();
  const { handleSubmit, control } = useForm<IFormSearch>();

  useEffect(() => {
    if (partners.data) setPartnersFiltered(partners.data);
  }, [partners.data]);

  const handleNewPartner = () => {
    navigate("/parceiros/novoparceiro");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGenerateSpreadsheet = () => {
    console.log("gerando planilha");
  };

  const handleClickButtonFilter = (data: IFormSearch) => {
    const Filtered = partners?.data?.filter(
      (partner) =>
        partner.nome.toUpperCase().includes(data.search.toLocaleUpperCase()) ||
        partner.cnpj.toUpperCase().includes(data.search.toLocaleUpperCase()) ||
        partner.id.toString().includes(data.search)
    );
    if (Filtered) setPartnersFiltered(Filtered);
  };

  return (
    <Box className="animeLeft" display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5">Parceiros</Typography>
      <Box
        component={Paper}
        display="flex"
        alignItems="center"
        padding={1}
        height={theme.spacing(7)}
      >
        <GroupButtonTool
          handleButtonNew={handleNewPartner}
          handleButtonRefresh={handleRefresh}
          handleButtonGenerateSpreadsheet={handleGenerateSpreadsheet}
          textBottomAdd="Novo parceiro"
          showSearch
        />
        <Box
          display="flex"
          component="form"
          alignItems="center"
          gap={1}
          flex={1}
          justifyContent="end"
          onSubmit={handleSubmit(handleClickButtonFilter)}
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
        <TablePartners
          partners={partnersFiltered}
          partnersLoading={partners.isLoading}
        />
      </Box>
    </Box>
  );
}
