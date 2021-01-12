const { userModel } = require('../../../db/modules') //mongoose Model

module.exports = async (req, res) => {
  console.log(req.body);
  try {
    const doc = await userModel.find({})
    // const tok = jwt.verify(token, SECRET)
    res.send({
      code: 0,
      data: doc,
      message: '获取用户',
    })
  } catch (err) {
    return res.send({
      code: -1,
      data: err,
      message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
    })
  }
}