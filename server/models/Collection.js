import { Schema, model } from "mongoose";

const collectionSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  movies: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
    default: [],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Collection", collectionSchema);
