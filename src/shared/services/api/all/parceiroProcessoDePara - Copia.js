import api from "./api";
import {Toolbar} from 'primereact/toolbar';

export const obterProcessoDePara = async (codParceiroProcesso, codLayoutSecao, codLayoutSecaoItem) => {
    var response = await api.get(`/parceiroprocessodepara/obter/${codParceiroProcesso}/${codLayoutSecao}/${codLayoutSecaoItem}`);
    return response;  
};

export const obterTodosPorParceiroProcesso = async (codParceiroProcesso) => {
    let codParceiro = codParceiroProcesso
    if(codParceiro && codParceiro===undefined){
        codParceiro = 0
    }
    return await api.get(`/parceiroprocessodepara/obtertodosporparceiroprocesso/${codParceiro}`);
};

export const salvarProcessoDePara = async (dados) => {
    var response = await api.post("/parceiroprocessodepara/salvar", dados);
    return response;  
};

export const inativarProcessoDePara = async (dados) => {
    /**
        {
            "CodigoParceiroProcesso": "19",
            "CodigoLayoutSecao": "1",
            "CodigoLayoutSecaoItem": "2",
            "Seq": "3",
            "Ativo": 1
        }
     */
    var response = await api.post("/parceiroprocessodepara/ativar", dados);
    return response;  
}; 

