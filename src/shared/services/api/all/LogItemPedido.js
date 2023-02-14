import api from './api';

export const obterPorItem = async (codigoInterno, codigoItem, de, ate) => {
    try{
        return await api.get(`pedidolog/obteritem/${codigoInterno}/${codigoItem}/${de}/${ate}`);
    }
    catch(error){
        throw error;
    }
}