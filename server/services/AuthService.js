import bcrypt from "bcrypt";
import { genearateToken } from "../services/TokenService.js";
import UserModel from "../models/User.js";
import UserDto from "../DTOs/UserDto.js";
import AuthErorr from "../errors/AuthError.js";

class AuthService {
  registration = async (name, username, password) => {
    const candidate = await UserModel.findOne({ username });
    if (candidate) {
      throw AuthErorr.BadRequest("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      name,
      username,
      password: hashPassword,
    });

    const userDto = new UserDto(user);
    const token = genearateToken({ ...userDto });

    return token;
  };

  login = async (username, password) => {
    const user = await UserModel.findOne({ username });

    if (!user) {
      throw AuthErorr.BadRequest("User with such name doesn't existe");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw AuthErorr.BadRequest("Password is inccorect");
    }

    const userDto = new UserDto(user);
    const token = genearateToken({ ...userDto });

    return token;
  };
}

export default new AuthService();
