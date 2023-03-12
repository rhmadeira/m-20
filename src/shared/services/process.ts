import { api } from "./axios";
import { ApiResponseModel, IIds } from "./schemas/default";
import { IPartner } from "./schemas/partners";
import { ICreateProcess, IProcesso } from "./schemas/process";

interface Iids {
  idParceiro: number;
  idProcesso: number;
}

export const getProcessPartner = async (id: number) => {
  const { data } = await api.get<ApiResponseModel<IPartner>>(`/parceiro/${id}`);
  return data;
};

export const getProcessById = async (id: IIds) => {
  const { data } = await api.get<ApiResponseModel<IProcesso>>(
    `/parceiro/${id.idParceiro}/processo/${id.idProcesso}`
  );
  return data;
};

export const deleteProcess = async (id: IIds) => {
  await api.delete(`/parceiro/${id.idParceiro}/processo/${id.idProcesso}`);
};

export const updateProcess = async (process: IProcesso) => {
  await api.put(`/parceiro/${process.parceiroId}/processo`, process);
};

export const createProcess = async (process: ICreateProcess) => {
  await api.post(`/parceiro/${process.parceiroId}/processo`, process);
};
