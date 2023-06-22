import AuthErorr from "../errors/AuthError.js";

export default (err, req, res, next) => {
  console.log(err);
  if (err instanceof AuthErorr) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Unexpected error" });
};
