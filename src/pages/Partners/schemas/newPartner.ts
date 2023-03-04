import * as zod from "zod";

export const schemaNewPartner = zod.object({
  cnpj: zod.string(),
  razaoSocial: zod.string(),
  nome: zod.string(),
  email: zod.string(),
  telefone: zod.string(),
});

export const schemaEditPartner = zod.object({
  id: zod.number(),
  cnpj: zod.string(),
  razaoSocial: zod.string(),
  nome: zod.string(),
  email: zod.string(),
  telefone: zod.string(),
  ativo: zod.boolean(),
});

export const schemaNewPartnerApi = schemaNewPartner.transform((data) => {
  return { ...data, cnpj: data.cnpj.replace(/\D/g, "") };
});
