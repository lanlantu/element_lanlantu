import Vue from 'vue';
import App from './App.vue';
import router from './router' ;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import lodash from 'lodash'

import {formatTime} from "./utils/time";

Vue.use(ElementUI);
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$_', { value: lodash })

Vue.directive('title',  function (el, binding) {
  document.title = el.dataset.title
})
// 格式话时间
Vue.filter('format', formatTime)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
