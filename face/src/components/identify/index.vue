
<template>
  <div class="inventoryRecord">
    <div @click="changeCode()">
      <!-- 引入验证码组件 -->
      <identify :identifyCode="identifyCode"></identify>
    </div>
  </div>
</template>
 
<script>
// 引入验证码组件
import identify from './identify'
export default {
  name: 'inventoryRecord',
  // 注册验证码组件
  components: { identify },
  data () {
    return {
      // 验证码初始值
      identifyCode: '',
      // 验证码的随机取值范围
      identifyCodes: '1234567890zxcvbnmasdfghjklpiuytrewq'
    }
  },
  mounted () {
    // 刷新页面就生成随机验证码
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    // 点击验证码刷新验证码
    changeCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 生成一个随机整数  randomNum(0, 10) 0 到 10 的随机整数， 包含 0 和 10
    randomNum (min, max) {
      max = max + 1
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 随机生成验证码字符串
    makeCode (data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)]
      }
    }
  }
}
</script>

<style scoped>
</style>