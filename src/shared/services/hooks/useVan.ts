import { useQuery } from "react-query";
import { api } from "../axios";

type IVan = {
  id: string;
  nome: string;
};

type GetVanResponse = {
  value: IVan[];
  totalCount: number;
};

async function getVan(): Promise<GetVanResponse> {
  const { data } = await api.get(`/Van`);
  return {
    value: data.value,
    totalCount: data.count,
  };
}

export function useVan() {
  return useQuery(["Van"], () => getVan(), {
    staleTime: 60000, // 1 minute
  });
}
