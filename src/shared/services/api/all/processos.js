import api from "./api";

export const obterTodosProcessos = async () => {
    var response = await api.get("/processo/obtertodos");
    return response;
};

export const obterTodosProcessosPorTipo = async (tipo) => {
    var response = await api.get("/processo/obterportipo/" + tipo);
    return response;
};

export const buscarArquivosFtp = async (objeto) => {
    return await api.post(`/processo/BuscarArquivosFtp`, objeto);
};

export const baixarArquivosFtp = async (objeto) => {
    return await api.post(`/processo/BaixarArquivosFtp`, objeto);
};

export const buscarArquivosDiretorioLocal = async (objeto) => {
    return await api.post(`/processo/BuscarArquivosDiretorioLocal`, objeto);
};

export const baixarArquivosDiretorioLocal = async (objeto) => {
    return await api.post(`/processo/BaixarArquivosDiretorioLocal`, objeto);
};