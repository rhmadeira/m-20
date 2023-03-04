import { useMutation, useQuery, MutateOptions } from "react-query";

import { api } from "../axios";
import { ICreateProcess } from "../schemas/process";

export function useCreateProcess(
  options?: MutateOptions<unknown, unknown, unknown>
) {
  return useMutation(
    async (process: ICreateProcess) => {
      await api.post(`/processo`, process);
    },
    {
      ...options,
    }
  );
}
