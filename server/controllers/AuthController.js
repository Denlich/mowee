import { validationResult } from "express-validator";
import AuthService from "../services/AuthService.js";
import ApiErorr from "../errors/ApiError.js";

class AuthController {
  registarion = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiErorr.BadRequest("Validation error", errors.array()));
      }

      const { name, username, password } = req.body;
      const userToken = await AuthService.registration(
        name,
        username,
        password
      );
      return res.json({ userToken });
    } catch (e) {
      next(e);
    }
  };

  login = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiErorr.BadRequest("Validation error", errors.array()));
      }

      const { username, password } = req.body;
      const userToken = await AuthService.login(username, password);
      return res.json({ userToken });
    } catch (e) {
      next(e);
    }
  };
}

export default new AuthController();
