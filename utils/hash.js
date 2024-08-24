const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    throw new Error('Failed to hash password: ' + error.message);
  }
};

const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error('Password comparison failed: ' + error.message);
  }
};

module.exports = {
  hashPassword,
  comparePassword
};
