export interface IVan {
  id: number;
  nome: string;
  tipocomunicacao: string;
}

export interface IProcesso {
  id: number;
  usuarioAPI: string;
  password: string;
  url: string;
  van: IVan;
  tipo: number;
  token: string;
  ativo: boolean;
}

export interface IPartner {
  ativo: boolean;
  id: number;
  nome: string;
  cnpj: string;
  razaoSocial: string;
  email: string;
  telefone: string;
  processos: IProcesso[];
}

export type IPartnerCreate = Omit<IPartner, "id" | "processos">;
export type IPartnerUpdate = Omit<IPartner, "processos">;
