import { useMutation, useQuery, MutateOptions } from "react-query";

import { api } from "../axios";
import {
  createProcess,
  deleteProcess,
  getProcessById,
  updateProcess,
} from "../process";
import { ApiResponseModel, IIds } from "../schemas/default";
import { ICreateProcess, IProcesso } from "../schemas/process";

export function useGetProcessById(id: IIds) {
  return useQuery(["partner", id], () => getProcessById(id));
}

export function useCreateProcess(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (process: ICreateProcess) => createProcess(process),
    {
      ...options,
    }
  );
}

export function useDeleteProcess(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(async (id: IIds) => deleteProcess(id), {
    ...options,
  });
}

export function useUpdateProcess(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(async (process: IProcesso) => updateProcess(process), {
    ...options,
  });
}
