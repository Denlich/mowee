import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import { registrationValidation } from "../validations/auth/registration-validator.js";
import { loginValidation } from "../validations/auth/login-validation.js";

const authRouter = new Router();

authRouter.post(
  "/registration",
  registrationValidation,
  AuthController.registarion
);
authRouter.post("/login", loginValidation, AuthController.login);

export default authRouter;
