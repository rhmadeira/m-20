import api from './api';

export const ObterPorPedido = async (codigoPedido) => {
    try{
        return await api.get(`pedidolog/obterporpedido/${codigoPedido}`);
    }
    catch(error){
        throw error;
    }
}

export const ObterPorPedidoPaginado = async (codigoPedido, de, ate) => {
    try{
        return await api.get(`pedidolog/obterporpedidopaginado/${codigoPedido}/${de}/${ate}`);
    }
    catch(error){
        throw error;
    }
}