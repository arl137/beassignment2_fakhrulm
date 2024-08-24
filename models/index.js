const Sequelize = require("sequelize");
const config = require("../config/config"); // Adjust the path as necessary

const sequelize = new Sequelize(
  config.database, // Ensure these values are correctly pulled from config
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: config.define,
    dialectOptions: config.dialectOptions,
  },
);


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Model definitions
db.User = require("./user")(sequelize, Sequelize.DataTypes);
db.Movie = require("./movie")(sequelize, Sequelize.DataTypes);

// You can define relationships here if necessary, for example:
// db.User.hasMany(db.Movie, { foreignKey: 'userId' });
// db.Movie.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
// module.exports = sequelize;
