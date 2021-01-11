<template>
<el-container style="height: 100vh">
  
    <el-aside :class="['aside_listen', close ? 'w60' : 'w200']">
    <el-scrollbar style="height: 100%">
      <div class="img_wrap">
        <img :style="close ? {width: '60px'} : {width: '110px'} " src="../assets/img/logo.png" alt="">
      </div>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="close">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
      
    </el-aside>
  
  
  
  <el-container>
    <el-header>
      <i :class="[close ? 'el-icon-s-unfold' : 'el-icon-s-fold', 'header_icon']" @click="close = !close"></i>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      1231
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      close: false
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

.img_wrap{
  display: flex;
  justify-content: center;
  img{
    transition: all 0.5s;
  }
}
.header_icon{
  font-size: 24px;
  cursor: pointer;
}
.aside_listen{
  transition: all 0.5s;
}
.w60{
  width: 60px !important;
}
.w200{
  width: 200px !important;
}
</style>