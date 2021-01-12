const { userModel } = require('../../../db/modules') //mongoose Model

module.exports = async (req, res) => {
  console.log(req.body);
  try {
    await userModel.findByIdAndUpdate(req.body.id, {
      $set: {
        status: req.body.status
      }
    })
    return res.send({
      code: 0,
      data: null,
      message: '修改成功'
    })
  } catch (err) {
    return res.status(500).send({
      code: -1,
      data: err,
      message: '服务器崩溃啦┭┮﹏┭┮请稍后重试~'
    })
  }
}