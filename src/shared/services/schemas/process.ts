import * as zod from "zod";
import { schemaNewProcessApi } from "../../../pages/Processes/schemas/newProcess";

export interface ICommunication {
  nome: string;
  valor: number;
  descricao: string;
}

export interface IIntegration {
  nome: string;
  valor: number;
  descricao: string;
}

export type ICreateProcess = zod.infer<typeof schemaNewProcessApi>;
