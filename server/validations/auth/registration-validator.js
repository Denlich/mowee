import { body } from "express-validator";

export const registrationValidation = [
  body("name", "Input name").isString().isLength({ min: 2, max: 20 }),
  body("usrename", "Username must be at least 2 characters and no more than 30")
    .isString()
    .isLength({ min: 2, max: 30 }),
  body("password", "Password must be at least 5 characters long")
    .isString()
    .isLength({ min: 5, max: 1024 }),
];
