const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')

const home = require('./router/home/index')
const admin = require('./router/admin/index')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/home', home)
app.use('/admin', admin)

app.get('/', (req, res) => {
  res.redirect('/home')
})
app.listen(3001,() => {
  console.log('runing...');
})