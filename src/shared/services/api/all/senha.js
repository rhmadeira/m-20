import api from "./api";

export const obterSenhaTemporaria = async (login) => {
    return await api.get(`recuperacaosenha/obtersenhatemporaria?login=${login}`);
};

export const alterarSenha = async (objeto) => {
    return await api.post(`recuperacaosenha/alterarsenha`, objeto);
};

