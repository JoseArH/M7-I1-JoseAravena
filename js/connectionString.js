require('dotenv').config();

const connectionString = `tusql://${process.env.DB_USUARIO}:${process.env.DB_CONTRASENA}@${process.env.DB_HOST}:${process.env.DB_PUERTO}/${process.env.DB_NOMBRE}`;

console.log("String de conexión:", connectionString);
