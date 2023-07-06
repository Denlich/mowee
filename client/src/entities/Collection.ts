import Movie from "./Movie";

export default interface Collection {
  _id: string;
  title: string;
  movies: Movie[];
}
