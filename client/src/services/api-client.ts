import axios from "axios";
import { BASE_URL } from "@env";
import authStore from "../stores/auth-store";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const { token } = authStore.getState();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  auth = (config: any) => {
    return axiosInstance.post(this.endpoint, config).then((res) => res.data);
  };

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  save = (config: any) => {
    return axiosInstance.post(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
