import {
  Box,
  Icon,
  Paper,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InputControlled from "../../../shared/components/form/InputControlled";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveBackTool from "../../../shared/components/SaveBackTool";
import { schemaNewPartnerApi } from "../schemas/newPartner";
import BoxForm from "../../../shared/components/form/BoxForm";
import { useNavigate } from "react-router-dom";
import { useCreatePartner } from "../../../shared/services/hooks/usePartner";
import { toast } from "react-toastify";
import { Label } from "@mui/icons-material";
import { useEffect } from "react";

export type TNewPartner = zod.infer<typeof schemaNewPartnerApi>;

export default function NewPartner() {
  const { handleSubmit, control, watch, setValue } = useForm<TNewPartner>({
    resolver: zodResolver(schemaNewPartnerApi),
  });
  const navigate = useNavigate();
  const smDown = useMediaQuery(useTheme().breakpoints.down("sm"));
  const { mutate } = useCreatePartner();

  useEffect(() => {
    setValue("ativo", true);
  }, []);

  function handleNewPartner(partner: TNewPartner) {
    mutate(partner, {
      onSuccess: () => {
        navigate("/parceiros");
        toast("Parceiro cadastrado com sucesso!", {
          type: "success",
        });
      },
      onError: () => {
        toast("Erro ao cadastrar parceiro!", {
          type: "error",
        });
      },
    });
  }

  function handleBackPartner() {
    navigate("/parceiros");
  }

  console.log(watch("ativo"));

  return (
    <Box
      className="animeLeft"
      display="flex"
      flexDirection="column"
      gap={2}
      alignItems="center"
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
          <Box display="flex" alignItems="center">
            <Label color={watch("ativo") ? "info" : "error"} />
            {watch("ativo") ? "Ativo" : "Inativo"}
            <Controller
              control={control}
              name="ativo"
              defaultValue={false}
              render={({ field }) => (
                <Switch {...field} color="info" checked={field.value} />
              )}
            />
          </Box>
          <SaveBackTool handleBack={handleBackPartner} />
        </BoxForm>
      </Box>
    </Box>
  );
}
