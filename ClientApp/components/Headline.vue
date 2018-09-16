<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
            <img src="/images/headline/accomplishment-celebrate-ceremony-267885.jpg" alt="Headline" class="img-fluid one-whole" />
            <div class="headline-heading">
                <div class="heading-title">GELECEĞİN MUTLU BİREYLERİ</div>
                <div class="heading-content">ALÇEV’DE YETİŞİR!</div>   
                <!--<a href="#" class="button primary-action heading-button">Ön Kayıt Formu</a>-->          
            </div>
        </swiper-slide>
        <swiper-slide>
            <img src="/images/headline/achievement-adult-african-1059116.jpg" alt="Headline" class="img-fluid one-whole" />
            <div class="headline-heading">
                <div class="heading-title">GELECEĞİN MUTLU BİREYLERİ</div>
                <div class="heading-content">ALÇEV’DE YETİŞİR!</div>   
                <!--<a href="#" class="button primary-action heading-button">Ön Kayıt Formu</a>-->          
            </div>
        </swiper-slide>
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