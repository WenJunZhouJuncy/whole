<template>
<el-container style="height: 100vh">
  <el-aside
    width="200px"
    >
    <el-menu
      text-color="#1f9fff"
      active-text-color="#f53df2"
      :default-openeds="['2']">
      <div class="img_wrap">
        <img style="width: 110px" src="../assets/img/logo.png" alt="">
      </div>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组2</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项2</el-menu-item>
          <el-menu-item index="2-4">选项2</el-menu-item>
          <el-menu-item index="2-5">选项2</el-menu-item>
          <el-menu-item index="2-6">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header>
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
.el-aside{
  background: linear-gradient(#e66465, #fdff9f, #ffffff);
  .el-menu{
    background: transparent;
  }
}

.el-header{
  height: 60px;
  line-height: 60px;
}
.img_wrap{
  display: flex;
  justify-content: center;
}
</style>