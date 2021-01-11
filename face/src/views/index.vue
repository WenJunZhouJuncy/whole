<template>
<el-container style="height: 100vh">
  
    <el-aside :class="['aside_listen', close ? 'w60' : 'w200']">
    <el-scrollbar style="height: 100%">
      <div class="img_wrap">
        <img :style="close ? {width: '60px'} : {width: '110px'} " src="../assets/img/logo.png" alt="">
      </div>
      <el-menu
        text-color="#ff2020"
        active-text-color="#efffef"
        :collapse="close"
        router
        >
        <el-submenu :index="item.path" v-for="(item, index) in menu" :key="index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.meta.title}}</span>
          </template>
          <template v-for="it in item.children">
            <el-menu-item :key="it.path" :index="it.path">{{it.meta.title}}</el-menu-item>
          </template>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
      
    </el-aside>
  
  
  
  <el-container>
    <el-header>
      <i :class="[close ? 'el-icon-s-unfold' : 'el-icon-s-fold', 'header_icon']" @click="close = !close"></i>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      close: false,
      menuList: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    
  },
  created() {
    this.menu = this.$router.options.routes.filter(e => e.menu)[0].children.filter(e => e.menu)
    console.log(this.menu);
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