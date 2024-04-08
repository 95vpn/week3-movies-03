const { getAll, create, getOne, remove, update, setMovieToGenre, setMovieToActors, setMovieToDirectors } = require('../controllers/movie.controllers');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(getAll)
    .post(create);

routerMovie.route('/:id/genres')
    .post(setMovieToGenre)

routerMovie.route('/:id/actors')
    .post(setMovieToActors)

routerMovie.route('/:id/directors')
    .post(setMovieToDirectors)

routerMovie.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerMovie;