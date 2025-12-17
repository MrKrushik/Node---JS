const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movie_name: {
        type: String,
        required: true,
    },
    movie_director: {
        type: String,
        required: true
    },
    movie_year: {
        type: Number,
        required: true,
    },
    movie_genre: {
        type: String,
        required: true
    },
    movie_image: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model("Movie", movieSchema, "Movies");

module.exports = Movie;