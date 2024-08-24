const { Movie } = require("../models"); // Ensure you have a Movie model set up correctly

const listMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        // const formattedMovies = movies.map(movie => ({
        //     id: movie.id,
        //     title: movie.title,
        //     synopsis: movie.synopsis,
        //     trailerurl: movie.trailerurl,
        //     imgurl: movie.imgurl,
        //     rating: movie.rating,
        //     status: movie.status,
        //     createdAt: movie.createdat.toISOString(),
        //     updatedAt: movie.updatedat.toISOString()
        // }));
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve movies",
            error: error.message,
        });
    }
};

// const inputMovie = async (req, res) => {
//     try {
//         const { title, synopsis, trailerUrl, imgUrl, rating, status } = req.body;

//         // Check for missing fields
//         if (!title || !synopsis || !trailerUrl || !imgUrl || !rating || !status) {
//             return res.status(400).json({
//                 message: "Input Movies Failed",
//                 error: "All fields must be filled"
//             });
//         }

//         const movie = await Movie.create({
//             title,
//             synopsis,
//             trailerUrl,
//                 imgUrl,
//             rating,
//             status
//         });

//         res.status(201).json({
//             message: "Success creating new movie"
//         });
//     } catch (error) {
//         // Provide more specific error message based on the type of error
//         console.error(error);
//         let errorMessage = "Input Movies failed";
//         res.status(500).json({ message: errorMessage, error: error.message });
//     }
// };

module.exports = {
    listMovies,
};
