import { create } from "zustand";
import SavedMovie from "../entities/SavedMovie";

interface SavedMoviesStore {
  savedMovies: SavedMovie[];
  setSavedMovies: (movie: SavedMovie[]) => void;
  addMovie: (moive: SavedMovie) => void;
  deleteMovie: (imdbID: string) => void;
}

const useSavedMoviesStore = create<SavedMoviesStore>((set) => ({
  savedMovies: [],
  setSavedMovies: (movies) => set(() => ({ savedMovies: movies })),
  addMovie: (movie) =>
    set((store) => ({ savedMovies: [...store.savedMovies, movie] })),
  deleteMovie: (imdbID) =>
    set((store) => ({
      savedMovies: store.savedMovies.filter((m) => m.imdbID !== imdbID),
    })),
}));

export default useSavedMoviesStore;
