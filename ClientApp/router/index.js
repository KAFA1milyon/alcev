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
import AnaokuluHakkinda from '../pages/Okullar/Anaokulu/Hakkinda.vue'
import Anaokuluingilizce from '../pages/Okullar/Anaokulu/ingilizce.vue'
import AnaokuluRehberlik from '../pages/Okullar/Anaokulu/Rehberlik.vue'
import AnaokuluEgitimModeli from '../pages/Okullar/Anaokulu/EgitimModeli.vue'
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
import AlcevKurucuUye from '../pages/Static/AlcevKurucuUye.vue'
import VakifBaskanMesaj from '../pages/Static/VakifBaskanMesaj.vue'
import VakifBaskanOzgecmis from '../pages/Static/VakifBaskanOzgecmis.vue'
import VakifTarihce from '../pages/Static/VakifTarihce.vue'
import VakifYK from '../pages/Static/VakifYK.vue'
import OkulMudur from '../pages/Static/OkulMudur.vue'
import OkulMudurYardimcilari from '../pages/Static/OkulMudurYardimcilari.vue'
import PersonelKadrosu from '../pages/Static/PersonelKadrosu.vue'
import FizikiYapi from '../pages/Static/FizikiYapi.vue'
import HizmetStandartlari from '../pages/Static/HizmetStandartlari.vue'
import IdariYapi from '../pages/Static/IdariYapi.vue'
import OkulTarihce from '../pages/Static/OkulTarihce.vue'
import Mezunlarimiz from '../pages/Static/Mezunlarimiz.vue'
import Kutuphane from '../pages/Static/Kutuphane.vue'
import UlasimImkanlari from '../pages/Static/UlasimImkanlari.vue'
import AlcevEtut from '../pages/Static/AlcevEtut.vue'
import BeslenmeDostu from '../pages/Static/BeslenmeDostu.vue'
import OkulKiyafetleri from '../pages/Static/OkulKiyafetleri.vue'
import EkoOkullarProjesi from '../pages/Static/EkoOkullarProjesi.vue'
import RehberlikDanismanlik from '../pages/Static/RehberlikDanismanlik.vue'
import YemekListesi from '../pages/Static/YemekListesi.vue'



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
              path: 'Hakkinda',
              component: AnaokuluHakkinda
            },
            {
              path: 'Rehberlik',
              component: AnaokuluRehberlik
            },
            {
              path: 'EgitimModeli',
              component: AnaokuluEgitimModeli
            },
            {
              path: 'ingilizce',
              component: Anaokuluingilizce
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
        { path: '/alcev-kurucu-uyeleri', component: AlcevKurucuUye },
        { path: '/vakif-baskaninin-mesaji', component: VakifBaskanMesaj },
        { path: '/vakif-baskani-ozgecmisi', component: VakifBaskanOzgecmis },
        { path: '/vakif-tarihce', component: VakifTarihce },
        { path: '/yonetim-kurulu', component: VakifYK },
        { path: '/okul-mudur', component: OkulMudur },
        { path: '/okul-mudur-yardimcilari', component: OkulMudurYardimcilari },
        { path: '/personel-kadrosu', component: PersonelKadrosu },
        { path: '/fiziki-yapi', component: FizikiYapi }, 
        { path: '/hizmet-standartlarimiz', component: HizmetStandartlari },
        { path: '/idari-yapi', component: IdariYapi },
        { path: '/okul-tarihce', component: OkulTarihce },
        { path: '/mezunlarimiz', component: Mezunlarimiz },
        { path: '/okul-kiyafetleri', component: OkulKiyafetleri },
        { path: '/kutuphane', component: Kutuphane },
        { path: '/ulasim-imkanlari', component: UlasimImkanlari },
        { path: '/AlcevEtut', component: AlcevEtut},
        { path: '/beslenme-dostu-okul-projesi', component: BeslenmeDostu },
        { path: '/eko-okullar-projesi', component: EkoOkullarProjesi },
        { path: '/rehberlik-ve-danismanlik', component: RehberlikDanismanlik },
        { path: '/yemek-listesi', component: YemekListesi },
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
