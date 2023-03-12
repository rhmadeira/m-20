import * as zod from "zod";

export const schemaNewPartner = zod.object({
  cnpj: zod.string(),
  razaoSocial: zod.string(),
  nome: zod.string(),
  email: zod.string().optional(),
  telefone: zod.string(),
  ativo: zod.boolean(),
});

export const schemaEditPartner = schemaNewPartner.extend({
  id: zod.number(),
});

export const schemaNewPartnerApi = schemaNewPartner.transform((data) => {
  return { ...data, cnpj: data.cnpj.replace(/\D/g, "") };
});
