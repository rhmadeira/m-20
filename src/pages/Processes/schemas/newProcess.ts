import * as zod from "zod";

export const schemaNewProcess = zod.object({
  parceiroId: zod.number(),
  tipoProcesso: zod.string(),
  tipocomunicacao: zod.string(),
  vanId: zod.string(),
  versao: zod.string(),
  //api
  usuarioApi: zod.string().optional(),
  secretKey: zod.string().optional(),
  password: zod.string().optional(),
  token: zod.string().optional(),
  url: zod.string().optional(),
  //edi
  caminho: zod.string().optional(),
  senhaFtp: zod.string().optional(),
  usuarioFtp: zod.string().optional(),
});

export const schemaEditProcess = zod.object({
  parceiroId: zod.number(),
  tipoProcesso: zod.string(),
  tipoComunicacao: zod.string(),
  vanId: zod.string(),
  versao: zod.string(),
  ativo: zod.boolean().optional(),
  id: zod.number().optional(),
  //api
  usuarioApi: zod.string().optional(),
  secretKey: zod.string().optional(),
  password: zod.string().optional(),
  token: zod.string().optional(),
  url: zod.string().optional(),
  //edi
  caminho: zod.string().optional(),
  senhaFtp: zod.string().optional(),
  usuarioFtp: zod.string().optional(),
});

export const schemaNewProcessApi = schemaNewProcess.transform((data) => {
  return {
    ...data,
    tipoProcesso: Number(data.tipoProcesso),
    vanId: Number(data.vanId),
  };
});
