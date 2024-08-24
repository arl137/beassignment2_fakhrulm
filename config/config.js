require('dotenv').config();  // Ensure that environment variables are loaded from .env file


module.exports = {
  username: process.env.DB_USERNAME || 'neondb_owner',
  password: process.env.DB_PASSWORD || 'J4OyKnz3gUxj',
  database: process.env.DB_NAME || 'neondb',
  host: process.env.DB_HOST || 'ep-round-sea-a5wbvsyp.us-east-2.aws.neon.tech',
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres', // or another dialect like 'mysql', 'sqlite'
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false  // Note: only use this for certain environments
     }
  },
   define: {
    timestamps: true,
    underscored: true,
    freezeTableName: true
   }
};
