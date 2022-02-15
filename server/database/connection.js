const mysql = require('mysql');

//Create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'pagination'
});

//Connection
db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = db;