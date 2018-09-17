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


// Static
import AtaturkKosesi from '../pages/Static/AtaturkKosesi.vue'
import AkademikTakvim from '../pages/Static/AkademikTakvim.vue'
import EgitimModeli from '../pages/Static/EgitimModeli.vue'
import MisyonVizyon from '../pages/Static/MisyonVizyon.vue'
import OkulAileBirligi from '../pages/Static/OkulAileBirligi.vue'

//Kulupler
import Kulupler from '../pages/Kulupler/Kulupler.vue'
import Basketbol from '../pages/Kulupler/Basketbol.vue'
import Fotografcilik from '../pages/Kulupler/Fotografcilik.vue'
import GorselSanat from '../pages/Kulupler/GorselSanat.vue'
import Halkoyunlari from '../pages/Kulupler/Halkoyunlari.vue'
import IngilizceTiyatro from '../pages/Kulupler/IngilizceTiyatro.vue'
import Muzik from '../pages/Kulupler/Muzik.vue'
import TurkceTiyatro from '../pages/Kulupler/TurkceTiyatro.vue'
import Voleybol from '../pages/Kulupler/Voleybol.vue'
import Bilim from '../pages/Kulupler/Bilim.vue'
import SanatSpor from '../pages/Kulupler/SanatSpor.vue'
import BilisimTeknoloji from '../pages/Kulupler/BilisimTeknoloji.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
        { path: '/', component: Home },
        { path: '/duyurular', component: Announcement },
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
        { path: '/ataturkun-hayati', component: AtaturkKosesi },
        { path: '/akademik-takvim', component: AkademikTakvim },
        { path: '/egitim-modeli', component: EgitimModeli },
        { path: '/misyon-ve-vizyonumuz', component: MisyonVizyon },
        { path: '/okul-aile-birligi', component: OkulAileBirligi },
        { path: '/kulupler', component: Kulupler, 
          children: [
            {
              path: 'turkce-tiyatro',
              component: TurkceTiyatro
            },
            {
              path: 'fotografcilik',
              component: Fotografcilik
            },
            {
              path: 'muzik',
              component: Muzik
            },
            {
              path: 'ingilizce-tiyatro',
              component: IngilizceTiyatro
            },
            {
              path: 'gorsel-sanatlar',
              component: GorselSanat
            },
            {
              path: 'voleybol',
              component: Voleybol
            },
            {
              path: 'basketbol',
              component: Basketbol
            },
            {
              path: 'halkoyunlari',
              component: Halkoyunlari
            },
            {
              path: 'bilim',
              component: Bilim
            },
          ]
        },
        { path: '/bilisim-ve-teknoloji', component: BilisimTeknoloji },
        { path: '/sanat-ve-spor', component: SanatSpor },
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
