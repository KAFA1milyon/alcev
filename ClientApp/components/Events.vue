<template>
    <div>
        <div class="event-box">
            <div class="row">
                <div class="col-4 col-md-3 col-lg-2">
                    <div class="box-date">
                        <div class="date-border">
                            <span class="day">01</span>
                            <span class="mounth">Mayıs 2018</span>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-md-9 col-lg-7">
                    <div class="box-container">
                        <div class="box-head">
                            <h5>Resim Yarışmasında Türkiye 1.si Olduk</h5> 
                            <div class="time-pin">
                                <span class="clock">
                                    <i class="icon icon-clock"></i>
                                    08:30 - 17:00
                                </span>
                                
                                <span class="pinned">
                                    <i class="icon icon-pinned"></i>
                                    Ankara
                                </span>
                            </div>
                        </div>
                        <div class="box-content">
                            Ankara özel okul öncülüğünde Türkiye genelinde düzenlenen 6. Geleneksel ” Geleceği Gören Dürbünün Olsa ” konulu resim yarışmasında Alçev 4-A sınıfı öğrencimiz Zeynep YANIK; Türkiye 1.si olmuştur. 2-B sınıfı öğrencimiz İrem Nur AYDIN jüri özel ödülü, 2-B sınıfı öğrencimiz Ela İz ÖZDEMİR ve 3-B sınıfı öğrencimiz Egemen Ulus KARA sergileme ödülü kazanmıştır. Öğrencilerimizi yürekten kutluyor, başarılarının devamını diliyoruz.
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 d-none d-lg-flex">
                    <div class="box-photos">
                        <img src="/images/events-photo.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="event-box">
            <div class="row">
                <div class="col-4 col-md-3 col-lg-2">
                    <div class="box-date">
                        <div class="date-border">
                            <span class="day">01</span>
                            <span class="mounth">Mayıs 2018</span>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-md-9 col-lg-7">
                    <div class="box-container">
                        <div class="box-head">
                            <h5>Resim Yarışmasında Türkiye 1.si Olduk</h5> 
                            <div class="time-pin">
                                <span class="clock">
                                    <i class="icon icon-clock"></i>
                                    08:30 - 17:00
                                </span>
                                
                                <span class="pinned">
                                    <i class="icon icon-pinned"></i>
                                    Ankara
                                </span>
                            </div>
                        </div>
                        <div class="box-content">
                            Ankara özel okul öncülüğünde Türkiye genelinde düzenlenen 6. Geleneksel ” Geleceği Gören Dürbünün Olsa ” konulu resim yarışmasında Alçev 4-A sınıfı öğrencimiz Zeynep YANIK; Türkiye 1.si olmuştur. 2-B sınıfı öğrencimiz İrem Nur AYDIN jüri özel ödülü, 2-B sınıfı öğrencimiz Ela İz ÖZDEMİR ve 3-B sınıfı öğrencimiz Egemen Ulus KARA sergileme ödülü kazanmıştır. Öğrencilerimizi yürekten kutluyor, başarılarının devamını diliyoruz.
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 d-none d-lg-flex">
                    <div class="box-photos">
                        <img src="/images/events-photo.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="event-box">
            <div class="row">
                <div class="col-4 col-md-3 col-lg-2">
                    <div class="box-date">
                        <div class="date-border">
                            <span class="day">01</span>
                            <span class="mounth">Mayıs 2018</span>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-md-9 col-lg-7">
                    <div class="box-container">
                        <div class="box-head">
                            <h5>Resim Yarışmasında Türkiye 1.si Olduk</h5> 
                            <div class="time-pin">
                                <span class="clock">
                                    <i class="icon icon-clock"></i>
                                    08:30 - 17:00
                                </span>
                                
                                <span class="pinned">
                                    <i class="icon icon-pinned"></i>
                                    Ankara
                                </span>
                            </div>
                        </div>
                        <div class="box-content">
                            Ankara özel okul öncülüğünde Türkiye genelinde düzenlenen 6. Geleneksel ” Geleceği Gören Dürbünün Olsa ” konulu resim yarışmasında Alçev 4-A sınıfı öğrencimiz Zeynep YANIK; Türkiye 1.si olmuştur. 2-B sınıfı öğrencimiz İrem Nur AYDIN jüri özel ödülü, 2-B sınıfı öğrencimiz Ela İz ÖZDEMİR ve 3-B sınıfı öğrencimiz Egemen Ulus KARA sergileme ödülü kazanmıştır. Öğrencilerimizi yürekten kutluyor, başarılarının devamını diliyoruz.
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 d-none d-lg-flex">
                    <div class="box-photos">
                        <img src="/images/events-photo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
    .event-box {
        margin-bottom: 40px;
        border: 1px solid #EFEFEF;
        background-color: $color-white;
        box-shadow: 0 6px 20px 0 rgba(0,0,0,0.12);
        border-radius: $base-border-radius;
        
        > div[class*="box-"] {
            @include display-flex();
            @include flex-wrap(wrap);
        }
        
        .box {     
            &-date {
                padding: 20px;

                .date-border {
                    @include display-flex();
                    @include flex-direction(column);

                    position: relative;
                    border: 4px solid #FF872F;
                    min-width: 140px;
                    max-width: calc(130px - 40px);
                    padding: 15px 0;
                    text-align: center;
                    border-radius: 4px;

                    .day {
                        color: #535252;
                        font-size: 48px;
                        font-weight: 500;
                    }
                    .mounth {
                        font-size: 18px;
                        color: #999999;
                        font-weight:300;
                    }

                    &:before,
                    &:after {
                        content: '';
                        position: absolute;
                        top: -11px;
                        width: 5px;
                        height: 20px;
                        background: #FF872F;
                        border-radius: 20px;
                    }

                    &:before { left: 20%; }
                    &:after { right: 20%; }
                }
            }

            &-container {
                padding-top: 20px;

                .box-head {
                    margin-bottom: 15px;

                    &:after {
                        content: '';
                        position: relative;
                        display: block;
                        width: 27px;
                        height: 3px;
                        margin-top: 15px;
                        background-color: #E0E0E0;
                    }

                    > h5 {
                        font-weight: 500;
                        color: #535252;
                    }
                    .time-pin {
                        color: #999999;
                        font-size: 12px;
                        font-weight: 300;

                        > span {
                            display: inline-block;

                            &:last-child {
                                margin-left: 20px;
                            }
                        }
                    }
                }
            }

            &-photos {
                width: 100%;
                text-align: right;

                > img {
                    height: 100%;
                    text-align: right;
                }
            }
        }

        &:last-child { margin: 0; }
    }
</style>