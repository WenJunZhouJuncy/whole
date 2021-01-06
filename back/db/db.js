const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/hmBlog', 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)

mongoose.connection.on('error', () => {console.log('error');});
mongoose.connection.once('open', () => {console.log('open');})

module.exports = mongoose