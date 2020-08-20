const bcrypt = require('bcryptjs');

module.exports = {
    getSession: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(200);
        }
    },
    register: (req, res) => {
        const db = req.app.get('db');

        const { email, password} = req.body;

        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);


        db.user.register(email, hash)
            .then(response => {
                delete response[0].hash;
                req.session.user = response[0];
                res.status(200).send(req.session.user);
            });
    },
    login: (req, res) => {

    },
    logout: (req, res) => {
        
    }
}