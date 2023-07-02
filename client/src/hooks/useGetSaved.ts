import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface SavedMovie {
  imdbID: string;
  poster: string;
}

const apiClient = new APIClient<SavedMovie[]>("/movie/");

const useGetSaved = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: apiClient.getSaved,
  });
};

export default useGetSaved;
