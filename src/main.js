import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from "axios";
Vue.use(ElementUI);
Vue.config.productionTip = false
    /**
     * axios的使用方式
     *  1.挂载到windows下面 (不建议)
     *    好处：直接拿到对象
     *
     *  2.挂在到vue原型上
     *    使用this.axios调用
     *
     */
    // window.zhouge = axios;
    // Vue.prototype.zhouge=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

