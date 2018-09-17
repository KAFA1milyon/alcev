<template>
    <div>
        <div class="event-box">
            <div class="row">
                <div class="col-4 col-md-3 col-lg-2">
                    <div class="box-date">
                        <div class="date-border">
                            <span class="day">02</span>
                            <span class="mounth">Mayıs 2018</span>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-md-9 col-lg-7">
                    <div class="box-container">
                        <div class="box-head">
                            <h5>2017-2018 YILI 8.SINIFLAR AKADEMİK KURS</h5> 
                            <div class="time-pin">
                                <span class="clock">
                                    <i class="icon icon-clock"></i>
                                    08:30 - 17:00
                                </span>
                                
                                <span class="pinned">
                                    <i class="icon icon-pinned"></i>
                                    Balıkesir
                                </span>
                            </div>
                        </div>
                        <div class="box-content">
                            2017-2018 Eğitim-öğretim yılı yaz dönemi 8.sınıflar akademik kurs  olacaktır.Detaylı bilgi ve kayıt için okulumuzu arayabilirsiniz.
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 d-none d-lg-flex">
                    <div class="box-photos">
                        <img src="/images/duyuru2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="event-box">
            <div class="row">
                <div class="col-4 col-md-3 col-lg-2">
                    <div class="box-date">
                        <div class="date-border">
                            <span class="day">30</span>
                            <span class="mounth">Nisan 2018</span>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-md-9 col-lg-7">
                    <div class="box-container">
                        <div class="box-head">
                            <h5>Proje Yarışmasında Finallerdeyiz</h5> 
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
                            Ortaokul öğrencilerini temel bilimlerde araştırmaya özendirmek ve bilime meraklı gençlerin yolunu açmak adına Manisa Fen Lisesi tarafından 18-19-20 Nisan 2018 tarihinde gerçekleştirilen proje yarışmasında Fen Bilimleri Öğretmenimiz Gözde ÇAĞATAY danışmanlığında, Mehmet Can Dikici “Kurtarıcı Su Kalkanı” projesi finalde sergilenmiş ve büyük ilgi görmüştür.
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 d-none d-lg-flex">
                    <div class="box-photos">
                        <img src="/images/etkinlik/fen-yarismasi.jpg" alt="">
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
                    @include dims(100%);
                    text-align: right;
                }
            }
        }

        &:last-child { margin: 0; }
    }
</style>