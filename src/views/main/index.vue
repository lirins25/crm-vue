<template>
  <div class="main-box">
    <el-container>
      <el-aside width="200px">
        <div class="title-wrapper">
          <img src="../../assets/banzang.jpg" alt="" style="width: 35px;height: 35px">
          <span>crm的管理系统</span>
        </div>
        <!--        default-active 默认高亮的index取值对应的导航
                    一般是el-menu的index 取值  因为el-submenu不能选中
        -->
        <el-scrollbar class="scrollerbar">
          <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
            <!--          el-submenu 表示二级导航可以展开-->

            <!--          不能展开的为 el-menu
                          disabled 不可点的
            -->
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">系统首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品相关</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-menu"></i>
                <span slot="title">品牌管理</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-menu"></i>
                <span slot="title">分类管理</span>
              </el-menu-item>
              <el-menu-item index="2-3">
                <i class="el-icon-menu"></i>
                <span slot="title">商品管理</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">运营商管理</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>Lirins系统</el-header>
        <el-main>
          <div class="main-body">
<!--            可变的内容使用router-view-->
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      isCollapse: true
    };
  },
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.main-box {
  height: 100%;
  width: 100%;
}

.scrollerbar {
  height: calc(100% - 70px);
}
.el-scrollbar__bar,.el-scrollbar__thumb{
  display: none;
  is-horizontal:false;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.title-wrapper {
  line-height: 60px;
  background-color: #B3C0D1;
}

.el-aside {
  background-color: #fff;
  color: #444;
  width: auto;
  /*text-align: center;*/
  /*line-height: 200px;*/
}

.el-main {
  background-color: #E9EEF3;
  color: #444;
  text-align: center;
  padding: 0;
  overflow: hidden;
}
.main-body{
  background-color: #ffffff;
  height: 100%;
  margin: 10px 0 0 10px;
  padding: 20px 0 0 0 ;
}

.el-container {
  height: 100%;

}
</style>
