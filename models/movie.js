module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define("movie", {
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    trailerurl: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    status: DataTypes.STRING,
  });

  return Movie;
};
