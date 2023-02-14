import api from './api';

export const excluirRetornoNF = async (objeto) => {
    try{
        return await api.post(`/RetornoNF/excluir`, objeto);
    }
    catch(error){
        throw error;
    }
}