const express = require("express");

const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.controller");

const router = express.Router();

/* Creating the routes for the movie controller. */
router.get("/movies", getMovies);

router.get("/movies/:id", getMovie);

router.post("/movies", createMovie);

router.delete("/movies/:id", deleteMovie);

module.exports = router;