<template>
    <div class="video-slider">
        <swiper :options="swiperOption" ref="videoSlider">
            <!-- slides -->
            <swiper-slide>
                <div class="row">
                    <div class="col-7">
                        <div class="video-container">
                            <youtube video-id="lG0Ys-2d4MA" width="100%" height="385px" ref="youtube"></youtube>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="video-poster row">
                            <div class="poster col-sm-6">
                                <img src="images/studentclub.png" alt="">
                            </div>
                            <div class="poster col-sm-6">
                                <img src="images/studentclub.png" alt="">
                            </div>
                            <div class="poster col-sm-6">
                                <img src="images/studentclub.png" alt="">
                            </div>
                            <div class="poster col-sm-6">
                                <img src="images/studentclub.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>   
            </swiper-slide>

            <swiper-slide>
                <div class="row">
                    <div class="col-7">
                        <div class="video-container">
                            <youtube video-id="lG0Ys-2d4MA" width="100%" height="385px" ref="youtube"></youtube>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="video-poster row">
                            <div class="poster col-sm-6">
                                <img src="images/studentclub.png" alt="">
                            </div>
                            <div class="poster col-sm-6">
                                <img src="images/studentclub.png" alt="">
                            </div>
                            <div class="poster col-sm-6">
                                <img src="images/studentclub.png" alt="">
                            </div>
                            <div class="poster col-sm-6">
                                <img src="images/studentclub.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>   
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
    .video-slider {
        .swiper-container {
            padding-top: 40px;

            .swiper-button-next,
            .swiper-button-prev {
                top: 0;
                height: 24px;
                margin: 5px 0 0 0;
            }

            .swiper-button-next { right: 0; }
            .swiper-button-prev { right: 30px; left: auto; }
        }

        .video-container {
            @include display-flex();

            iframe {
                width: 100%;
            }
        }

        .video-poster {
            .poster {
                margin: 0 0 15px 0;

                img  {
                    display: block;
                    width: 100%;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: 'video-slider',
        data() {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        computed: {
            player () {
                return this.$refs.youtube.player
            },
            swiper() {
                return this.$refs.videoSlider.swiper
            }
        },
        mounted (){
            this.swiper.on('slideChange', () => {
                var isVideo = this.swiper.slides[this.swiper.previousIndex].querySelector('.video-container');
                if (isVideo) {
                    YT.get(isVideo.querySelector('iframe').id).stopVideo()
                }
            });
        }
    }
</script>
