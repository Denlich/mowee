import MovieService from "../services/MovieService.js";
import ApiError from "../errors/ApiError.js";
import MovieModel from "../models/Movie.js";

class MovieController {
  save = async (req, res, next) => {
    try {
      const { imdbID, poster } = req.body;
      const userId = req.userId;
      const result = await MovieService.save(imdbID, poster, userId);
      return res.status(200).json(result);
    } catch (e) {
      console.log(e);
      return next(new ApiError(500, "Some error on server", e.message));
    }
  };

  getSaved = async (req, res, next) => {
    try {
      const movies = await MovieModel.find({ user: req.userId });
      return res.json(movies);
    } catch (e) {
      console.log(e);
      return next(new ApiError(500, "Some error on server", e.message));
    }
  };
}

export default new MovieController();
