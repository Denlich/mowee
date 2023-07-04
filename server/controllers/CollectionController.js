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
      res.status(200).json(collection);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  getSome = async (req, res, next) => {
    try {
      const collecion = await CollectionModel.findOne({ _id: req.params.id });
      res.status(200).json(collecion);
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}

export default new CollectionController();
