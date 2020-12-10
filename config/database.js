require('dotenv').config(); // this is important!

module.exports = {
    "development": {
      "username": process.env.DB_USER,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "port": process.env.DB_PORT,
      "dialect": process.env.DB_DIALECT
    },
    "test": {
        "username": "admin",
        "password": 'password',
        "database": "compman_test",
        "host": "localhost",
        "dialect": "mysql"
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_USERNAME,
      "database": process.env.DB_USERNAME,
      "host": process.env.DB_USERNAME,
      "port": process.env.DB_USERNAME,
      "dialect": process.env.DB_USERNAME
    }
}