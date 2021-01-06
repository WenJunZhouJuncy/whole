const express = require('express')
const { userModel } = require('../../db/modules') //mongoose Model
const router = express.Router()

router.get('/', (req, res) => {
  res.send('admin')
})

router.post('/register', (req, res) => {
  userModel.findOne({ email: req.body.email }, (err, doc) => {
    if (err) {
      return res.status(500).send({
        code: -1,
        data: null,
        message: err
      })
    }
    if (doc) {
      return res.status(422).send({
        code: 1,
        data: null,
        message: '用户已存在'
      })
    }
    new userModel({
      username: req.body.username,
      email: req.body.email,
      passwrod: req.body.passwrod,
      status: req.body.status
    }).save((serr, sdoc) => {
      res.send({
        code: 0,
        data: sdoc,
        message: '注册成功'
      })
    })
  })
})

module.exports = router