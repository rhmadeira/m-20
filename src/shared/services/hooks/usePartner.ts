import { useMutation, useQuery, MutateOptions } from "react-query";
import { IPartnerCreate, IPartnerUpdate } from "../schemas/partners";
import {
  createPartner,
  deletePartner,
  getAllPartner,
  getPartnerById,
  updatePartner,
} from "../partner";

export function useGetAllPartner() {
  return useQuery(["partner"], getAllPartner);
}

export function useGetPartnerById(id: number) {
  return useQuery(["partner", id], () => getPartnerById(id));
}

export function useDeletePartner(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(async (id: number) => deletePartner(id), {
    ...options,
  });
}

export function useUpdatePartner(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (partner: IPartnerUpdate) => updatePartner(partner),
    {
      ...options,
    }
  );
}

export function useCreatePartner(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (partner: IPartnerCreate) => createPartner(partner),
    {
      ...options,
    }
  );
}
