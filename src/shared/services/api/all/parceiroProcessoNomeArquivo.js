import api from "./api";

export const salvarProcessoNomeArquivo = async (dados) => {
    try{
        return await api.post(`/ParceiroProcessoNomeArquivo/salvar`, dados);
    }catch(err){
        throw err;
    }
};

export const obterProcessoListaNomesArquivo = async (codigoParceiroProcesso) => {
    try{
        return await api.get(`/ParceiroProcessoNomeArquivo/obterporparceiroprocesso/${codigoParceiroProcesso}`);
    }catch(err){
        throw err;
    }
};

export const obterProcessoNomeArquivo = async (codigoParceiroProcesso, item) => {
    try{
        return await api.get(`/ParceiroProcessoNomeArquivo/obter/${codigoParceiroProcesso}/${item}`);
    }catch(err){
        throw err;
    }
};

export const removerCampoNomeArquivo = async (codigoParceiroProcesso, item) => {
    try{
        let obj = {
            id: {
                codigoParceiroProcesso: codigoParceiroProcesso,
                item: item
            },
            ativo: 0
        }
        return await api.post(`/ParceiroProcessoNomeArquivo/ativar`, obj);
    }catch(err){
        throw err;
    }
};

