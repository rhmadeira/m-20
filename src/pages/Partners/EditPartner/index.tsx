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
import { schemaEditPartner } from "../schemas/newPartner";
import BoxForm from "../../../shared/components/form/BoxForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import {
  useGetPartnerId,
  useUpdatePartner,
} from "../../../shared/services/hooks/usePartner";

export type TEditPartner = zod.infer<typeof schemaEditPartner>;
// export type TCreatePartner = Omit<TNewPartner, "id">;

export default function EditPartner() {
  const smDown = useMediaQuery(useTheme().breakpoints.down("sm"));
  const { handleSubmit, control, reset, setValue, watch } =
    useForm<TEditPartner>({
      resolver: zodResolver(schemaEditPartner),
    });
  const { id } = useParams();
  const client = useQueryClient();
  const navigate = useNavigate();
  const { data } = useGetPartnerId(Number(id));
  const { mutate } = useUpdatePartner();

  useEffect(() => {
    if (data)
      reset({
        ...data.value,
        cnpj: data.value.cnpj.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          "$1.$2.$3/$4-$5"
        ),
      });
  }, [data]);

  function handleEditPartner(partner: TEditPartner) {
    const partnerEdit = {
      ...partner,
      cnpj: partner.cnpj.replace(/(\.|\/|\-)/g, ""),
    };
    mutate(partnerEdit, {
      onSuccess: () => {
        client.invalidateQueries("partner");
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
          Editar Parceiro <Icon color="info">mode_edit_outline</Icon>
        </Typography>
        <BoxForm onSubmit={handleSubmit(handleEditPartner)}>
          <Box
            display="flex"
            gap={1}
            width="auto"
            flexWrap={smDown ? "wrap" : "nowrap"}
          >
            <Box width="120px">
              <InputControlled
                controller={{ name: "id", defaultValue: "", control }}
                variant="outlined"
                label="Parceiro"
                color="secondary"
                disabled
              />
            </Box>
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
