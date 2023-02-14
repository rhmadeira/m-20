import api from './api';

export const salvar = async (objeto) => {
    try{
        return await api.post('/ParceiroProcessoAgendamento/salvar', objeto);
    }
    catch(error){
        throw error;
    }
}

export const buscaPeloId = async (codigo) => {
    try{
        return await api.get(`/ParceiroProcessoAgendamento/obter/${codigo}`);
    }
    catch(error){
        throw error;
    }
}
