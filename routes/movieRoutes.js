const express = require('express');
const router = express.Router();
const {listMovies} = require('../controllers/movieController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/listmovies', verifyToken, listMovies);

module.exports = router;
