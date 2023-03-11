import { useQuery } from "react-query";
import { api } from "../axios";
import { ApiResponseModel } from "../schemas/default";
import { IVan } from "../schemas/van";

export function useGetVan() {
  return useQuery(["van"], async () => {
    const { data } = await api.get<ApiResponseModel<IVan[]>>("/van");
    return data.value;
  });
}
