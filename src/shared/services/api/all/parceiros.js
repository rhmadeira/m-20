import api from "./api";

export const obterParceiros = async () => {
    try{
        var response = await api.get("/parceiro/obtertodos?$filter=ativo eq true&$orderby=dataCriacao desc");
        return response;
    }catch(err){
        throw err;
    }
};

export const obterParceiroPorId = async (codParceiro) => {
    try{
        var response = await api.get("/parceiro/obter/" + codParceiro);
        if(response !== undefined){
            return response.data;  
        }
    }catch(err){
        throw err;
    }
};

export const inativarParceiro = async (codParceiro, codUsuarioAlteracao) => {
    try{
        var response = await api.post("/parceiro/desativar/" + codParceiro + "/" + codUsuarioAlteracao);
        if(response !== undefined){
            return response.data;  
        } 
    }catch(err){
        throw err;
    }
};

export const ativarParceiro = async (codParceiro, codUsuarioAlteracao) => {
    try{
        var response = await api.post("/parceiro/ativar/" + codParceiro + "/" + codUsuarioAlteracao);
        if(response !== undefined){
            return response.data;  
        }
    }catch(err){
        throw err;
    }
};

export const salvarParceiro = async (dados) => {
    try{
        return await api.post("/parceiro/salvar", dados);
    }catch(err){
        throw err;
    }
};

export const BuscaPeloUsuarioVinculado = async (codigoUsuario) => {
    try{
        var response = await api.get(`/parceiro/BuscaPeloUsuarioVinculado?codigoUsuario=${codigoUsuario}&$filter=ativo eq true&$orderby=dataCriacao desc`);
        return response;
    }catch(err){
        throw err;
    }
};

export const gerarPlanilha = async () => {
    try{
        var response = await api.get("/parceiro/GerarPlanilha?$filter=ativo eq true&$orderby=dataCriacao desc");
        return response;
    }catch(err){
        throw err;
    }
};