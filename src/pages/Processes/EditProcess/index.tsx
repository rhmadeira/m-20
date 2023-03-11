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
  Skeleton,
  Switch,
} from "@mui/material";
import InputControlled from "../../../shared/components/form/InputControlled";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaEditProcess, schemaNewProcess } from "../schemas/newProcess";
import SaveBackTool from "../../../shared/components/SaveBackTool";
import BoxForm from "../../../shared/components/form/BoxForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useEnumsAssociation from "../../../shared/services/hooks/useEnumsAssociation";
import { getProcessPartnerById } from "../../../shared/services/process";
import { useUpdateProcess } from "../../../shared/services/hooks/useProcess";
import { toast } from "react-toastify";
import { IProcesso } from "../../../shared/services/schemas/process";
import { Label } from "@mui/icons-material";
import AlertDialog from "../../../shared/components/AlertDialog";

export type TNewProcess = zod.infer<typeof schemaEditProcess>;

type IParams = {
  parceiroId: string;
  processoId: string;
};

export default function EditProcess() {
  const { handleSubmit, control, watch, setValue, reset } =
    useForm<TNewProcess>({
      resolver: zodResolver(schemaEditProcess),
    });
  const smDown = useMediaQuery(useTheme().breakpoints.down("sm"));
  const { parceiroId, processoId } = useParams<IParams>();
  const navigate = useNavigate();
  const { communication, integration, van, isLoaded } = useEnumsAssociation();
  const [process, setProcess] = useState<IProcesso>();
  const updateProcess = useUpdateProcess();
  const [editLoading, setEditLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;
    async function fetchData() {
      try {
        setEditLoading(true);
        const response = await getProcessPartnerById({
          idParceiro: Number(parceiroId!),
          idProcesso: Number(processoId!),
        });
        setProcess(response.value);
        setEditLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    if (process) {
      reset({
        ...process,
        parceiroId: process.parceiroId,
        id: process.id,
        vanId: String(process.vanId),
        tipoProcesso: String(process.tipoProcesso),
      });
    }
  }, [process, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    if (watch("vanId")) {
      const selectedVan = van.find((van) => van.id === Number(watch("vanId")));

      const comunicacaoToSelect = communication?.find(
        (comunicacao) => comunicacao.nome === selectedVan?.tipoComunicacao
      );

      setValue("tipoComunicacao", String(comunicacaoToSelect?.valor));
    }
  }, [watch("vanId"), process, isLoaded]);

  function handleProcessBack() {
    navigate("/parceiros");
  }
  function handleEditProcess(process: TNewProcess) {
    const data = {
      ...process,
      tipoProcesso: Number(process.tipoProcesso),
      vanId: Number(process.vanId),
      tipoComunicacao: Number(process.tipoComunicacao),
    };
    updateProcess.mutate(data, {
      onSuccess: () => {
        navigate("/parceiros");
        toast("Processo editado com sucesso!", {
          type: "success",
        });
      },
    });
  }

  function handleClickEdit() {
    setAlertOpen(true);
  }

  function confirmationEdit() {
    handleSubmit(handleEditProcess)();
    setAlertOpen(false);
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <Box
        borderTop="10px solid #086aad"
        width="100%"
        height="100%"
        component={Paper}
      >
        <Typography paddingLeft={3} paddingTop={2} variant="h5">
          Editar Processo <Icon color="info">mode_edit_outline</Icon>
        </Typography>

        <BoxForm onSubmit={handleSubmit(handleEditProcess)}>
          <Box
            display="flex"
            gap={1}
            width="auto"
            flexWrap={smDown ? "wrap" : "nowrap"}
          >
            {editLoading ? (
              [1, 2, 3, 4, 5].map((item) => (
                <Skeleton
                  key={item}
                  variant="rounded"
                  width={300}
                  height={40}
                />
              ))
            ) : (
              <>
                <InputControlled
                  controller={{
                    name: "parceiroId",
                    defaultValue: "",
                    control,
                  }}
                  label="Parceiro"
                  color="secondary"
                  disabled
                />
                <InputControlled
                  controller={{
                    name: "id",
                    defaultValue: "",
                    control,
                  }}
                  label="Processo ID"
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
                  name="vanId"
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
                  name="tipoComunicacao"
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
              </>
            )}
          </Box>
          <Box
            display={watch("tipoComunicacao") === "2" ? "flex" : "none"}
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
            display={watch("tipoComunicacao") === "1" ? "Flex" : "none"}
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
            typeButtonSave="button"
            handleSave={handleClickEdit}
            handleBack={handleProcessBack}
          />
          {alertOpen && (
            <AlertDialog
              alertOpen={alertOpen}
              setAlertOpen={setAlertOpen}
              confirmation={confirmationEdit}
              title="Salvar"
              description="Tem certeza que deseja alterar os dados do processo?"
            />
          )}
        </BoxForm>
      </Box>
    </Box>
  );
}
