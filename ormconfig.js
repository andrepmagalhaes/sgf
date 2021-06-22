require('dotenv').config();

module.exports = {
    "type": "postgres",
    "host": DB_HOST,
    "port": DB_PORT,
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "synchronize": false,
    "entities": [
      "src/app/models/*.ts"
    ],
    "migrations": [
      "src/database/migrations/*.ts"
    ],
    "cli": {
      "migrationsDir": "src/database/migrations"
    }
  }