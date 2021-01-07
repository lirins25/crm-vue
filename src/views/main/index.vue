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
          >
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
        <el-header>但愿老死电脑间，不愿鞠躬老板前；奔驰宝马贵者趣，公交自行程序员。别人笑我忒疯癫，我笑自己命太贱；不见满街漂亮妹，哪个归得程序员？</el-header>
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

<script src="./index.js">


</script>
<style lang="less" src="./index.less">

</style>
