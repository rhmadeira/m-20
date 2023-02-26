export interface ApiResponse<T> {
  count: number;
  dataRequisicao: Date;
  errors: any[];
  hasError: boolean;
  hasSuccess: boolean;
  httpStatusCode: string;
  value: T;
  results: any;
}
export interface ITokenResponse {
  authenticated: boolean;
  created: Date;
  expiration: Date;
  accessToken: string;
  message: string;
  refreshToken: string;
}
export interface ILoginResponse {
  id: string;
  token: ITokenResponse;
  nome: string;
  primeiroLogin: boolean;
  termoUso: boolean;
  authenticated: boolean;
  message: string;
}

export interface ILoginRequest {
  userName: string;
  password: string;
  grantTypes: string;
}

// export const postLogin = async (
//   payload: ILoginRequest
// ): Promise<ApiResponse<ILoginResponse>> => {
//   const { data } = await API.post("/Login", payload);
//   return data;
// };
