import { api } from "./axios";
import { ApiResponseModel } from "./hooks/usePartner";
import { IVan } from "./schemas/partners";

export const getVanProcessPartner = async () => {
  const { data } = await api.get<ApiResponseModel<IVan[]>>(`/van`);
  return data;
};
