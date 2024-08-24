require('dotenv').config();
const express = require('express');
const sequelize = require('./models').sequelize;

// process.exit(1)

const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes'); // Make sure this file exists and is correctly implemented

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);
app.use('/', userRoutes); // Now correctly imported and defined

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
});
