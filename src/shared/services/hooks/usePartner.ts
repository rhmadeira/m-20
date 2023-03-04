import { useMutation, useQuery, MutateOptions } from "react-query";

import { api } from "../axios";
import { IPartner, IPartnerCreate, IPartnerUpdate } from "../schemas/partners";

export interface ApiResponseModel<T> {
  value: T;
  count: number;
  hasSuccess: boolean;
  hasError: boolean;
  errors: any[];
  httpStatusCode: string;
  dataRequisicao: Date;
}

export function useGetPartner() {
  return useQuery(["partner"], async () => {
    const { data } = await api.get<ApiResponseModel<IPartner[]>>("/parceiros");
    return data.value;
  });
}

export function useGetPartnerId(id: number) {
  return useQuery(
    ["partner", id],
    async () => {
      const { data } = await api.get<ApiResponseModel<IPartner>>(
        `/parceiros/${id}`
      );
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
    async (partner: IPartnerUpdate) => {
      await api.put(`/parceiros`, partner);
    },
    {
      ...options,
    }
  );
}

export function useCreatePartner(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (partner: IPartnerCreate) => {
      await api.post(`/parceiros`, partner);
    },
    {
      ...options,
    }
  );
}
