const db = require('../models')

const User = db.user

checkForDuplicateUser = (req, res, next) => {
    const { email } = JSON.parse(req.body.data)

    User.findOne({ email: email })
        .then((user, error) => {
            if (error) {
                res.status(500).send({ error: error.message })
                return;
            }

            console.log(user)

            if (user !== null) {
                res.status(409).send({ error: 'User already found with the same email ID' })
                return
            }

            next()
        })
}

module.exports = checkForDuplicateUser