import { Schema, model } from "mongoose";

const movieSchema = Schema(
  {
    imdbID: {
      type: String,
      required: true,
      unique: true,
    },
    Poster: {
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default model("Movie", movieSchema);
