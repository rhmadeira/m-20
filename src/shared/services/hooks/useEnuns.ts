import { useQuery } from "react-query";
import { api } from "../axios";
import { ICommunication, IIntegration } from "../schemas/process";

export interface ApiResponseModel<T> {
  value: T;
  count: number;
  hasSuccess: boolean;
  hasError: boolean;
  errors: any[];
  httpStatusCode: string;
  dataRequisicao: Date;
}
interface ApiResponseModelEnuns<T> {
  results: T;
}

export function useGetTipoIntegracao() {
  return useQuery(["tipoIntegracao"], async () => {
    const { data } = await api.get<ApiResponseModelEnuns<IIntegration[]>>(
      `/Dominio/enums/EnumTipoIntegracao`
    );
    return data.results;
  });
}
export function useGetTipoComunicacao() {
  return useQuery(["tipoComunicacao"], async () => {
    const { data } = await api.get<ApiResponseModelEnuns<ICommunication[]>>(
      `/Dominio/enums/EnumComunicacao`
    );
    return data.results;
  });
}
