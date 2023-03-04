import { useQuery } from "react-query";
import { api } from "../axios";

type IVan = {
  id: string;
  nome: string;
  comunicacao: number;
};

interface ApiResponseModel<T> {
  value: T;
  count: number;
  hasSuccess: boolean;
  hasError: boolean;
  errors: any[];
  httpStatusCode: string;
  dataRequisicao: Date;
}

export function useGetVan() {
  return useQuery(["van"], async () => {
    const { data } = await api.get<ApiResponseModel<IVan[]>>("/van");
    return data.value;
  });
}
