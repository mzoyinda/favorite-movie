const Movie = require("../models/movie.model");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "some error occured",
    });
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "some error occured",
    });
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).send({
      message: "movie created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "some error occured",
    });
  }
};

const deleteMovie = async (req, res) => {
  const PASSCODE = process.env.PASSCODE;
  const requestCode = req.body.code;

  if (PASSCODE === requestCode) {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      res.status(200).send({
        message: "success",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "some error occured",
      });
    }
  } else {
    res.status(500).send({
      message: "unauthorized",
    });
  }
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  deleteMovie,
};
