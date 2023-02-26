import * as zod from "zod";

export const schemaNewPartner = zod.object({
  id: zod.number(),
  cnpj: zod.string(),
  razaoSocial: zod.string(),
  nome: zod.string(),
  email: zod.string(),
  telefone: zod.string(),
});

// const schemaNewPartnerApi = schemaNewPartner.transform((data) => {
//   return { ...data, codigo: data.codigo.valueOf() };
// });
