const db = require('./db')

const userSchema = db.Schema({
  username: {
    type: String,
    max: 20,
    min: 2,
    trim: true,
    required:true
  },
  email: {
    unique: true,
    type: String,
    trim: true,
    required:true
  },
  passwrod: {
    type: String,
    trim: true,
    max: 20,
    min: 6,
    required: true,
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  },
  rold: {
    type: Number,
    trim: true,
    default: 0
  },
  status: {
    type: Number,
    trim: true,
    default: 0
  }
})

const userModel = db.model('User', userSchema, 'users')

module.exports = { userModel }

// type: String,
// lowercase: true, // 总是将test的值转化为小写
// uppercase: true, // 总是将test的值转化为大写
// required:true, //设定是否必填
// default:'star', //设定默认值
// index：true, //设定索引值
// unique：true, //索引值唯一
// sparse：true, //是否启用稀疏索引
// match：RegExp, //判断是否通过正则验证
// enum：Array, //判断test值是否包含于enmu对应的数组中
// min：Number, //判断对应值是否大于等于给定值
// max：Number, //判断对应值是否小于等于给定值
// trim:true, //去除数据前后的空格
// capped:1024, //限定大小最大为1024字节
// validate：function,//为此属性添加一个验证器函数,如demo1所示
// get：function,//为这个属性定义一个定制的getter Object.defineProperty()。如demo2所示
// set：function,//定义此属性的自定义设置Object.defineProperty()。如demo2所示