import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mowee.onrender.com",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  auth = (config: any) => {
    return axiosInstance.post(this.endpoint, config).then((res) => res.data);
  };

  getMe = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
