<template>
    <div>
        <fixed-header :fixed.sync="isFixed" :threshold="115">
            <header :class="{ 'scroll-fixed': isFixed }" class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-7">
                            <router-link class="school-heading" to="/">
                                <div class="logo"></div>
                                <div class="name">
                                    Özel Altınoluk Çağdaş Eğitim Vakfı <br>
                                    İlköğretim Kurumları
                                </div>
                            </router-link>
                        </div>
                        <div class="col-5 header-router">
                            <router-link class="router-link" to="/">Anasayfa</router-link>
                            <router-link class="router-link" to="/duyurular">Duyurular</router-link>
                            <router-link class="router-link" to="/etkinlikler">Etkinlikler</router-link>
                            <router-link class="router-link" to="/iletisim">İletişim</router-link>
                            
                            
                            <!--<a class="router-link">
                                <i class="icon icon-search"></i>
                            </a>-->

                            <button class="router-link head-menu-link" data-target="#modalNavigation" data-toggle="modal" type="button">
                                <i class="icon icon-hamburger-menu"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>        
        </fixed-header>


        <div class="page-container">
            <router-view></router-view>
        </div>

        <footer class="footer">
            <div class="container">
                <div class="school-heading">
                    <div class="logo"></div>
                    <div class="name white">
                        Özel Altınoluk Çağdaş Eğitim Vakfı <br>
                        İlköğretim Kurumları
                    </div>
                </div>

                <div class="footer-list">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <h4>İLETİŞİM</h4>
                            <ol>
                                <li>
                                    <i class="icon icon-pinned"></i>
                                    <p>Şahindere Mah. Lise Cad. No: 13 Altınoluk/Edremit/Balıkesir</p>
                                </li>
                                <li>
                                    <i class="icon icon-telefon"></i>
                                    <p>0 (266) 396 90 11</p>
                                </li>
                                <li>
                                    <i class="icon icon-eposta"></i>
                                    <p>info@alcev.k12.tr</p>
                                </li>
                            </ol>
                        </div>
                        <div class="col-sm-12 col-md-3">
                            <h4>ALÇEV</h4>
                            <ol>
                                <li><router-link class="footer-link" to="/akademik-takvim">Akademik Takvim</router-link></li>
                                <li><router-link class="footer-link" to="/egitim-modeli">Eğitim Modeli</router-link></li>
                                <li><router-link class="footer-link" to="/misyon-ve-vizyonumuz">Misyon ve Vizyonumuz</router-link></li>
                                <li><router-link class="footer-link" to="/okul-aile-birligi">Okul Aile Birliği</router-link></li>
                            </ol>
                        </div>
                        <div class="col-sm-12 col-md-3">
                            <h4>OKULDA YAŞAM</h4>
                            <ol>
                                <li><router-link class="footer-link" to="/bilisim-ve-teknoloji">Bilişim ve Teknoloji</router-link></li>
                                <li><router-link class="footer-link" to="/kulupler">Kulüpler</router-link></li>
                                <li><router-link class="footer-link" to="/sanat-ve-spor">Sanat ve Spor</router-link></li>
                                <li><router-link class="footer-link" to="/yemek-listesi">Yemek Listesi</router-link></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-copyright">
                <div class="container">
                    ALÇEV - 2018 - Her Hakkı Saklıdır.
                </div>
            </div>
        </footer>

        <HeaderModalMenu />
    </div>
</template>

<script>
    import HeaderModalMenu from './HeaderModal'
    import FixedHeader from 'vue-fixed-header'
    //import VueGallerySlideshow from 'vue-gallery-slideshow'

    export default {
        components: { FixedHeader, HeaderModalMenu },
        watch: {
            '$route': function (to, from) {
                if(to.path === '/'){
                    document.getElementsByTagName('header')[0].classList.add('header-fixed');
                } else {
                    document.getElementsByTagName('header')[0].classList.remove('header-fixed');
                }
            }
        },
        data () {
            return {
                isFixed: false
            }
        },
        mounted() {
            if(this.$router.currentRoute.path === '/'){
                document.getElementsByTagName('header')[0].classList.add('header-fixed');
            }
        }
    }
</script>