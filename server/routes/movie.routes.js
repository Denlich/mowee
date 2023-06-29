import { Router } from "express";

import MovieController from "../controllers/MovieController.js";
import checkAuth from "../middleware/check-auth.js";

const movieRouter = new Router();

movieRouter.get("/", checkAuth, MovieController.getSaved);
movieRouter.post("/save/:imdbID", checkAuth, MovieController.save);

export default movieRouter;
