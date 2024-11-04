const { Client } = require('pg');
const config = require('./js/config');


const client = new Client({
    user: config.user,
    password: config.password,
    host: config.host,
    database: config.database,
    port: config.port
});

client.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
});

client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error en la consulta:', err);
        return;
    }
    console.log('Momento actual:', res.rows[0].now); 
    client.end();
});
