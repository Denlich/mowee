import authRouter from "./auth.routes.js";
import collectionRouter from "./collection.routes.js";
import movieRouter from "./movie.routes.js";
import userRouter from "./user.routes.js";

export default (app) => {
  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/movie", movieRouter);
  app.use("/collection", collectionRouter);
};
