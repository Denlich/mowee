import MovieModal from "../models/Movie.js";

class MovieService {
  save = async (imdbID, Poster, userId) => {
    const movie = await MovieModal.findOne({ user: userId, imdbID: imdbID });

    if (movie) {
      console.log(movie);
      return MovieModal.deleteOne({ _id: movie._id });
    }

    const saved = await MovieModal.create({
      imdbID,
      Poster,
      user: userId,
    });
    return saved;
  };
}

export default new MovieService();
