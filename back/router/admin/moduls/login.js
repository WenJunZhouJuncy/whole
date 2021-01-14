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
}

// const Joi = require('joi')

// const JoiSchema = {
//   username: Joi.string().min(2).max(10).required().error(new Error('用户名不符')),
//   passwrod: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码不符')),
//   email: Joi.string().email().required().error(new Error('邮箱不符')),
//   role: Joi.number().valid(0, 1).required().error(new Error('角色不符')),  // 只能传0或1
// }
// await Joi.validate(req.body, JoiSchema)
/*
try {
  await Joi.validate({
    username: '651313',
    passwrod: 'daw65d4a31a13',
    email: '980497826@qq.com',
    role: 2 
  }, JoiSchema)
} catch (err) {
  err.message  =>  角色不符  
}*/
 