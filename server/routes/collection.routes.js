import { Router } from "express";
import CollectionController from "../controllers/CollectionController.js";
import checkAuth from "../middleware/check-auth.js";

const collectionRouter = new Router();

collectionRouter.get("/", checkAuth, CollectionController.getAll);
collectionRouter.get("/:id", checkAuth, CollectionController.getSome);
collectionRouter.post("/create", checkAuth, CollectionController.create);
collectionRouter.put(
  "/:id/add",
  checkAuth,
  CollectionController.addToCollection
);
collectionRouter.delete("/delete/:id", checkAuth, CollectionController.delete);

export default collectionRouter;
