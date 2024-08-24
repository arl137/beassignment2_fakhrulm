const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(
  config.database,
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

db.User = require("./user")(sequelize, Sequelize.DataTypes);
db.Movie = require("./movie")(sequelize, Sequelize.DataTypes);

module.exports = db;