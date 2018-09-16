<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Eğitim Öğretim Kadrosu
            </div>
        </h2>

        <div class="container">
            <div class="teacher-tab">
                <div class="nav nav-tabs" id="teacherTab" role="tablist">
                    <a class="nav-link active" id="zumre-tab" data-toggle="tab" href="#zumre" role="tab" aria-controls="zumre" aria-selected="true">Zümre Başkanları</a>
                    <a class="nav-link" id="brans-tab" data-toggle="tab" href="#brans" role="tab" aria-controls="brans" aria-selected="false">Branş Öğretmenleri</a>
                    <a class="nav-link" id="anasinifi-tab" data-toggle="tab" href="#anasinifi" role="tab" aria-controls="anasinifi" aria-selected="false">Anasınıfı Öğretmenleri</a>
                    <a class="nav-link" id="sinif-tab" data-toggle="tab" href="#sinif" role="tab" aria-controls="sinif" aria-selected="false">Sınıf Öğretmenleri</a>
                </div>
                <div class="tab-content" id="teacherTabContent">
                    <div class="tab-pane fade show active" id="zumre" role="tabpanel" aria-labelledby="zumre-tab">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="teacher">
                                    <div class="teacher-circle">
                                        <img src="/images/hocalar/ozlem-arisoy.png" alt="">
                                    </div>

                                    <div class="teacher-info">
                                        <span class="name">Özlem Arısoy</span>
                                        <span class="title">Türkçe Zümre Başkanı</span>                                       
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="teacher">
                                    <div class="teacher-circle">
                                        <img src="/images/hocalar/sabri-sungur.png" alt="">
                                    </div>

                                    <div class="teacher-info">
                                        <span class="name">Sabri Sungur</span>
                                        <span class="title">Fen ve Teknoloji Zümre Başkanı</span>                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="teacher">
                                    <div class="teacher-circle">
                                        <img src="/images/hocalar/gulcin-ozkan.jpg" alt="">
                                    </div>

                                    <div class="teacher-info">
                                        <span class="name">Gülçin Özkan</span>
                                        <span class="title">Yabancı Diller Zümre Başkanı</span>                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="teacher">
                                    <div class="teacher-circle">
                                        <img src="/images/hocalar/mustafa-yasar.png" alt="">
                                    </div>

                                    <div class="teacher-info">
                                        <span class="name">Mustafa Yaşar</span>
                                        <span class="title">Matematik Zümre Başkanı</span>                                       
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="teacher">
                                    <div class="teacher-circle">
                                        <img src="/images/hocalar/nuray-tasar.jpg" alt="">
                                    </div>

                                    <div class="teacher-info">
                                        <span class="name">Nuray Taşar</span>
                                        <span class="title">İlkokul Zümre Başkanı</span>                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="teacher">
                                    <div class="teacher-circle">
                                        <img src="/images/hocalar/ebru-eryalcin.jpg" alt="">
                                    </div>

                                    <div class="teacher-info">
                                        <span class="name">Ebru Eryalçın</span>
                                        <span class="title">Anasınıfı Zümre Başkanı</span>                                        
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>

                    <div class="tab-pane fade" id="brans" role="tabpanel" aria-labelledby="brans-tab">
                        <div class="row">                         

                        </div>
                    </div>

                    <div class="tab-pane fade" id="anasinifi" role="tabpanel" aria-labelledby="anasinifi-tab">
                        
                    </div>

                    <div class="tab-pane fade" id="sinif" role="tabpanel" aria-labelledby="sinif-tab">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .teacher-tab {
        margin-top: 40px;

        .nav-tabs {
            @include justify-content(space-between);
            background-color: #EFEFEF;
            border: 0;

            .nav-link {
                padding: 15px 40px;
                border: none;
                font-size: 18px;
                font-weight: 500;
                color: #999999;

                &.active {
                    border-radius: 0;
                    background-image: linear-gradient(45deg, #FFBC5C 0%, #FF872F 100%);
                    color: $color-white;
                }

                &:first-child {
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                }
                &:last-child {
                    border-top-right-radius: 0.25rem;
                    border-bottom-right-radius: 0.25rem;
                }
            }
        }

        .tab-content {
            padding: 50px 10px 20px;

            .tab-pane {
                &.show {
                    @include justify-content(space-between);
                    @include display-flex();
                    @include flex-wrap(wrap);
                }
            }

            .teacher {
                @include display-flex();
                @include flex-wrap(wrap);
                @include align-items(center);
                @include flex-direction(column);
                
                position:relative;
                margin: 20px 0;
                width: 100%;
                
                &-circle {
                    @include display-flex();
                    @include align-items(center);
                    @include dims(200px);
                    -webkit-border-radius: 99em;
                    -moz-border-radius: 99em;
                    border-radius: 99em;
                    border: 2px solid #FF872F;
                    background: #D8D8D8;
                    overflow: hidden;
                    
                    > img {
                        display: inline;
                        margin: 0 auto;
                        margin-left: -25%;
                    }
                }

                &-info {
                    @include display-flex();
                    @include flex-direction(column);
                    @include align-items(center);

                    > span { margin: 5px 0; }

                    .name {
                        color: #535252;
                        font-size: 18px;
                        font-weight: 500;
                    }
                    .title,
                    .email {
                        color: #6B6B6B;
                        font-size: 14px;
                        font-weight: 400;
                    }
                }
            }
        }
    }
</style>