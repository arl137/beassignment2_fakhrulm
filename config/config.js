require('dotenv').config();


module.exports = {
  username: process.env.DB_USERNAME || 'neondb_owner',
  password: process.env.DB_PASSWORD || 'J4OyKnz3gUxj',
  database: process.env.DB_NAME || 'neondb',
  host: process.env.DB_HOST || 'ep-round-sea-a5wbvsyp.us-east-2.aws.neon.tech',
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
     }
  },
   define: {
    timestamps: true,
    underscored: true,
    freezeTableName: true
   }
};
