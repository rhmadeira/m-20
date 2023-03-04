import { api } from "./axios";
import { ApiResponseModel } from "./hooks/usePartner";
import { IPartner } from "./schemas/partners";
import { ICommunication, IIntegration } from "./schemas/process";

interface ApiResponseModelEnums<T> {
  results: T;
}
export const getProcessPartner = async (id: number) => {
  const { data } = await api.get<ApiResponseModel<IPartner>>(
    `/parceiros/${id}`
  );
  return data;
};

export const getCommunicationProcessPartner = async () => {
  const { data } = await api.get<ApiResponseModelEnums<ICommunication[]>>(
    `/Dominio/enums/EnumComunicacao`
  );
  return data;
};

export const getIntegrationProcessPartner = async () => {
  const { data } = await api.get<ApiResponseModelEnums<IIntegration[]>>(
    `/Dominio/enums/EnumTipoIntegracao`
  );
  return data;
};
