const express = require('express')
const jwt = require('jsonwebtoken');
const SECRET = 'userId'

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
        data: err,
        message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
      })
    }
    if (doc) {
      return res.send({
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
      if (serr) {
        return res.send({
          code: -1,
          data: err,
          message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
        })
      }
      res.send({
        code: 0,
        data: sdoc,
        message: '注册成功'
      })
    })
  })
})

router.post('/login', (req, res) => {
  userModel.findOne({ email: req.body.email }, (err, doc) => {
    if (err) {
      return res.send({
        code: -1,
        data: err,
        message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
      })
    }
    if (!doc) {
      return res.send({
        code: 1,
        data: err,
        message: '邮箱或密码错误'
      })
    }
    let isAuth = require('bcrypt').compareSync(req.body.passwrod, doc.passwrod)
    console.log(isAuth);
    if (isAuth) {
      const token = jwt.sign({
        userId: doc._id,
      }, SECRET);
      // const tok = jwt.verify(token, SECRET)
      res.send({
        code: 0,
        data: doc,
        message: '登录成功',
        token,
      })
    } else {
      res.send({
        code: 1,
        data: err,
        message: '邮箱或密码错误'
      })
    }
  })
})

module.exports = router