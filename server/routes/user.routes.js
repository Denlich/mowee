import { Router } from "express";
import checkAuth from "../middleware/check-auth.js";
import UserController from "../controllers/UserController.js";

const userRouter = new Router();

userRouter.get("/getMe", checkAuth, UserController.getMe);

export default userRouter;
