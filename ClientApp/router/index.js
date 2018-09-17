import Vue from 'vue'
import VueRouter from 'vue-router'

import ErrorPage from '../pages/ErrorPage.vue'

import Home from '../pages/Home.vue'
import Announcement from '../pages/Announcement.vue'
import Activities from '../pages/Activities.vue'
import Teachers from '../pages/Teachers.vue'
import Article from '../pages/Article.vue'
import Contact from '../pages/Contact.vue'


// Okullar
import Anaokulu from '../pages/Okullar/Anaokulu.vue'
import Ilkokul from '../pages/Okullar/Ilkokul.vue'
import Ortaokul from '../pages/Okullar/Ortaokul.vue'

import AnaokuluSinif from '../pages/Okullar/Anaokulu/Siniflar.vue'
import AnaokuluHocalar from '../pages/Okullar/Anaokulu/Hocalar.vue'
import IlkokulSinif from '../pages/Okullar/Ilkokul/Siniflar.vue'
import IlkokulHocalar from '../pages/Okullar/Ilkokul/Hocalar.vue'
import OrtaokulSinif from '../pages/Okullar/Ortaokul/Siniflar.vue'
import OrtaokulHocalar from '../pages/Okullar/Ortaokul/Hocalar.vue'




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
        { path: '/anaokulu', component: Anaokulu, 
          children: [
            {
              path: '',
              component: AnaokuluSinif
            },
            {
              path: 'hocalar',
              component: AnaokuluHocalar
            }
          ]
        },
        { path: '/ilkokul', component: Ilkokul,
          children: [
            {
              path: '',
              component: IlkokulSinif
            },
            {
              path: 'hocalar',
              component: IlkokulHocalar
            }
          ]
        },
        { path: '/ortaokul', component: Ortaokul,
          children: [
            {
              path: '',
              component: OrtaokulSinif
            },
            {
              path: 'hocalar',
              component: OrtaokulHocalar
            }
          ]
        },
        { path: '/etkinlikler', component: Activities },
        { path: '/ogretmenler', component: Teachers },
        { path: '/makale', component: Article },
        { path: '/iletisim', component: Contact },
        { path: "*", component: ErrorPage }
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
