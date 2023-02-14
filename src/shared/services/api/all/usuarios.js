import api from './api';

export const listarTodos = async () => {
    try{
        let response = await api.get('/usuario/obtertodos');
        return response;
    }
    catch(error){
        throw error;
    }
}

export const buscarPeloId = async (id) => {
    try{
        return await api.get('/usuario/obter/' + id);
       
    }
    catch(error){
        throw error;
    }
}

export const salvar = async (usuario) => {
    try{
        return await api.post('/usuario/salvar', usuario);
    }
    catch(error){
        throw error;
    }
}

export const excluir = async (id) => {
    try{
        return await api.delete('/usuario/excluir', id);
    }
    catch(error){
        throw error;
    }
}

export const ativar = async (id) => {
    try{
        return await api.put('/usuario/ativar/'+ id);
    }
    catch(error){
        throw error;
    }
}

export const desativar = async (id) => {
    try{
        return await api.put('/usuario/desativar/'+ id);
    }
    catch(error){
        throw error;
    }
}

export const bloquear = async (id) => {
    try{
        return await api.put('/usuario/bloquear/' + id);
    }
    catch(error){
        throw error;
    }
}

export const desbloquear = async (id) => {
    try{
        return await api.put('/usuario/desbloquear/'+ id);
    }
    catch(error){
        throw error;
    }
}

export const buscarTodos = async (objeto) => {
    try{
        return await api.post('/usuario/buscartodos', objeto);
    }
    catch(error){
        throw error;
    }
}

export const buscarComFiltros = async (objeto) => {
    try{
        return await api.post('/usuario/buscarcomfiltros', objeto);
    }
    catch(error){
        throw error;
    }
}

export const buscaPeloUsuarioVinculado = async (codigoUsuario) => {
    try{
        var response = await api.get(`/usuario/buscarparceirosvinculados?codigoUsuario=${codigoUsuario}`);
        return response;
    }catch(err){
        throw err;
    }
};

export const vincularUsuariosParceiros = async (objeto) => {
    try{
        var response = await api.post(`/usuario/vincularusuariosparceiros`, objeto);
        return response;
    }catch(err){
        throw err;
    }
};