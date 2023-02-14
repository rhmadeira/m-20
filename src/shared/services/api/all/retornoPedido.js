import api from "./api";

export const excluirRetornoPedido = async (objeto) => {
    try{
        return await api.post(`/retornopedido/excluir`, objeto);
    }
    catch(error){
        throw error;
    }
}