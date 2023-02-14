import api from './api';

export const buscarTodos = async (query) => {
    return await api.get(`/GlbRedeFaixaPag/BuscarTodos?query=${query}`);
};

export const adicionar = async (objeto) => {
    return await api.post(`/GlbRedeFaixaPag/Adicionar`, objeto);
};

export const atualizar = async (objeto) => {
    return await api.put(`/GlbRedeFaixaPag/Atualizar`, objeto);
};

export const buscar = async (id) => {
    return await api.get(`/GlbRedeFaixaPag/Buscar?id=${id}`);
};

export const excluir = async (id) => {
    return await api.delete(`/GlbRedeFaixaPag/Excluir?id=${id}`);
};

export const gerarPlanilha = async (query) => {
    return await api.get(`/GlbRedeFaixaPag/GerarPlanilha?query=${query}`);
}

export const listarErpMtsRede = async () => {
    return await api.get(`/GlbRedeFaixaPag/ListarErpMtsRede`);
}

export const listarErpMtsClienteGrupoEconomico = async () => {
    return await api.get(`/GlbRedeFaixaPag/ListarErpMtsClienteGrupoEconomico`);
}

export const listarErpMtsFormaPagamento = async () => {
    return await api.get(`/GlbRedeFaixaPag/ListarErpMtsFormaPagamento`);
}

export const listarErpMtsCliente = async () => {
    return await api.get(`/GlbRedeFaixaPag/ListarErpMtsCliente`);
}