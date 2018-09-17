<template>
    <div class="studentclub-slider">
        <swiper :options="swiperOption" ref="studentClubSlider">
            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/kulupler/tiyatro.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Türkçe Tiyatro</p>
                    <router-link class="club-button" to="/">Detaylar</router-link>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/kulupler/fotografcilik.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Fotoğrafçılık</p>
                    <router-link class="club-button" to="/">Detaylar</router-link>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/kulupler/muzik.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Müzik Kulübü</p>
                    <router-link class="club-button" to="/">Detaylar</router-link>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/kulupler/tiyatro.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>İngilizce Tiyatro</p>
                    <router-link class="club-button" to="/">Detaylar</router-link>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/kulupler/gorsel-sanat.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Görsel Sanatlar</p>
                    <router-link class="club-button" to="/">Detaylar</router-link>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/kulupler/voleybol.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Voleybol</p>
                    <router-link class="club-button" to="/">Detaylar</router-link>
                </div>
            </swiper-slide> 

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/kulupler/basketbol.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Basketbol</p>
                    <router-link class="club-button" to="/">Detaylar</router-link>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/kulupler/halkoyunlari.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Halk Oyunları</p>
                    <router-link class="club-button" to="/">Detaylar</router-link>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/kulupler/bilim.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Bilim Kulübü</p>
                    <router-link class="club-button" to="/">Detaylar</router-link>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'alcev-schools',
        data() {
            return {
                swiperOption: {
                    loopedSlides: 0,
                    loopAdditionalSlides: 0,
                    resistanceRatio: 0,	
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    freeMode: true,
                    roundLengths: true,
                    mousewheel: {
                        invert: false,
                        forceToAxis: false
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .studentclub-slider {
        .swiper-slide-invisible-blank { display: none; }
        .swiper-slide { width: 285px !important; }

        .club-photo {
            img  {
                display: block;
                width: 100%;
            }
        }

        .club-content {
            @include app-transition();
            @include display-flex();
            @include flex-direction(column);
            @include flex-wrap(wrap);
            @include justify-content(space-around);
            @include align-items(center);
            @include dims(100%);
            opacity: 0;
            position: absolute;
            top: 0;
            background-color: rgba(0,0,0,.5);
            color: $color-white;
            text-align: center;

            > p {
                position: relative;
                top: 20px;
                font-size: 18px;
            }

            .club-button {
                padding: 10px 0;
                width: 80%;
                font-size: 16px;
                color: $color-white;
                font-weight: 500;
                border: 1px solid #999999;
                border-radius: 4px;
            }

            &:hover {
                opacity: 1;
            }
        }
    }
</style>