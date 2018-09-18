import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome-view',
      component: require('@/components/WelcomeView').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/components/AboutView').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/resto/:resto',
      name: 'resto-view',
      component: require('@/components/RestoView').default,
      props: true
    }
  ]
})
