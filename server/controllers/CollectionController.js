import CollectionModel from "../models/Collection.js";

class CollectionController {
  getAll = async (req, res, next) => {
    try {
      const collections = await CollectionModel.find({ user: req.userId });
      return res.status(200).json(collections);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  create = async (req, res, next) => {
    try {
      const { title } = req.body;
      const userId = req.userId;
      const collection = await CollectionModel.create({ title, user: userId });
      return res.status(200).json(collection);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  getSome = async (req, res, next) => {
    try {
      const collecion = await CollectionModel.findOne({
        user: req.userId,
        _id: req.params.id,
      }).populate("movies");
      console.log(collecion);
      return res.status(200).json(collecion);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  addToCollection = async (req, res, next) => {
    try {
      const id = req.params.id;
      const movie = req.body.movie;
      const collection = await CollectionModel.findOneAndUpdate(
        { _id: id, user: req.userId, movies: { $ne: movie } },
        { $push: { movies: movie } }
      );
      return res.status(200).json(collection);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  delete = async (req, res, next) => {
    try {
      const id = req.params.id;
      const collection = await CollectionModel.deleteOne({
        _id: id,
        user: req.userId,
      });
      return res.status(200).json(collection);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}

export default new CollectionController();
