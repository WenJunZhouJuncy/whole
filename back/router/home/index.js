const express = require('express')
const { userModel } = require('../../db/modules') //mongoose Model
const router = express.Router()

router.get('/', (req, res) => {
  res.send('home')
})

module.exports = router