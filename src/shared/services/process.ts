import { api } from "./axios";
import { ApiResponseModel } from "./schemas/default";
import { IPartner } from "./schemas/partners";
import { IProcesso } from "./schemas/process";

interface Iids {
  idParceiro: number;
  idProcesso: number;
}

export const getProcessPartner = async (id: number) => {
  const { data } = await api.get<ApiResponseModel<IPartner>>(`/parceiro/${id}`);
  return data;
};

export const getProcessPartnerById = async (id: Iids) => {
  const { data } = await api.get<ApiResponseModel<IProcesso>>(
    `/parceiro/${id.idParceiro}/processo/${id.idProcesso}`
  );
  return data;
};
