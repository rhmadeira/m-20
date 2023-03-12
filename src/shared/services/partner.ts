import { api } from "./axios";
import { ApiResponseModel } from "./schemas/default";
import { IPartner, IPartnerCreate, IPartnerUpdate } from "./schemas/partners";

export const getAllPartner = async () => {
  const { data } = await api.get<ApiResponseModel<IPartner[]>>("/parceiro");
  return data;
};

export const getPartnerById = async (id: number) => {
  const { data } = await api.get<ApiResponseModel<IPartner>>(`/parceiro/${id}`);
  return data;
};

export const deletePartner = async (id: number) => {
  await api.delete(`/parceiro/${id}`);
};

export const updatePartner = async (partner: IPartnerUpdate) => {
  await api.put(`/parceiro`, partner);
};

export const createPartner = async (partner: IPartnerCreate) => {
  await api.post(`/parceiro`, partner);
};
