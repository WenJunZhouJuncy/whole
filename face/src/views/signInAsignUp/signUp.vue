<template>
  <div class="signUpPage">
    <div class="from_wrap">
      <el-form hide-required-asterisk :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="昵称：" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="passwrod">
          <el-input v-model="form.passwrod" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码：" prop="code" class="identify_form_item">
          <el-input v-model="form.code" maxlength="4"></el-input>
          <Identify ref="Identify" class="identify_wrap"></Identify>
        </el-form-item>
        <el-form-item>
          <el-switch
            class="switch"
            v-model="form.statusValue"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
          <el-popover
            ref="popover"
            placement="right"
            trigger="hover">
            <span>已有账号？去<router-link to="/signIn">登录</router-link></span>
          </el-popover>
          <el-button class="btn" v-popover:popover @click="submitForm('ruleForm')">注册</el-button>
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
        statusValue: 0,
        username: '',
        email: '',
        passwrod: '',
        code: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { pattern:/^[\s\u4e00-\u9fa5a-z0-9_-]{0,}$/, message: '输入不符', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在2到20个字符', trigger: 'blur' }
        ],
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
          this.goRegister()
        }
      });
    },
    async goRegister() {
      const res = await this.$api.register(this.form)
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
.signUpPage{
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/img/bg_gif1.gif');
  // background-size: cover;
  transition: all .2s;
  display: flex;
  justify-content: center;
  align-items: center;
  .from_wrap{
    width: 560px;
    padding: 24px;
    // border-radius: 6px;
    // background: #fff;
    .switch{
      float: left;
    }
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