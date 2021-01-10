const { userModel } = require('../../../db/modules') //mongoose Model

module.exports = async (req, res) => {

  try {
    const doc = await userModel.findOne({ email: req.body.email })
    if (doc) {
      return res.send({
        code: 1,
        data: null,
        message: '用户已存在'
      })
    }
    const sdoc = await new userModel({
      username: req.body.username,
      email: req.body.email,
      passwrod: req.body.passwrod,
      status: req.body.status
    }).save()

    res.send({
      code: 0,
      data: sdoc,
      message: '注册成功'
    })
  } catch(err) {
    return res.status(500).send({
      code: -1,
      data: err,
      message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
    })
  }

  // userModel.findOne({ email: req.body.email }, (err, doc) => {
  //   if (err) {
  //     return res.status(500).send({
  //       code: -1,
  //       data: err,
  //       message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
  //     })
  //   }
  //   if (doc) {
  //     return res.send({
  //       code: 1,
  //       data: null,
  //       message: '用户已存在'
  //     })
  //   }
  //   new userModel({
  //     username: req.body.username,
  //     email: req.body.email,
  //     passwrod: req.body.passwrod,
  //     status: req.body.status
  //   }).save((serr, sdoc) => {
  //     if (serr) {
  //       return res.send({
  //         code: -1,
  //         data: err,
  //         message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
  //       })
  //     }
  //     res.send({
  //       code: 0,
  //       data: sdoc,
  //       message: '注册成功'
  //     })
  //   })
  // })
}