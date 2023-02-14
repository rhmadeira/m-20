import api from "./api";

export const salvarParceiroProcesso = async (dados) => {
    try{
        return await api.post("/parceiroprocesso/salvar", dados);
    }catch(err){
        throw err;
    }
};

export const obterPorParceiro = async (codParceiro) => {
    try{
        return await api.get("/parceiroprocesso/obterporparceiro/" + codParceiro);
    }catch(err){
        throw err;
    }
};

export const removerParceiroProcesso = async (codParceiroProcesso) => {
    try{
        return await api.post(`/parceiroprocesso/ativar/${codParceiroProcesso}/0`);
    }catch(err){
        throw err;
    }
};

export const obterPorParceiroProcesso = async (codParceiroProcesso) => {
    try{
        return await api.get(`/parceiroprocesso/obter/${codParceiroProcesso}`);
    }catch(err)
    {
        throw err;
    }
};
