import {
  useMutation,
  useQuery,
  useQueryClient,
  MutateOptions,
} from "react-query";

import { api } from "../axios";

type IPartner = {
  id: number;
  nome: string;
  cnpj: string;
  razaoSocial: string;
  email: string;
  telefone: string;
};

type GetPartnerResponse = {
  value: IPartner[];
  totalCount: number;
};
type GetPartnerIdResponse = {
  value: IPartner;
  totalCount: number;
};

export function useGetPartner() {
  return useQuery(
    ["partner"],
    async () => {
      const { data } = await api.get<GetPartnerResponse>("/parceiros");
      if (data) console.log(data.value);
      return {
        value: data.value,
        // totalCount: data.totalCount,
      };
    },
    {
      staleTime: 60000, // 1 minute
    }
  );
}

export function useGetPartnerId(id: number) {
  return useQuery(
    ["partner", id],
    async () => {
      const { data } = await api.get<GetPartnerIdResponse>(`/parceiros/${id}`);
      return data;
    },
    {
      staleTime: 60000, // 1 minute
    }
  );
}

export function useDeletePartner(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (id: number) => {
      await api.delete(`/parceiros/${id}`);
    },
    {
      ...options,
    }
  );
}

export function useUpdatePartner(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (partner: IPartner) => {
      await api.put(`/parceiros`, partner);
    },
    {
      ...options,
    }
  );
}
