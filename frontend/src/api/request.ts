import axios, { AxiosRequestConfig } from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
});

async function request<T>(config: AxiosRequestConfig): Promise<T> {
  const response = await service.request<T>(config);

  return response.data;
}

export { request };
