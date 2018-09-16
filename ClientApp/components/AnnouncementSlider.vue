<template>
    <div class="announcement-slider">
        <swiper :options="swiperOption" ref="AnnouncementSlider">
            <!-- slides -->
            <swiper-slide>
                <div class="box">
                    <div class="box-photos">
                        <img src="/images/duyuru1.jpg" alt="announcument">
                    </div>
                    <div class="box-container">
                        <h4 class="box-title">
                          Notable Kursu Proje Sunumları
                          <span class="date">07 Mayıs 2018</span>
                        </h4>
                        <div class="box-content">
                          60 saatlik NOTABLE Kursu sonunda düzenlenen tören ile katılım belgelerini alan öğrencilerimiz proje sunumlarıyla göz doldurdular.
                        </div>

                    <!--   <div class="box-more">
                            <a href="">Devamını Oku <i class="icon icon-chevron-double-right"></i></a>
                        </div>-->
                   </div>
               <!--     <div class="box-bottom">
                        <div class="bottom-like">
                            <i class="icon icon-like"></i>
                            <span class="count">3</span>
                        </div>
                        <div class="bottom-comment">
                            <i class="icon icon-comments"></i>
                            <span class="count">3</span>
                        </div>
                        <div class="bottom-share">
                            <i class="icon icon-share"></i>
                            <span class="count">Paylaş</span>
                        </div>
                    </div>   -->
                </div>
            </swiper-slide>
            
            <swiper-slide>
                <div class="box">
                    <div class="box-photos">
                        <img src="/images/duyuru2.jpg" alt="announcument">
                    </div>
                    <div class="box-container">
                        <h4 class="box-title">
                          2017-2018 YILI 8.SINIFLAR AKADEMİK KURSU
                          <span class="date">02 Mayıs 2018</span>
                        </h4>
                        <div class="box-content">
                          2017-2018 Eğitim-öğretim yılı yaz dönemi 8.sınıflar akademik kurs  olacaktır.Detaylı bilgi ve kayıt için okulumuzu arayabilirsiniz.
                        </div>

                    <!--   <div class="box-more">
                            <a href="">Devamını Oku <i class="icon icon-chevron-double-right"></i></a>
                        </div>   -->
                    </div>
                <!--<div class="box-bottom">
                        <div class="bottom-like">
                            <i class="icon icon-like"></i>
                            <span class="count">3</span>
                        </div>
                        <div class="bottom-comment">
                            <i class="icon icon-comments"></i>
                            <span class="count">3</span>
                        </div>
                        <div class="bottom-share">
                            <i class="icon icon-share"></i>
                            <span class="count">Paylaş</span>
                        </div>
                    </div>-->
                </div>
            </swiper-slide>
           
            <swiper-slide>
                <div class="box">
                    <div class="box-photos">
                        <img src="/images/duyuru3.jpg" alt="announcument">
                    </div>
                    <div class="box-container">
                        <h4 class="box-title">
                          Türkiye 1.si Olduk
                          <span class="date">01 Mayıs 2018</span>
                        </h4>
                        <div class="box-content">
                          Ankara özel okul öncülüğünde Türkiye genelinde düzenlenen 6. Geleneksel ” Geleceği Gören Dürbünün Olsa ” konulu resim yarışmasında Alçev 4-A sınıfı öğrencimiz Zeynep YANIK; Türkiye 1.si olmuştur. 2-B sınıfı öğrencimiz İrem Nur AYDIN jüri özel ödülü, 2-B sınıfı öğrencimiz Ela İz ÖZDEMİR ve 3-B sınıfı öğrencimiz Egemen Ulus KARA sergileme ödülü kazanmıştır. Öğrencilerimizi yürekten kutluyor, başarılarının devamını diliyoruz.
                        </div>

                        <!--<div class="box-more">
                            <a href="">Devamını Oku <i class="icon icon-chevron-double-right"></i></a>
                        </div>-->
                    </div>
                <!--<div class="box-bottom">
                        <div class="bottom-like">
                            <i class="icon icon-like"></i>
                            <span class="count">3</span>
                        </div>
                        <div class="bottom-comment">
                            <i class="icon icon-comments"></i>
                            <span class="count">3</span>
                        </div>
                        <div class="bottom-share">
                            <i class="icon icon-share"></i>
                            <span class="count">Paylaş</span>
                        </div>
                    </div>-->
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'announcement-slider',
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                    loop: false,
                    loopFillGroupWithBlank: false,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .announcement-slider {
        .swiper-container {
            padding-bottom: 60px;

            .swiper-button-next,
            .swiper-button-prev {
                top: auto;
                height: 24px;
                margin: 30px 0 0 0;
            }

            .swiper-button-next { left: 30px; }
            .swiper-button-prev { left: 0; }
        }
    }
    .box {
        background: $color-white;
        border: 1px solid #EFEFEF;
        box-shadow: 0 6px 20px 0 rgba(0,0,0,0.12);
        border-radius: $base-border-radius;

        &-photos {
            > img {
                width: 100%;
                height: 100%;
                max-height: 255px;
            }
        }

        &-container {
            padding: 15px;
            color: $color-text;

            .box-title {
                font-size: 18px;
                font-weight: 500;

                .date {
                    display: block;
                    margin-top: 5px;
                    font-size: 12px;
                    font-weight: 300;
                }

                &:after {
                    content: '';
                    position: relative;
                    display: block;
                    width: 27px;
                    height: 3px;
                    margin-top: 15px;
                    background-color: #E0E0E0;
                }
            }

            .box-content {
                display: block;
                margin: 15px 0;
            }

            .box-more {
                display: block;
                text-align: right;

                .icon {
                    position: relative;
                    top: 2px;
                }
            }
        }

        &-bottom {
            @include display-flex();
            @include flex-wrap(wrap);
            @include flex-direction(row);

            > div[class*="bottom-"] {
                @include flex(0 0 33.3333%);
                @include display-flex();
                @include align-items(center);
                @include justify-content(center);
                box-shadow: inset 0px 0px 1px 0px #EFEFEF;
                padding: 15px 0;

                &:last-child { border : none; }

                > .icon {
                    font-size: 28px;
                }

                > span {
                    margin-left: 10px;
                    color: #999999;
                    font-size: 12px;
                }
            }
        }
    }
</style>