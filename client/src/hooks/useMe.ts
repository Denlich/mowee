import User from "../entities/User";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<User>("/user/getMe");

const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: apiClient.get,
  });
};

export default useMe;
