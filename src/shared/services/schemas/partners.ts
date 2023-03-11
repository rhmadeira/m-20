import { IProcesso } from "./process";

export interface IPartner {
  id: number;
  razaoSocial: string;
  nome: string;
  cnpj: string;
  email?: string;
  telefone: string;
  ativo: boolean;
  processos: IProcesso[];
}

export type IPartnerCreate = Omit<IPartner, "id" | "processos">;
export type IPartnerUpdate = Omit<IPartner, "processos">;
