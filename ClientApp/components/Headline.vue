<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
            <img src="/images/headline/bursluluk-afis.jpeg" alt="Headline" class="img-fluid one-whole" />
            <div class="headline-heading">
                <div class="heading-title"></div>
                <div class="heading-content"></div>
                <!--<a href="#" class="button primary-action heading-button">Ön Kayıt Formu</a>-->
            </div>
        </swiper-slide>
        <swiper-slide>
            <img src="/images/headline/headline1.jpg" alt="Headline" class="img-fluid one-whole" />
            <div class="headline-heading">
                <div class="heading-title">ALÇEV ROBOTİK ve KODLAMA ATÖLYESİ AÇILDI</div>
                <div class="heading-content"> </div>
                <!--<a href="#" class="button primary-action heading-button">Ön Kayıt Formu</a>-->
            </div>
        </swiper-slide>
        <swiper-slide>
            <img src="/images/headline/headline2.jpg" alt="Headline" class="img-fluid one-whole" />
            <div class="headline-heading">
                <div class="heading-title"></div>
                <div class="heading-content"></div>
                <!--<a href="#" class="button primary-action heading-button">Ön Kayıt Formu</a>-->
            </div>
        </swiper-slide>
        <!--<swiper-slide>
    <img src="/images/headline/headline3.jpg" alt="Headline" class="img-fluid one-whole" />
    <div class="headline-heading">
        <div class="heading-title">TÜRKİYE 1.si OLDUK</div>
        <div class="heading-content"></div>
        <a href="#" class="button primary-action heading-button">Ön Kayıt Formu</a>
    </div>
    </swiper-slide> -->
        <!-- Optional controls -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    export default {
        name: 'headline',
        data() {
            return {
                swiperOption: {
                    loop:true,
                    autoplay: true,
                    delay: 5000,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
   .headline {
       position:relative;

       &-heading {
            @extend %vertical;
            left: 10%;
            font-weight: 500;

            .heading-title {
                padding: 5px 15px;
                color: $color-primary;
                background-color: $color-white;
                border-radius: $base-border-radius;
                font-size: 30px;
                letter-spacing: 8px;
                text-align: center;
            }
            .heading-content {
                font-size: 80px;
                color: $color-white;
            }

            .heading-button {
                display: inline-block;
                margin-top: 30px;
            }
       }
   }
</style>