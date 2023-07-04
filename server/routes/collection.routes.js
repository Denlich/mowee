import { Router } from "express";
import CollectionController from "../controllers/CollectionController.js";
import checkAuth from "../middleware/check-auth.js";

const collectionRouter = new Router();

collectionRouter.get("/", checkAuth, CollectionController.getAll);
collectionRouter.get("/:id", CollectionController.getSome);
collectionRouter.post("/create", checkAuth, CollectionController.create);

export default collectionRouter;
