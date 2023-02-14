import api from "./api";

export const obterParceiroProcessoLog = async (codParceiroProcesso, dataInicial, dataFinal, linha, limiteLinhas) => {
    try{
        let url = `/parceiroprocessolog/obterTodos/${codParceiroProcesso}/${dataInicial}/${dataFinal}/${linha}/${limiteLinhas}`;
        const response = await api.get(url);
        return response;  
    }catch(err){
        throw err;
    }
};

export const ExcluirLogsComMaisDeUmaSemana = async (codParceiroProcesso) => {
    try{
        return await api.delete(`/parceiroprocessolog/ExcluirLogsComMaisDeUmaSemana/${codParceiroProcesso}`);
    }
    catch(error){
        throw error;
    }
};