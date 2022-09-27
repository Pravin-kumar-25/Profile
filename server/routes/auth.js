const express = require('express')
const checkForDuplicateUser = require('../middlewares/authMiddlewares')
const { signUp, signIn } = require('../controllers/authController')

const router = express.Router()

router.post('/signup', checkForDuplicateUser, signUp)

router.post('/signin', (req, res) => {
    
})

// router.get('/getUsers', async (req, res) => {
//     try {
//         const users = await User.find({ name: 'pravin' })
//         console.log(users)
//     } catch (error) {
//         console.error(error)
//     }

//     res.sendStatus(200)
// })

module.exports = router