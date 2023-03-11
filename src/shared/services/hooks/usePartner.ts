import { useMutation, useQuery, MutateOptions } from "react-query";

import { api } from "../axios";
import { ApiResponseModel } from "../schemas/default";
import { IPartner, IPartnerCreate, IPartnerUpdate } from "../schemas/partners";

export function useGetPartner() {
  return useQuery(["partner"], async () => {
    const { data } = await api.get<ApiResponseModel<IPartner[]>>("/parceiro");
    return data.value;
  });
}

export function useGetPartnerId(id: number) {
  return useQuery(["partner", id], async () => {
    const { data } = await api.get<ApiResponseModel<IPartner>>(
      `/parceiro/${id}`
    );
    return data;
  });
}

export function useDeletePartner(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (id: number) => {
      await api.delete(`/parceiro/${id}`);
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
      await api.put(`/parceiro`, partner);
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
      await api.post(`/parceiro`, partner);
    },
    {
      ...options,
    }
  );
}
