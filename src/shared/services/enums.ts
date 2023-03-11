import { api } from "./axios";
import { ICommunication, IIntegration } from "./schemas/enums";

interface ApiResponseModelEnums<T> {
  results: T;
}

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
