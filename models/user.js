module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  });

  return User;
};
