const express = require('express')

const register = require('./moduls/register')
const login = require('./moduls/login')

const router = express.Router()

// router.get('/', (req, res) => {
//   res.send('admin')
// })

router.post('/register', register)

router.post('/login', login)

module.exports = router