// config.js
require('dotenv').config();

const config = {
    user: process.env.DB_USUARIO,
    password: process.env.DB_CONTRASENA,
    host: process.env.DB_HOST,
    database: process.env.DB_NOMBRE,
    port: process.env.DB_PUERTO
};

module.exports = config;
