import * as zod from "zod";
import { schemaNewProcessApi } from "../../../pages/Processes/schemas/newProcess";

export interface IProcesso {
  id?: number;
  parceiroId?: number;
  tipoProcesso?: number;
  vanId?: number;
  versao?: string;
  usuarioAPI?: string;
  secretKey?: string;
  password?: string;
  token?: string;
  url?: string;
  caminho?: string;
  senhaFTP?: string;
  usuarioFTP?: string;
  ativo?: boolean;
}

export type ICreateProcess = Omit<
  zod.infer<typeof schemaNewProcessApi>,
  "tipoComunicacao"
>;

//Omit<zod.infer<typeof schemaNewProcessApi>, "id">;
