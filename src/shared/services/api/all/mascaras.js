import api from "./api";

export const obterTodasMascaras = async () => {
    try{
        return await api.get("/mascara/obtertodos");
    }catch(err){
        throw err;
    }
};
