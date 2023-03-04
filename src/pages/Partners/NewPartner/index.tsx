import {
  Box,
  Icon,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InputControlled from "../../../shared/components/form/InputControlled";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveBackTool from "../../../shared/components/SaveBackTool";
import { schemaNewPartnerApi } from "../schemas/newPartner";
import BoxForm from "../../../shared/components/form/BoxForm";
import { useNavigate } from "react-router-dom";
import { useCreatePartner } from "../../../shared/services/hooks/usePartner";

export type TNewPartner = zod.infer<typeof schemaNewPartnerApi>;

export default function NewPartner() {
  const { handleSubmit, control } = useForm<TNewPartner>({
    resolver: zodResolver(schemaNewPartnerApi),
  });
  const navigate = useNavigate();
  const smDown = useMediaQuery(useTheme().breakpoints.down("sm"));
  const { mutate } = useCreatePartner();

  function handleNewPartner(partner: TNewPartner) {
    mutate(partner, {
      onSuccess: () => {
        navigate("/parceiros");
      },
    });
  }

  function handleBackPartner() {
    navigate("/parceiros");
  }

  return (
    <Box
      className="animeLeft"
      display="flex"
      flexDirection="column"
      gap={2}
      alignItems="center"
      marginTop={smDown ? 0 : 5}
    >
      <Box
        borderTop="10px solid #086aad"
        width="100%"
        height="100%"
        component={Paper}
      >
        <Typography paddingLeft={3} paddingTop={2} variant="h5">
          Novo Parceiro <Icon color="info">mode_edit_outline</Icon>
        </Typography>
        <BoxForm onSubmit={handleSubmit(handleNewPartner)}>
          <Box
            display="flex"
            gap={1}
            width="auto"
            flexWrap={smDown ? "wrap" : "nowrap"}
          >
            <Box width="310px">
              <InputControlled
                controller={{ name: "cnpj", defaultValue: "", control }}
                variant="outlined"
                label="CNPJ"
                color="secondary"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            gap={1}
            width="auto"
            flexWrap={smDown ? "wrap" : "nowrap"}
          >
            <InputControlled
              controller={{ name: "razaoSocial", defaultValue: "", control }}
              variant="outlined"
              label="Razão Social"
              color="secondary"
            />
            <InputControlled
              controller={{ name: "nome", defaultValue: "", control }}
              variant="outlined"
              label="Nome"
              color="secondary"
            />
          </Box>
          <Box
            display="flex"
            gap={1}
            width="auto"
            flexWrap={smDown ? "wrap" : "nowrap"}
          >
            <InputControlled
              controller={{ name: "email", defaultValue: "", control }}
              variant="outlined"
              label="E-mail"
              color="secondary"
            />
            <InputControlled
              controller={{ name: "telefone", defaultValue: "", control }}
              variant="outlined"
              label="Telefone"
              color="secondary"
            />
          </Box>
          <SaveBackTool handleBack={handleBackPartner} />
        </BoxForm>
      </Box>
    </Box>
  );
}
