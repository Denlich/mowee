import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.SCRET_KEY);

      req.userId = decode._id;

      next();
    } catch (e) {
      console.log(e);
      return res.status(403).json({
        message: "No access",
      });
    }
  } else {
    console.log(e);
    return res.status(403).json({
      message: "No access",
    });
  }
};
