require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const ac = require('./controllers/authController');

const { SERVER_PORT, DB_URI, SESSION_SECRET } = process.env;

app.use(express.json());

massive({
    connectionString: DB_URI,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    console.log('DB connected');
    app.set('db', db);
});

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

// auth endpoints
app.get('/auth/session', ac.getSession);
app.post('/auth/register', ac.register);


app.listen(SERVER_PORT, () => console.log(`Server serving on ${SERVER_PORT}`))