const { config } = require('dotenv')
config()

const configuration = {
    PORT: process.env.PORT || 3000,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_SERVER: process.env.DB_SERVER,
    JWT_SECRET: process.env.JWT_SECRET
}

module.exports = configuration;