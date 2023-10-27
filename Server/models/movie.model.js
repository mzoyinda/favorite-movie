const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* This is creating a new schema for the movie model. */
const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    imdbRating: {
      type: String,
      required: false,
    },
    myRating: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
