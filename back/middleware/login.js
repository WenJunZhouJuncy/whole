const jwt = require('jsonwebtoken');
const SECRET = 'userId'

const loginIntercept = (req, res, next) => {
  try {
    if (req.url.indexOf('/login') == -1 && req.url.indexOf('/register') == -1) {
      const token = req.headers.authorization.split(' ').pop();
      const user = jwt.verify(token, SECRET)
      req.user = user
    }
    next()
  } catch (err) {
    return res.send({
      code: -1,
      data: err,
      message: '身份失效，请重新登录'
    })
  }
}

module.exports = {
  loginIntercept
}