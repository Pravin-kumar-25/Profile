const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const formData = require('express-form-data')
const os = require('os')
const multer = require('multer')
const auth = require('./routes/auth')
require('dotenv').config()

const app = express()
const upload = multer()

app.use(upload.single("profilePic"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(formData.parse())
app.use(cors())

app.use('/auth', auth)

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {
        console.log('Connected to database successfully...')
    }
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})

