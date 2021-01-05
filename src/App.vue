<template>
<!--
1.template标签详细讲解
template 这个标签是html5当中的模板标签 这个标签中的内容默认是不显示的
    应用中只有一个页面 index.html，App.vue里面的内容就是显示在index.html当中的

 里面的写法类似：   document.querySelect("#app").innerHtml = document.querySelect("template").innerHtml
    把template 中的内容直接拿到app中

 template模板标签中只能有一个根标签（所以一般用一个div来包含其他所有的标签）
2.vue组件
  .vue后缀名的文件 是vue的组件文件 这个文件中包含三块信息
      template: 页面的html
      script:   编写js的
      style:    编写这个页面的样式
3.使用路由的方式：
  编写一个 router-view标签 表示一个不确定要显示的内容 这个要显示的内容是一个vue的组件 并且在router中配置路径才能显示
  在router路径下配置好路径对应的组件
  使用router-link 写入按钮跳转的路径
4.ES6的导入和导出（在zhouge.js中）
-->
  <div class="box">
    <div class="app-box">
     <router-view/>
    </div>
  </div>
</template>

<style lang="less">
//重置边距 上下左右为0
*{
  margin: 0;
  padding: 0;
}
//body{
//  background-color: red;
//}
html,body,.box,.app-box{
  width: 100%;
  height: 100%;
}

</style>
