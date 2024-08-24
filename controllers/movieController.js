const { Movie } = require("../models"); // Ensure you have a Movie model set up correctly

const listMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve movies",
            error: error.message,
        });
    }
};

module.exports = {
    listMovies,
};
