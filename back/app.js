// 第三方或内置模块
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')

// 自定义路由模块
const home = require('./router/home/index')
const admin = require('./router/admin/index')

// 中间件
const { loginIntercept } = require('./middleware/login')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());      //处理跨域

// 使用自定义中间件
app.use(loginIntercept)

// 使用自定义路由
app.use('/home', home)
app.use('/admin', admin)

// app.get('/', (req, res) => {
//   res.redirect('/home')
// })
app.listen(3001,() => {
  console.log('runing...');
})