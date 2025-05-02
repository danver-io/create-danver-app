import { ApiClient } from "./client";

const API_URL = import.meta.env.VITE_API_URL || "https://api.danver.io";

export const apiClient = new ApiClient({
  baseUrl: API_URL,
});

// Helper functions for common use cases
export const apiGet = apiClient.get.bind(apiClient);
export const apiPost = apiClient.post.bind(apiClient);
export const apiPut = apiClient.put.bind(apiClient);
export const apiDelete = apiClient.delete.bind(apiClient);
export const apiPatch = apiClient.patch.bind(apiClient);
