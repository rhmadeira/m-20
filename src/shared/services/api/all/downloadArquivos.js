import api from './api';

export const buscarRetornoPedido = async (codInternoPed) => {
    try{
        return await api.get(`DownloadArquivos/BuscarRetornoPedido/${codInternoPed}`);
    }
    catch(error){
        throw error;
    }
};