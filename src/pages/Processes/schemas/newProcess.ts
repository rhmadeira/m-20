import * as zod from "zod";

export const schemaNewProcess = zod.object({
  tipoProcesso: zod.string(),
  comunicacao: zod.string(),
  nome: zod.string(),
  versao: zod.string(),
  //api
  chaveApi: zod.string(),
  secretKey: zod.string(),
  password: zod.string(),
  token: zod.string(),
  url: zod.string(),
  //edi
  caminho: zod.string().optional(),
  senhaFtp: zod.string().optional(),
  usuarioFtp: zod.string().optional(),
});

// codigo: zod.string(), //number
// codigoPai: zod.string(), //number
// dataAtualizacao: zod.string(), //date
// dataCriacao: zod.string(), //date
// ativo: zod.boolean(),
// ftpLocal: zod.boolean(),
// ftP_Servidor: zod.string(),
// ftP_Usuario: zod.string(),
// ftP_Senha: zod.string(),
// ftP_Porta: zod.string(), //number
// ftP_Pasta: zod.string(),
// local_CaminhoArquivo: zod.string(),
// local_BackupArquivo: zod.string(),
// codigoEmpresa: zod.string(), //number
// codigoFilial: zod.string(), //number
// codigoVend: zod.string(), //number
// codigoPDA: zod.string(), //number
// habilitado: zod.boolean(),
// utilizaDescontoCondicaoComercial: zod.boolean(),
// origem: zod.string(), //number
// origemIntegracao: zod.string(), //number
// necessitaAprovacao: zod.boolean(),
// spProcessa: zod.string(), //number
// tipoCancelamento: zod.string(), //number
// identificacaoProduto: zod.string(), //number
// statusMinimoParaRetorno: zod.string(), //number
// filtro_Canais: zod.string(),
// filtro_Rede: zod.string(), //number
// filtro_Grupo_Econ: zod.string(),
// filtro_Empresa: zod.string(), //number
// filtro_Fornecedor: zod.string(),
// filtro_Grupo: zod.string(),
// filtro_SubGrupo: zod.string(),
// filtro_GrupoVendas: zod.string(),
// dataUltimaMovimentacaoDev: zod.string(), //date
// ignorarPrazoFixoCliente: zod.boolean(),
// ignorarPrazoFixoData: zod.boolean(),
// layout: zod.object({
//   codigo: zod.string(), //number
//   descricao: zod.string(),
//   versao: zod.string(), //number
//   processo: zod.object({
//     codigo: zod.string(), //number
//     descricao: zod.string(),
//     tipo: zod.string(), //number
//   }),
// }),
// parceiro: zod.object({
//   codigo: zod.string(), //number
//   razaoSocial: zod.string(),
//   tipoPessoa: zod.string(), //number
//   cnpjCpf: zod.string(),
// }),
// endPoint: zod.string(),
// usuario: zod.string(),
// senha: zod.string(),
// filtroCondicaoComercial: zod.string(),
// percentualDescontoIcms: zod.string(), //number
// ufOrigemSimuladorSt: zod.string(),
// ufDestinoSimuladorSt: zod.string(),
// aguardarReservaEstoque: zod.boolean(),
