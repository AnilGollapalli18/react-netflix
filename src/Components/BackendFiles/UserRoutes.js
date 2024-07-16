const express = require('express')
const { signup, signin, checkEmail } = require('./UserController')
const router = express.Router()

router.post('/checkEmail', checkEmail)
router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router;