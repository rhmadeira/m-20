import api from './api';

export const BuscarTodos = async (pagina, maximoLinhas) => {
    try{
        return await api.get(`/QuantidadeMaximaProduto/BuscarTodos/${pagina}/${maximoLinhas}`);
    }
    catch(error){
        throw error;
    }
}

export const Buscar = async (codigo) => {
    try{
        return await api.get(`/QuantidadeMaximaProduto/Buscar/${codigo}`);
    }
    catch(error){
        throw error;
    }
}

export const BuscarPorProduto = async (codigo) => {
    try{
        return await api.get(`/QuantidadeMaximaProduto/BuscarPorProduto/${codigo}`);
    }
    catch(error){
        throw error;
    }
}

export const Adicionar = async (entidade) => {
    try{
        return await api.post(`/QuantidadeMaximaProduto/Adicionar`, entidade);
    }
    catch(error){
        throw error;
    }
}

export const Atualizar = async (entidade) => {
    try{
        return await api.put(`/QuantidadeMaximaProduto/Atualizar`, entidade);
    }
    catch(error){
        throw error;
    }
}

export const Excluir = async (codigo) => {
    try{
        return await api.delete(`/QuantidadeMaximaProduto/Excluir/${codigo}`);
    }
    catch(error){
        throw error;
    }
}

export const gerarPlanilha = async (query) => {
    return api.get(`/QuantidadeMaximaProduto/GerarPlanilha?query=${query}`);
}

export const buscarComFiltros = async (query) => {
    try{
        return await api.post(`/QuantidadeMaximaProduto/Buscar?query=${query}`);
    }
    catch(error){
        throw error;
    }
}