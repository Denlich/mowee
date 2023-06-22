import express from "express";
import mongoose from "mongoose";
import dtoenv from "dotenv";
import cors from "cors";

import router from "./routes/router.js";
import errorMiddleware from "./middleware/error-middleware.js";

dtoenv.config();

const app = express();

app.use(cors());
app.use(express.json());
router(app);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB)
      .then(() => console.log("Connected to db..."))
      .catch((e) => console.log("Could not connect to db...", e));

    app.listen(process.env.PORT, console.log("App is listenings..."));
  } catch (e) {
    console.log(e);
  }
};

start();
