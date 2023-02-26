import { useMutation } from "react-query";
import { api } from "./axios";

interface IPartner {
  codParceiro: number;
}
interface IPartners {
  codParceiro: number;
}
interface IDados {
  id: number;
  codParceiro: number;
}

export const getPartners = async () =>
  await api.get(
    "/parceiro/obtertodos?$filter=ativo eq true&$orderby=dataCriacao desc"
  );

export const deletePartnerId = async (id: number) =>
  await api.delete(`/parceiros/${id}`);

const getPartnersById = async (
  codParceiro: string
): Promise<IPartner | Error> => {
  try {
    const response = await api.get("/parceiro/obter/" + codParceiro);
    if (response) {
      return response.data;
    }
    return new Error("Parceiro não encontrado");
  } catch (err) {
    throw err;
  }
};

const setPartner = async (
  dados: Omit<IDados, "id">
): Promise<number | Error> => {
  try {
    const { data } = await api.post<IDados>("/parceiro/salvar", dados);
    if (data) {
      return data.id;
    }
    return new Error("Erro ao criar os dados");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Não foi possível criar os dados"
    );
  }
};

const updatePartnerById = async (
  id: number,
  dados: IPartner
): Promise<void | Error> => {
  try {
    await api.put(`/pessoas/${id}`, dados);
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
        "Não foi possível atualizar os dados"
    );
  }
};

// export const setPartners = async (dados: IDados) => {
//   try {
//     return await api.post("/parceiro/salvar", dados);
//   } catch (err) {
//     throw err;
//   }
// };

const generateSpreadsheet = async () => {
  try {
    var response = await api.get(
      "/parceiro/GerarPlanilha?$filter=ativo eq true&$orderby=dataCriacao desc"
    );
    return response;
  } catch (err) {
    throw err;
  }
};
