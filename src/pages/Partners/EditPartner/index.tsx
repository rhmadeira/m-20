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
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import {
  useGetPartnerById,
  useUpdatePartner,
} from "../../../shared/services/hooks/usePartner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label } from "@mui/icons-material";
import AlertDialog from "../../../shared/components/AlertDialog";

export type TEditPartner = zod.infer<typeof schemaEditPartner>;

export default function EditPartner() {
  const smDown = useMediaQuery(useTheme().breakpoints.down("sm"));
  const { handleSubmit, control, reset, setValue, watch } =
    useForm<TEditPartner>({
      resolver: zodResolver(schemaEditPartner),
    });
  const { id } = useParams();
  const client = useQueryClient();
  const navigate = useNavigate();
  const { data } = useGetPartnerById(Number(id));
  const { mutate } = useUpdatePartner();
  const [alertOpen, setAlertOpen] = useState(false);

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

  async function handleEditPartner(partner: TEditPartner) {
    const partnerEdit = {
      ...partner,
      cnpj: partner.cnpj.replace(/(\.|\/|\-)/g, ""),
    };
    mutate(partnerEdit, {
      onSuccess: () => {
        client.invalidateQueries("partner");
        toast.success("Parceiro editado com sucesso!");
        navigate("/parceiros");
      },
      onError: () => {
        toast.error("Erro ao editar parceiro!");
      },
    });
  }

  function handleClickEdit() {
    setAlertOpen(true);
  }

  function confirmationEdit() {
    handleSubmit(handleEditPartner)();
    setAlertOpen(false);
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
          <SaveBackTool
            handleSave={handleClickEdit}
            handleBack={handleBackPartner}
            typeButtonSave="button"
          />
          {alertOpen && (
            <AlertDialog
              alertOpen={alertOpen}
              setAlertOpen={setAlertOpen}
              confirmation={confirmationEdit}
              title="Salvar"
              description="Tem certeza que deseja alterar os dados do parceiro?"
            />
          )}
        </BoxForm>
      </Box>
    </Box>
  );
}
