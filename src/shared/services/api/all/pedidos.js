import api from "./api";
import { AxiosError } from "axios";
export const obterTodosPedidos = async (oDataParams) => {
    try{
        return await api.get("/pedido/obtertodos?$filter=ativo eq true" + oDataParams + "&$orderby=dataCadastroInterno desc");
    }catch(err){
        throw err;
    }
};

export const obterTodosPedidosPaginado = async (oDataParams, de, ate, codigoParceiro) => {
    try{
        return await api.get("/pedido/obtertodospaginado?$filter=ativo eq true" + oDataParams + "&$orderby=dataCadastroInterno desc&de=" + de + "&ate=" + ate + "&codigoParceiro=" + codigoParceiro);
    }catch(err){
        throw err;
    }
};

export const obterTodosItensPedido = async (codigoPedidoInterno) => {
    try{
        return await api.get("/pedido/obteritenspedido/" + codigoPedidoInterno);
    }catch(err){
        throw err;
    }
};

export const obterLogPedido = async (codigoPedidoInterno) => {
    try{
        return await api.get("/pedidolog/obterporpedido/" + codigoPedidoInterno);
    }catch(err){
        throw err;
    }
};

export const obterPedidoPorId = async (codigoPedidoInterno) => {
    try{
        return await api.get(`/pedido/obtertodos?$filter=codigoInterno eq ${codigoPedidoInterno}`);
    }catch(err){
        throw err;
    }
};

export const buscastatuspedidosmitis = async () => {
    try{
        return await api.get(`/pedido/buscastatuspedidosmitis`);
    }
    catch(error){
        throw error;
    }
};

export const buscarTodos = async (objeto) => {
    try{
        return await api.post(`/pedido/BuscarTodos`, objeto);
    }catch(err){
        throw err;
    }
};

export const cancelarPedido = async (listaPedido, codUsuario) => {
    let arrayObjeto = {
        listaPedido: listaPedido,
        codUsuario: codUsuario
    }
        return await api.post(`/pedido/CancelarPedidos`, arrayObjeto);

};

export const gerarPlanilha = async (query) => {
    return await api.get(`/pedido/GerarPlanilha?query=${query}`);
}
