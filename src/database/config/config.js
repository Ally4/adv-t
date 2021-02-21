require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    ssl: true,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    ssl: true,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    ssl: true,
  },
};
