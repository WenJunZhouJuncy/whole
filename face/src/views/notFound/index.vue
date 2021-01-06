<template>
  <div class='notFound'>
    <router-link to="/" class="btn" >带我回首页</router-link>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      
    };
  },
  computed: {},
  watch: {},
  methods: {
    
  },
  created() {
    
  },
  mounted() {
    
  },
}
</script>
<style lang='less'>
//@import url(); 引入公共css类
.notFound{
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/img/404.png');
  background-size: cover;
  transition: all .5s;
}
.btn{
  position: absolute;
  left: 58vw;
  top: 32vw;
  transition: all .5s;
  color: #1f2c3d;
  line-height: 38px;
  height: 38px;
  display: block;
  background: #ededed;
  font-size: 16px;
  padding: 0 16px;
  border-radius: 6px;
}
</style>