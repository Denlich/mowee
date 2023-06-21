import express from "express";
import mongoose from "mongoose";
import dtoenv from "dotenv";

const app = express();
dtoenv.config();

const start = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB)
      .then(() => console.log("Connected to db..."))
      .catch((e) => console.log("Could not connect to db...", e));

    app.listen(process.env.PORT, console.log("App is listenings"));
  } catch (e) {
    console.log(e);
  }
};

start();
