const path = require('path');
const express = require('express');
const router = express.Router();

const user = require('../models/user');
const movieModel = require('../models/moviesmodel');

const movieController = require('../controllers/Movie');
//routes
router.post('/movie',movieController.onemovie)
router.put('/movie/rating',movieController.onemovieRating);
router.post('/movie/rating',movieController.onemovieRatingshow);

module.exports = router;