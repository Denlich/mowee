import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Collection from "../entities/Collection";

const apiClient = new APIClient<Collection[]>("/collection/");

const useCollections = () =>
  useQuery({
    queryKey: ["collections"],
    queryFn: apiClient.get,
  });

export default useCollections;
