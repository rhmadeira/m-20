import api from "./api";


/************************************ */
/*****   LAYOUTS                 **** */
/************************************ */
export const obterTodosLayouts = async () => {
    try{
        return await api.get("/layout/obtertodos?$filter=ativo eq true&$orderby=dataCriacao desc");
    }catch(err){
        throw err;
    }
};

export const gerarPlanilha = async () => {
    try{
        return await api.get("/layout/gerarPlanilha?$filter=ativo eq true&$orderby=dataCriacao desc");
    }catch(err){
        throw err;
    }
};

export const salvarLayouts = async (dados) => {
    try{
        return await api.post("/layout/salvar", dados);
    }catch(err){
        throw err;
    } 
};

export const obterLayoutPorId = async (codLayout) => {
    try{
        return await api.get("layout/obter/" + codLayout);
    }catch(err){
        throw err;
    } 
};

export const obterLayoutsPorProcesso = async (codProcesso) => {
    try{
        return await api.get("layout/obterporprocesso/" + codProcesso);
    }catch(err){
        throw err;
    }
};

export const excluirLayout = async (dados) => {
    try{
        return await api.post("layout/ativar/", dados);
    }catch(err){
        throw err;
    }
};


/************************************ */
/*****   SEÇÃO DO LAYOUT         **** */
/************************************ */
export const salvarLayoutSecao = async (dados) => {
    try{
        return await api.post("layoutsecao/salvar", dados);  
    }catch(err){
        throw err;
    }
};

export const obterLayoutSecao = async (codLayout) => {
    try{
        return await api.get("layoutsecao/obterporlayout/" + codLayout);
    }catch(err){
        throw err;
    } 
};

export const obterLayoutSecaoEspecifico = async (codLayout, codLayoutSecao) => {
    try{
        var retorno = null;
        var listaDeSecoes = await obterLayoutSecao(codLayout);
        if(listaDeSecoes !== undefined){
            if(listaDeSecoes.status === 200){
                listaDeSecoes = listaDeSecoes.data;
                listaDeSecoes = listaDeSecoes.filter((sections) => sections.codigo === codLayoutSecao);
                if(listaDeSecoes.length > 0 ){
                    retorno = listaDeSecoes[0];
                }
            }
        }          
        return retorno;
    }catch(err){
        throw err;
    }
};

export const excluirLayoutSecao = async (codLayoutSecao) => {
    try{
        return await api.post("layoutsecao/excluir/" + codLayoutSecao);
    }catch(err){
        throw err;
    }
};



/************************************ */
/**** CAMPOS DA SEÇÃO DO LAYOUT ***** */
/************************************ */
export const salvarCampoSecao = async (dados) => {
    try{
        return await api.post("layoutcamposecao/salvar/", dados);
    }catch(err){
        throw err;
    }
};

export const obterCamposLayoutSecao = async (codLayoutSecao) => {
    try{
        return await api.get("layoutcamposecao/obtertodosporlayoutsecao/" + codLayoutSecao);
    }catch(err){
        throw err;
    }
};

export const obterCampoLayoutSecao = async (codLayoutSecao, item) => {
    try{
        return await api.get(`layoutcamposecao/obter/${codLayoutSecao}/${item}`);
    }catch(err){
        throw err;
    } 
};


export const removerCampoLayoutSecao = async (codLayoutSecao, item) => {
    try{
        var dados = { CodigoLayoutSecao: codLayoutSecao, Item: item, Ativo: 0 }
        return await api.post('layoutcamposecao/ativar/', dados);
    }catch(err){
        throw err;
    }
};


/************************************ */
/**** MODELOS DO LAYOUT         ***** */
/************************************ */
export const obterTodosModelosLayout = async () => {
    try{
        return await api.get("layoutmodelo/obtertodos");
    }catch(err){
        throw err;
    }
};