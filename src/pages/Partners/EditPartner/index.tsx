import {
  Box,
  Icon,
  MenuItem,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InputControlled from "../../../shared/components/form/InputControlled";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";
import SaveBackTool from "../../../shared/components/SaveBackTool";
import { schemaNewPartner } from "../schemas/newPartner";
import BoxForm from "../../../shared/components/form/BoxForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import {
  useGetPartnerId,
  useUpdatePartner,
} from "../../../shared/services/hooks/usePartner";

export type TNewPartner = zod.infer<typeof schemaNewPartner>;
// export type TCreatePartner = Omit<TNewPartner, "id">;

export default function EditPartner() {
  const smDown = useMediaQuery(useTheme().breakpoints.down("sm"));
  const { handleSubmit, control, watch, setValue, reset } =
    useForm<TNewPartner>({
      resolver: zodResolver(schemaNewPartner),
    });
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetPartnerId(Number(id));
  const client = useQueryClient();
  const { mutate } = useUpdatePartner();
  console.log(data);

  useEffect(() => {
    if (data)
      reset({
        ...data.value,
      });
  }, [data]);

  function handleNewPartner(partner: TNewPartner) {
    mutate(partner, {
      onSuccess: () => {
        client.invalidateQueries("partner");
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
            <Box width="120px">
              <InputControlled
                controller={{ name: "id", defaultValue: "", control }}
                variant="outlined"
                label="Código"
                color="secondary"
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
          <SaveBackTool handleBack={handleBackPartner} />
        </BoxForm>
      </Box>
    </Box>
  );
}
