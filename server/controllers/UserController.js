import UserDto from "../dtos/UserDto.js";
import ApiErorr from "../errors/ApiError.js";
import UserModel from "../models/User.js";

class UserController {
  getMe = async (req, res, next) => {
    try {
      const user = await UserModel.findById(req.userId);

      if (!user) {
        return next(
          ApiErorr.BadRequest("User with this username doesn't existe")
        );
      }

      const userDto = new UserDto(user);
      res.json(userDto);
    } catch (e) {
      console.log(e);
      return next(new ApiErorr(500, "Some error on server", e.array()));
    }
  };
}

export default new UserController();
