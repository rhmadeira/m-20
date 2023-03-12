export interface ApiResponseModel<T> {
  value: T;
  count: number;
  hasSuccess: boolean;
  hasError: boolean;
  errors: any[];
  httpStatusCode: string;
  dataRequisicao: Date;
}

export interface IIds {
  idParceiro: string;
  idProcesso: string;
}
