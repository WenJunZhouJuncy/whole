const jwt = require('jsonwebtoken');
const SECRET = 'userId'

const { userModel } = require('../../../db/modules') //mongoose Model


module.exports = async (req, res) => {
  try {
    const doc = await userModel.findOne({ email: req.body.email })
    let isAuth
    if (doc) {
      isAuth = require('bcrypt').compareSync(req.body.passwrod, doc.passwrod)
    }
    if (!doc || !isAuth) {
      return res.send({
        code: 1,
        data: null,
        message: '邮箱或密码错误'
      })
    }
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
  } catch (err) {
    return res.send({
      code: -1,
      data: err,
      message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
    })
  }



  // userModel.findOne({ email: req.body.email }, (err, doc) => {
  //   if (err) {
  //     return res.send({
  //       code: -1,
  //       data: err,
  //       message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
  //     })
  //   }
  //   if (!doc) {
  //     return res.send({
  //       code: 1,
  //       data: err,
  //       message: '邮箱或密码错误'
  //     })
  //   }
  //   let isAuth = require('bcrypt').compareSync(req.body.passwrod, doc.passwrod)
  //   console.log(isAuth);
  //   if (isAuth) {
  //     const token = jwt.sign({
  //       userId: doc._id,
  //     }, SECRET);
  //     // const tok = jwt.verify(token, SECRET)
  //     res.send({
  //       code: 0,
  //       data: doc,
  //       message: '登录成功',
  //       token,
  //     })
  //   } else {
  //     res.send({
  //       code: 1,
  //       data: err,
  //       message: '邮箱或密码错误'
  //     })
  //   }
  // })
}