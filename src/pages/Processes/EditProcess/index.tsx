import {
  Box,
  Icon,
  Paper,
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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCreateProcess } from "../../../shared/services/hooks/useProcess";

import useEnumsAssociation from "../../../shared/services/hooks/useEnumsAssociation";

export type TNewProcess = zod.infer<typeof schemaNewProcess>;

export default function EditProcess() {
  const { handleSubmit, control, watch, setValue } = useForm<TNewProcess>({
    resolver: zodResolver(schemaNewProcess),
  });
  const smDown = useMediaQuery(useTheme().breakpoints.down("sm"));
  const navigate = useNavigate();
  const typeVanSelect = watch("van");
  const typeCommunicationSelect = watch("tipocomunicacao");
  const { communication, integration, van } = useEnumsAssociation();

  const { id } = useParams();
  const { mutate } = useCreateProcess();

  useEffect(() => {
    if (id) setValue("parceiro", Number(id));
  }, []);
  // useEffect(() => {
  //   if (data)
  //     reset({
  //       ...data.value,
  //       cnpj: data.value.cnpj.replace(
  //         /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
  //         "$1.$2.$3/$4-$5"
  //       ),
  //     });
  // }, [data]);

  useEffect(() => {
    if (watch("van")) {
      const selectedVan = van.find((van) => van.id === Number(watch("van")));

      const comunicacaoToSelect = communication?.find(
        (comunicacao) => comunicacao.nome === selectedVan?.tipocomunicacao
      );

      setValue("tipocomunicacao", String(comunicacaoToSelect?.valor) || "");
    }
  }, [watch("van")]);

  function handleNewProcess(process: TNewProcess) {
    const data = {
      ...process,
      parceiro: Number(id),
      van: Number(process.van),
      tipoProcesso: Number(process.tipoProcesso),
      tipocomunicacao: Number(process.tipocomunicacao),
    };
    mutate(data, {
      onSuccess: () => {
        navigate("/parceiros");
      },
    });
  }

  function handleProcessBack() {
    navigate("/parceiros");
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
          Editar Processo <Icon color="info">mode_edit_outline</Icon>
        </Typography>
        <BoxForm onSubmit={handleSubmit(handleNewProcess)}>
          <Box
            display="flex"
            gap={1}
            width="auto"
            maxWidth="800px"
            flexWrap={smDown ? "wrap" : "nowrap"}
          >
            <InputControlled
              controller={{
                name: "parceiro",
                defaultValue: "",
                control,
              }}
              label="Parceiro"
              color="secondary"
              disabled
            />

            <Controller
              name="tipoProcesso"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl focused={false} size="small" fullWidth>
                  <InputLabel>Tipo Integração</InputLabel>

                  <Select label="Tipo Integração" {...field}>
                    {integration?.map((tipo) => (
                      <MenuItem key={tipo.nome} value={String(tipo.valor)}>
                        {tipo.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="van"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl focused={false} size="small" fullWidth>
                  <InputLabel>Van</InputLabel>

                  <Select label="Van" {...field}>
                    {van.map((van) => (
                      <MenuItem key={van.id} value={String(van.id)}>
                        {van.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="tipocomunicacao"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl focused={false} size="small" fullWidth>
                  <InputLabel>Comunicação</InputLabel>
                  <Select label="Comunicação" {...field} disabled>
                    {communication?.map((tipo) => (
                      <MenuItem key={tipo.nome} value={String(tipo.valor)}>
                        {tipo.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <InputControlled
              controller={{
                name: "versao",
                defaultValue: "",
                control,
              }}
              label="Versão"
              color="secondary"
            />
          </Box>
          <Box
            display={typeCommunicationSelect === "2" ? "flex" : "none"}
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
                  name: "usuarioApi",
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
            display={typeCommunicationSelect === "1" ? "flex" : "none"}
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
          <SaveBackTool handleBack={handleProcessBack} />
        </BoxForm>
      </Box>
    </Box>
  );
}