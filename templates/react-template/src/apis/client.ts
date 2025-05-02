import { createUrl } from "@/utils/createUrl";
import { IApiConfig, IApiRequestOptions, IApiResponse } from "./types";

export class ApiClient {
  private config: IApiConfig;

  constructor(config: IApiConfig) {
    this.config = config;
  }

  private getHeaders(token?: string): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
  }

  private async request<T>(
    url: string,
    options: IApiRequestOptions
  ): Promise<IApiResponse<T>> {
    try {
      const { method, body, params, headers: customHeaders } = options;
      const fullUrl = createUrl(`${this.config.baseUrl}${url}`, params);

      const response = await fetch(fullUrl, {
        method,
        headers: {
          ...this.getHeaders(this.config.token),
          ...customHeaders,
        },
        credentials: "include",
        body: body ? JSON.stringify(body) : undefined,
      });

      const data = await response.json();

      return {
        data: data.data,
        status: response.status,
        success: response.ok,
      };
    } catch (e: any) {
      return {
        status: -1,
        error: e.toString(),
        success: false,
      };
    }
  }

  async get<T>(
    url: string,
    params?: Record<string, any>
  ): Promise<IApiResponse<T>> {
    return this.request<T>(url, { method: "GET", params });
  }

  async post<T>(url: string, body?: any): Promise<IApiResponse<T>> {
    return this.request<T>(url, { method: "POST", body });
  }

  async put<T>(url: string, body?: any): Promise<IApiResponse<T>> {
    return this.request<T>(url, { method: "PUT", body });
  }

  async delete<T>(url: string, body?: any): Promise<IApiResponse<T>> {
    return this.request<T>(url, { method: "DELETE", body });
  }

  async patch<T>(url: string, body?: any): Promise<IApiResponse<T>> {
    return this.request<T>(url, { method: "PATCH", body });
  }
}
