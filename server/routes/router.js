import authRouter from "./auth.routes.js";

export default function (app) {
  app.use("/auth", authRouter);
}
