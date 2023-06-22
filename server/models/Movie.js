import { Schema, model } from "mongoose";

const movieSchema = Schema({
  title: {
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
