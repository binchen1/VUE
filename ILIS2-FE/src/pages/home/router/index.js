import Vue from 'vue'
import Router from 'vue-router'
import About from '../about';
import Comment from '../comment';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/comment/:id',
      props: true,
      name: 'comment',
      component: Comment
    }
  ]
})
