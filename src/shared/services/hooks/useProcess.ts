import { useMutation, useQuery, MutateOptions } from "react-query";

import { api } from "../axios";
import { ApiResponseModel } from "../schemas/default";
import { ICreateProcess, IProcesso } from "../schemas/process";

interface ids {
  idParceiro: string;
  idProcesso: string;
}

export function useGetProcessById(id: ids) {
  return useQuery(["partner", id], async () => {
    const { data } = await api.get<ApiResponseModel<IProcesso>>(
      `/parceiro/${id.idParceiro}/processo/${id.idProcesso}`
    );
    return data;
  });
}

export function useCreateProcess(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (process: ICreateProcess) => {
      await api.post(`/parceiro/${process.parceiroId}/processo`, process);
    },
    {
      ...options,
    }
  );
}

export function useDeleteProcess(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (id: ids) => {
      await api.delete(`/parceiro/${id.idParceiro}/processo/${id.idProcesso}`);
    },
    {
      ...options,
    }
  );
}

export function useUpdateProcess(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (process: IProcesso) => {
      await api.put(`/parceiro/${process.parceiroId}/processo`, process);
    },
    {
      ...options,
    }
  );
}
