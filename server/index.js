require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const ac = require('./controllers/authController');

const { SERVER_PORT, DB_URI } = process.env;

massive({
    connectionString: DB_URI,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    console.log('DB connected');
    app.set('db', db);
});

// auth endpoints



app.listen(SERVER_PORT, () => console.log(`Server serving on ${SERVER_PORT}`))