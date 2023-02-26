import {
  Box,
  Icon,
  Paper,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InputControlled from "../../../shared/components/form/InputControlled";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaNewProcess } from "../schemas/newProcess";
import SaveBackTool from "../../../shared/components/SaveBackTool";
import BoxForm from "../../../shared/components/form/BoxForm";
import { useNavigate } from "react-router-dom";
import { useVan } from "../../../shared/services/hooks/useVan";

export type TNewProcess = zod.infer<typeof schemaNewProcess>;

export default function NewProcess() {
  const { handleSubmit, control, watch, setValue } = useForm<TNewProcess>({
    resolver: zodResolver(schemaNewProcess),
  });
  const theme = useTheme();
  const navigate = useNavigate();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const typeVan = watch("comunicacao");
  const { data } = useVan();

  function handleNewProcess(data: TNewProcess) {
    console.log(data);
  }
  function handleProcessBack() {
    navigate("/parceiros");
  }
  function handleProcessSave() {
    console.log("save");
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <Box
        width="100%"
        height="100%"
        marginTop={smDown ? 0 : 5}
        component={Paper}
      >
        <Typography paddingLeft={3} paddingTop={2} variant="h5">
          Novo Processo <Icon color="info">mode_edit_outline</Icon>
        </Typography>
        <BoxForm onSubmit={handleSubmit(handleNewProcess)}>
          <Box
            display="flex"
            gap={1}
            width="auto"
            maxWidth="800px"
            flexWrap={smDown ? "wrap" : "nowrap"}
          >
            <Controller
              name="tipoProcesso"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl focused={false} size="small" fullWidth>
                  <InputLabel>Tipo de Processo</InputLabel>

                  <Select label="Tipo de Processo" {...field}>
                    <MenuItem value={"1"}>Estoque</MenuItem>
                    <MenuItem value={"2"}>Campanhas</MenuItem>
                    <MenuItem value={"3"}>Pedido</MenuItem>
                    {/* <MenuItem value={"3"}>Retorno</MenuItem>
                    <MenuItem value={"4"}>RetornoNF</MenuItem>
                    <MenuItem value={"5"}>Inadimplência</MenuItem>
                    <MenuItem value={"6"}>Resultado</MenuItem> */}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="nome"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl focused={false} size="small" fullWidth>
                  <InputLabel>Van</InputLabel>

                  <Select label="Van" {...field}>
                    {data?.value?.map((van) => (
                      <MenuItem key={van.id} value={van.id}>
                        {van.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="comunicacao"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl focused={false} size="small" fullWidth>
                  <InputLabel>Comunicação</InputLabel>

                  <Select label="Comunicação" {...field}>
                    <MenuItem value={"1"}>API</MenuItem>
                    <MenuItem value={"2"}>EDI</MenuItem>
                    <MenuItem value={"3"}>Graphql</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="versao"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl focused={false} size="small" fullWidth>
                  <InputLabel>Versão</InputLabel>

                  <Select label="Comunicação" {...field}>
                    <MenuItem value={"1.0"}>1.0</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>
          <Box
            display={typeVan === "1" ? "flex" : "none"}
            flexDirection="column"
            gap={1}
            maxWidth="900px"
          >
            <Typography>API</Typography>
            <Box
              display="flex"
              gap={1}
              width="auto"
              flexWrap={smDown ? "wrap" : "nowrap"}
            >
              {" "}
              <InputControlled
                controller={{
                  name: "chaveApi",
                  defaultValue: "",
                  control,
                }}
                label="Chave API"
                color="secondary"
              />
              <InputControlled
                controller={{
                  name: "secretKey",
                  defaultValue: "",
                  control,
                }}
                label="Secret Key"
                color="secondary"
              />
              <InputControlled
                controller={{
                  name: "password",
                  defaultValue: "",
                  control,
                }}
                label="Password"
                color="secondary"
              />{" "}
            </Box>
            <Box
              display="flex"
              gap={1}
              width="auto"
              flexWrap={smDown ? "wrap" : "nowrap"}
            >
              {" "}
              <InputControlled
                controller={{
                  name: "token",
                  defaultValue: "",
                  control,
                }}
                label="Token"
                color="secondary"
              />
              <InputControlled
                controller={{
                  name: "url",
                  defaultValue: "",
                  control,
                }}
                label="URL"
                color="secondary"
              />{" "}
            </Box>
          </Box>
          <Box
            display={typeVan === "2" ? "flex" : "none"}
            flexDirection="column"
            gap={1}
          >
            <Typography marginLeft={1}>EDI</Typography>
            <Box display="flex" gap={1} maxWidth="700px">
              <InputControlled
                controller={{
                  name: "usuarioFtp",
                  defaultValue: "",
                  control,
                }}
                label="Usuário FTP"
                color="secondary"
              />

              <InputControlled
                controller={{
                  name: "senhaFtp",
                  defaultValue: "",
                  control,
                }}
                label="Senha FTP"
                color="secondary"
              />
            </Box>
            <Box>
              <InputControlled
                controller={{
                  name: "caminho",
                  defaultValue: "",
                  control,
                }}
                label="Caminho do Arquivo"
                color="secondary"
              />
            </Box>
          </Box>

          <Button type="submit">Enviar</Button>
          <SaveBackTool
            handleBack={handleProcessBack}
            handleSave={handleProcessSave}
          />
        </BoxForm>
      </Box>
    </Box>
  );
}
