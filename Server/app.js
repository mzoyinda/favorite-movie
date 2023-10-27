const express = require("express");

const MovieRoutes = require("./routes/movie.route");

const app = express();

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());


// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

/* Telling the server to use the routes in the MovieRoutes file. */
app.use("/api", MovieRoutes);

module.exports = app;