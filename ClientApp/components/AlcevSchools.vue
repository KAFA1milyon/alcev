<template>
    <div class="alcev-schools">
        <swiper :options="swiperOption" ref="alcevSlider">
            <swiper-slide>
                <a class="box pre-school">
                    <img class="box-bg img-fluid one-whole" src="/images/adolescence-adorable-baby-1089069.jpg" alt="anaokulu" />
                    <div class="box-content">
                        ALÇEV 
                        <p>ANAOKULU</p>
                    </div>
                </a>
            </swiper-slide>
            <swiper-slide>
                <a class="box grade-school">
                    <img class="box-bg img-fluid one-whole" src="/images/art-artistic-arts-and-crafts-1153895.jpg" alt="ilkokul" />
                    <div class="box-content">
                        ALÇEV
                        <p>İLKOKULU</p>
                    </div>
                </a>
            </swiper-slide>
            <swiper-slide>
                <a class="box middle-school">
                    <img class="box-bg img-fluid one-whole" src="/images/background-blank-close-up-998591.jpg" alt="ortaokul" />
                    <div class="box-content">
                        ALÇEV
                        <p>ORTAOKULU</p>
                    </div>
                </a>
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
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .alcev-schools {       
        .swiper-container {
           padding: 20px;
        } 
        .box {
            @include transition(all .2s ease-in-out)
            position: relative;
            padding-bottom: 40px;
            max-height: 400px;
            box-shadow: 0 4px 39px 0 rgba(0,0,0,0.46);
            border-radius: $base-border-radius;
            letter-spacing: 1.7px;
            overflow: hidden;
            width: 100%;

            &:after {
                @include dims(100%);
                content : '';
                position: absolute;
                left: 0;
            }

            .box-bg {
                @include dims(100%);
            }

            .box-content {
                position: absolute;
                left: 0;
                bottom: 30px;
                padding: 0 20px;
                width: calc(100% - 40px);
                color: $color-white;
                font-size: 30px;
                z-index: 1;

                > p {
                    font-size: 40px;
                }
            }

            &.pre-school {
                &:after {
                    background-image: linear-gradient(0deg, rgba(255,101,231,0.70) 2%, rgba(255,101,231,0.00) 76%);
                }
            }

            &.grade-school {
                &:after {
                    background-image: linear-gradient(0deg, rgba(127,248,66,0.60) 0%, rgba(151,238,31,0.00) 80%);
                }
            }

            &.middle-school {
                &:after {
                    background-image: linear-gradient(0deg, rgba(83,236,225,0.69) 0%, rgba(41,213,191,0.00) 77%);
                }
            }

            &:hover {
                @include transform(scale(1.02));
            }
        }
    }
</style>