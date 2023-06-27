import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  auth = (config: AxiosRequestConfig) => {
    return axiosInstance
      .post(this.endpoint, config)
      .then((res) => res.data)
      .catch((err) => err);
  };
}

export default APIClient;
