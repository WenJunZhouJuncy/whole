<template>
  <div class="signInPage">
    <div class="form_wrap">
      <el-form hide-required-asterisk :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="form.email" @keyup.native.enter="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="passwrod">
          <el-input v-model="form.passwrod" show-password @keyup.native.enter="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" prop="code" class="identify_form_item">
          <el-input v-model="form.code" maxlength="4" @keyup.native.enter="submitForm('ruleForm')"></el-input>
          <Identify ref="Identify" class="identify_wrap"></Identify>
        </el-form-item>
        <el-form-item>
          <el-popover
            ref="popover"
            placement="right"
            trigger="hover">
            <span>还没有账号？请点击<router-link to="/signUp">注册</router-link></span>
          </el-popover>
          <el-button class="btn" v-popover:popover @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Identify from '@/components/identify'
export default {
  components: {
    Identify
  },
  data() {
    return {
      form: {
        email: '999999@qq.com',
        passwrod: '999999',
        code: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
        ],
        passwrod: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在6到20个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, message: '验证码格式不符', trigger: 'blur' }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        }
      });
    },
    async login() {
      let isAccord = this.form.code.toLowerCase() === this.$refs.Identify.identifyCode
      if (!isAccord) {
        this.$refs.Identify.changeCode()  //刷新验证码
        return this.$message({
          showClose: true,
          message: '验证码错误',
          type: 'warning'
        })
      }
      try {
        const res = await this.$api.login(this.form)
        if (res.code === 0) {
          this.$message({
            type: "success",
            message: res.message
          })
          res.data.token = res.token
          this.$store.commit('user/setToken', res.data)
          this.$router.replace({
            path: '/'
          })
        } else {
          this.$message({
            type: "warning",
            message: res.message
          })
        }
      } catch (err) {
        this.$message({
          type: "warning",
          message: err.message
        })
      }
    }
  },
  created() {
    
  },
  mounted() {
    
  },
}
</script>
<style lang='less'>
.el-popover{
  background: transparent;
  border: 1px #ddd solid;
  color: #efefef;
  span,a{
    font-size: 14px
  }
  a{
    color: rgb(253, 81, 81);
    text-decoration: underline !important;
  }
}
</style>
<style lang='less'>
//@import url(); 引入公共css类
.signInPage{
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/img/bg_gif.gif');
  // background-size: cover;
  transition: all .2s;
  display: flex;
  justify-content: center;
  align-items: center;
  .form_wrap{
    width: 560px;
    padding: 24px;
    // border-radius: 6px;
    // background: #fff;
    .btn{
      background: #1b2b469f;
      color: #efefef;
      font-size: 16px;
      float: right;
      border: 1px #ddd solid;
    }
    .el-form-item__label{
      color: #efefef;
      font-size: 16px;
    }
    .el-input__inner{
      background: transparent;
      border: none;
      outline: none;
      color: #ddd;
      border-bottom: 1px #ddd solid;
      border-radius: 0;
      font-size: 16px;
    }
    .identify_form_item{
      position: relative;
    }
    .identify_wrap{
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>