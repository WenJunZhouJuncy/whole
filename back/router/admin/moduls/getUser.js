const { userModel } = require('../../../db/modules') //mongoose Model

module.exports = async (req, res) => {
  console.log(req.body);
  try {
    let page = req.body.page || 1
    let size = req.body.size || 10
    const data = await userModel.find({}).skip((page-1) * size).limit(size)
    const total = await userModel.countDocuments()
    const totalPage = Math.ceil(total / size)
    // const tok = jwt.verify(token, SECRET)
    res.send({
      code: 0,
      data,
      page,
      total,
      totalPage,
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