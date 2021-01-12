const express = require('express')

const register = require('./moduls/register')
const login = require('./moduls/login')
const getUser = require('./moduls/getUser')
const setUserStatus = require('./moduls/setUserStatus')

const router = express.Router()

// router.get('/', (req, res) => {
//   res.send('admin')
// })

router.post('/register', register)
router.post('/login', login)
router.post('/getUser', getUser)
router.post('/setUserStatus', setUserStatus)

module.exports = router