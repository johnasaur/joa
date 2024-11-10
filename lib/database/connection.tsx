const mysql = require('mysql2/promise');

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TOPTIERE',
    waitForConnections: true,
    connectionLimit: 1
});

