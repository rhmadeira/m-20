import * as zod from "zod";

export const schemaNewPartner = zod.object({
  codigo: zod.string(),
  cnpj: zod.string(),
  cpf: zod.string(),
  razaoSocial: zod.string(),
  nomeFantasia: zod.string(),
  email: zod.string(),
  telefone: zod.string(),
  pessoa: zod.string(),
});

// const schemaNewPartnerApi = schemaNewPartner.transform((data) => {
//   return { ...data, codigo: data.codigo.valueOf() };
// });
