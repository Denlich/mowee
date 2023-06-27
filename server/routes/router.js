import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";

export default (app) => {
  app.use("/auth", authRouter);
  app.use("/user", userRouter);
};
