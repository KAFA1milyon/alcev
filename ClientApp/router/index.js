import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Announcement from '../pages/Announcement.vue'
import Activities from '../pages/Activities.vue'
import Teachers from '../pages/Teachers.vue'
import Article from '../pages/Article.vue'
import Contact from '../pages/Contact.vue'








Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
        { path: '/', component: Home },
        { path: '/duyurular', component: Announcement, 
          children: [
            {
              path: 'profile',
              component: Teachers
            },
            {
              path: 'posts',
              component: Activities
            }
          ]},
        { path: '/etkinlikler', component: Activities },
        { path: '/ogretmenler', component: Teachers },
        { path: '/makale', component: Article },
        { path: '/iletisim', component: Contact }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
