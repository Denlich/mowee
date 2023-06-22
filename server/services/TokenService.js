import jwt from "jsonwebtoken";

export const genearateToken = (payload) => {
  return jwt.sign(payload, process.env.SCRET_KEY, { expiresIn: "24h" });
};
