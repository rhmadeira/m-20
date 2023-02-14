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

export type TNewPartner = zod.infer<typeof schemaNewPartner>;

export default function NewPartner() {
  const { handleSubmit, control, watch } = useForm<TNewPartner>({
    resolver: zodResolver(schemaNewPartner),
  });
  const theme = useTheme();
  const tipoPessoa = watch("pessoa");
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  function handleNewPartner(data: TNewPartner) {
    console.log(data);
  }

  function handleBackPartner() {
    console.log("back");
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
            <InputControlled
              controller={{ name: "codigo", defaultValue: "", control }}
              variant="outlined"
              label="Código"
              color="secondary"
            />
            <Controller
              name="pessoa"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl focused={false} size="small" fullWidth>
                  <InputLabel>Tipo de pessoa</InputLabel>

                  <Select label="Tipo de pessoa" {...field}>
                    <MenuItem value={"1"}>Física</MenuItem>
                    <MenuItem value={"2"}>Jurídica</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            {tipoPessoa === "1" ? (
              <InputControlled
                controller={{ name: "cpf", defaultValue: "", control }}
                variant="outlined"
                label="CPF"
                color="secondary"
              />
            ) : tipoPessoa === "2" ? (
              <InputControlled
                controller={{ name: "cnpj", defaultValue: "", control }}
                variant="outlined"
                label="CNPJ"
                color="secondary"
              />
            ) : null}
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
              controller={{ name: "nomeFantasia", defaultValue: "", control }}
              variant="outlined"
              label="Nome Fantasia"
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
            />{" "}
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
