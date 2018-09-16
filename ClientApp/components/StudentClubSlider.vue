<template>
    <div class="studentclub-slider">
        <swiper :options="swiperOption" ref="studentClubSlider">
            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/activity-art-art-class-730807.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Fotoğraf Klubü 1</p>
                    <a href="#" class="club-button">Detaylar</a>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/audience-crowd-event-301987.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Fotoğraf Klubü 1</p>
                    <a href="#" class="club-button">Detaylar</a>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/blue-jeans-boy-child-164835.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Fotoğraf Klubü 1</p>
                    <a href="#" class="club-button">Detaylar</a>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/ShowImage.jpeg" alt="">
                </div>
                <div class="club-content">
                    <p>Fotoğraf Klubü 1</p>
                    <a href="#" class="club-button">Detaylar</a>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="club-photo">
                    <img src="/images/Top-acting-schools-for-children-in-London.jpg" alt="">
                </div>
                <div class="club-content">
                    <p>Fotoğraf Klubü 1</p>
                    <a href="#" class="club-button">Detaylar</a>
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