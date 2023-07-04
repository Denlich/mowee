import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import SavedMovie from "../entities/SavedMovie";

const apiClient = new APIClient<SavedMovie[]>("/movie/");

const useSaved = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: apiClient.get,
  });
};

export default useSaved;
