export interface IApiResponse<T> {
  data?: T;
  status: number;
  error?: string;
  success: boolean;
}

export interface IApiConfig {
  baseUrl: string;
  token?: string;
}

export interface IApiRequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}
