import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Movie from "../entities/Movie";

const useMovie = (id: Readonly<any>) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () =>
      axios
        .get<Movie>(
          `http://www.omdbapi.com/?i=${id}&plot=full&apikey=6b3739ab&r=json`
        )
        .then((res) => res.data),
  });
};

export default useMovie;
