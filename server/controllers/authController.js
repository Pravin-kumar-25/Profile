
const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = models.user

const signUp = (req, res) => {
    const data = JSON.parse(req.body.data)

    bcrypt.genSalt(10)
        .then((salt, err) => {
            if (err) {
                console.log('salt gen error', err)
                res.status(500).send({ error: err.message })
                return;
            }

            console.log(salt)

            bcrypt.hash(data.password, salt)
                .then((hashedPassword, error) => {
                    if (error) {
                        console.log('hash error', error)
                        res.status(500).send({ error: error.message })
                        return;
                    }

                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        password: hashedPassword,
                        profilePic: req.file?.buffer
                    }

                    const signUpUser = new User(userInfo)

                    signUpUser.save((saveError, savedUser) => {

                        console.log(savedUser)
                        if (saveError) {
                            console.log(saveError)
                            res.status(500).send({ message: saveError.message })
                            return;
                        }

                        console.log(savedUser.id)

                        const token = jwt.sign({ id: savedUser.id }, process.env.TOKEN_SECRET, {
                            expiresIn: '24h'
                        })

                        console.log(token)
                        const sendData = {
                            name: data.name,
                            email: data.email,
                            profilePic: req.file?.buffer,
                            accessToken: token,
                        }
                        res.status(201).send(sendData)
                        return;
                    })
                })

        })
}

const singIn = (req, res) => {

}

module.exports = { signUp, singIn }