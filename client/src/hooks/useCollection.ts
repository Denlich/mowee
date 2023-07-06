import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Collection from "../entities/Collection";

const useCollection = (id: string) => {
  const apiClient = new APIClient<Collection>(`/collection/${id}`);

  return useQuery({
    queryKey: ["collection", id],
    queryFn: apiClient.get,
  });
};

export default useCollection;
