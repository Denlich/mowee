import { Schema, model } from "mongoose";

const movieSchema = Schema({
  imdbID: {
    type: String,
    required: true,
    unique: true,
  },
  poster: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: undefined,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Movie", movieSchema);
