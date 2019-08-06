import Vue from 'vue'
import App from './App'
import router from './router'
import api from "@common/api";

// 引入全局样式
import "@common/global.less";

Vue.config.productionTip = false
Vue.prototype.$api = api;

import { Button, Table, Form, DatePicker, TimePicker } from 'ant-design-vue';
Vue.use(Button);
Vue.use(Table);
Vue.use(Form);
Vue.use(DatePicker);
Vue.use(TimePicker);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
