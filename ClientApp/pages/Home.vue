<template>
    <div>
        <Headline class="headline" />

        <div class="container">
            <section class="section">
                <Aboutbox />
            </section>

            <section class="section">
                <AlcevSchools />
            </section>

            <section class="section">
                <div class="section-title">Duyurular</div>
                <div class="section-desc">
                    Okulumuzda eğitim ve öğretime önem verdiğimiz kadar öğrencilerimizin sosyal aktivitelerine de yoğunlaşır, onları toplumla bir olmuş özgüven sahibi bireyler olarak yetiştirmeyi amaçlarız.
                </div>

                <AnnouncementSlider />

                <!--<div class="section-button upscroll">
                    <a href="" class="button tertiary-action">Tüm Duyuruları Görüntüle</a>
                </div>-->
            </section>
        </div>

        <div class="events-container">
            <section class="section">
                <div class="section-title white">ETKİNLİKLER</div>
                <div class="section-desc white">
                    Okulumuzda eğitim ve öğretime önem verdiğimiz kadar öğrencilerimizin sosyal aktivitelerine de yoğunlaşır, onları toplumla bir olmuş özgüven sahibi bireyler olarak yetiştirmeyi amaçlarız.
                </div>

                <div class="container">
                    <Events />
                </div>
            </section>
        </div>

        <div class="studentclub-container">
            <section class="section">
                <div class="container">
                    <div class="section-title">ÖĞRENCİ KULÜPLERİ</div>
                    <div class="section-desc">
                        Okulumuzda eğitim ve öğretime önem verdiğimiz kadar öğrencilerimizin sosyal aktivitelerine de yoğunlaşır, onları toplumla bir olmuş özgüven sahibi bireyler olarak yetiştirmeyi amaçlarız.
                    </div>
                </div>

                <StudentClubSlider />

                <div class="container">
                    <div class="section-button">
                        <a href="" class="button tertiary-action">Tüm Duyuruları Görüntüle</a>
                    </div>
                </div>
            </section>
        </div>

        <div class="feedback-container">
            <section class="section">
                <div class="section-title white">SİZLERİN GÖZÜNDEN ALÇEV</div>
                <div class="section-desc white">
                    Velilerimizden, öğrencilerimizden ve öğretmenlerimizden ALÇEV hakkında yapılan yorumlar.
                </div>

                <div class="container">
                    <div v-masonry transition-duration="0.3s" item-selector=".feedback-box">
                        <div v-masonry-tile class="feedback-box">
                            2 çocuğumu da Alçev’den mezun ettim. Şimdi birisi CERN’de bilim insanı, diğeriyse dünyaca ünlü bir piyanist. Tüm Alçev ailesine ve değerli hocalarımıza teşekkürler!

                            <div class="feedback-user">
                                <i class="icon icon-user-man"></i>

                                <div class="userinfo">
                                    Erhan ERDOĞAN
                                    <span class="user-title">Müdür</span>
                                </div>
                            </div>
                        </div>

                        <div v-masonry-tile class="feedback-box">
                            2 çocuğumu da Alçev’den mezun ettim. Şimdi birisi CERN’de bilim insanı, diğeriyse dünyaca ünlü bir piyanist. Tüm Alçev ailesine ve değerli hocalarımıza teşekkürler!

                            <div class="feedback-user">
                                <i class="icon icon-user-man"></i>

                                <div class="userinfo">
                                    Erhan ERDOĞAN
                                    <span class="user-title">Müdür</span>
                                </div>
                            </div>
                        </div>

                        <div v-masonry-tile class="feedback-box">
                            2 çocuğumu da Alçev’den mezun ettim. Şimdi birisi CERN’de bilim insanı, diğeriyse dünyaca ünlü bir piyanist. Tüm Alçev ailesine ve değerli hocalarımıza teşekkürler!

                            <div class="feedback-user">
                                <i class="icon icon-user-man"></i>

                                <div class="userinfo">
                                    Erhan ERDOĞAN
                                    <span class="user-title">Müdür</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import Headline from '../components/Headline.vue';
    import Aboutbox from '../components/Aboutbox.vue';
    import AlcevSchools from '../components/AlcevSchools.vue';
    import AnnouncementSlider from '../components/AnnouncementSlider.vue';
    import Events from '../components/Events.vue';
    import StudentClubSlider from '../components/StudentClubSlider.vue';

    export default {
        components: { Headline, Aboutbox, AlcevSchools, AnnouncementSlider, Events, StudentClubSlider }
    }
</script>

<style lang="scss" scoped>
    .section {
        clear: both;
        margin: 40px 0;

        &-title {
            color: $color-primary;
            font-size: 30px;
            text-align: center;
            
            &:after {
                content: '';
                display: block;
                margin: 10px auto;
                width: 28px;
                height: 3px;
                background-color: $color-primary;
            }

            &.white {
                color: $color-white;

                &:after {
                    background-color: $color-white;  
                }
            }
        }

        &-desc {
            width: 80%;
            margin: 20px auto 60px;
            font-size: 18px;
            font-weight: 300;
            color: #696969;
            text-align: center;

            &.white {
                color: $color-white;
            }
        }

        &-button {
            float: right;
            position: relative;
            top: 30px;
            z-index: 1;

            &.upscroll {
                top: -30px;
            }
        }
    }

    .about-box {
        position: relative;
        margin-top: -120px;
        z-index: 1;
    }

    .events-container {
        position: relative;
        display: inline-block;
        width: 100%;
        padding: 30px 0;
        background: url("/images/event-bg.png") 0 0 repeat, linear-gradient(45deg, #1E6CEF 0%, #42A5F8 100%);
    }

    .studentclub-container {
        padding-bottom: 60px;
    }

    .feedback-container {
        position: relative;
        display: inline-block;
        width: 100%;
        padding: 30px 0;
        background: linear-gradient(45deg, #FFBC5C 0%, #FF872F 100%);

        .feedback-box {
            width: 31%;
            margin: 0 10px 10px;
            padding: 30px;
            background: $color-white;
            border: 1px solid #EFEFEF;
            box-shadow: 0 6px 20px 0 rgba(0,0,0,0.12);
            border-radius: 4px;
            font-size: 18px;
            color: #696969;
            font-weight: 300;

            .feedback-user {
                @include flex-wrap(wrap);
                @include flex-direction(row);
                @include align-items(center);
                display: inline-flex;
                width: 100%;
                margin-top: 40px;
                color: #999999;
                font-weight: 400;

                .icon {
                    color: #EFEFEF;
                }
                
                .userinfo {
                    margin-left: 10px;

                    .user-title {
                        display: block;
                        color: #B9B8B8;
                        font-size: 14px;
                        font-weight: 300;
                    }
                }
            }
        }
    }
</style>