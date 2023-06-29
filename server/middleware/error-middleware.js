import ApiErorr from "../errors/ApiError.js";

export default (err, req, res, next) => {
  console.log(err);
  if (err instanceof ApiErorr) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Unexpected error" });
};
