// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('./index');  // Assuming index.js sets up the Sequelize connection

// class Movie extends Model {}

// Movie.init({
//     title: DataTypes.STRING,
//     synopsis: DataTypes.TEXT,
//     trailerUrl: DataTypes.STRING,
//     imgUrl: DataTypes.STRING,
//     rating: DataTypes.INTEGER,
//     status: DataTypes.STRING,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
// }, { sequelize, modelName: 'Movie' });

// // process.exit(1);
// module.exports = Movie;

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define("movie", {
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    trailerurl: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    status: DataTypes.STRING,
    // createdat: DataTypes.DATE,
    // updatedat: DataTypes.DATE,
  });

  return Movie;
};
