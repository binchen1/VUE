import Vue from 'vue'
import Router from 'vue-router'
import Article from '../list';
import FormPage from '../form';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    },
    {
      path: '/form',
      name: 'FormPage',
      component: FormPage
    }
  ]
})
