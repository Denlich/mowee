import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mowee.onrender.com",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  auth = (config: any) => {
    return axiosInstance.post(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
