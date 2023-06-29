import MovieModal from "../models/Movie.js";

class MovieService {
  save = async (imdbID, poster, userId) => {
    const movie = await MovieModal.create({
      imdbID,
      poster,
      user: userId,
    });
    return movie;
  };
}

export default new MovieService();
