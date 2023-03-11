import { api } from "./axios";
import { ApiResponseModel } from "./schemas/default";
import { IVan } from "./schemas/van";

export const getVanProcessPartner = async () => {
  const { data } = await api.get<ApiResponseModel<IVan[]>>(`/van`);
  return data;
};
