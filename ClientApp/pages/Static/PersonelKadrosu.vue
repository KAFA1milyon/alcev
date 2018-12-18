
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Personel Kadrosu
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Personel Kadrosu
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <div class="userprofile">
                                <div class="userprofile-circle">
                                    <img src="/images/personel/huseyin-esen.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name">Hüseyin Esen</span>
                                    <span class="title">Hizmetli</span>                                       
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="userprofile">
                                <div class="userprofile-circle">
                                    <img src="/images/personel/fatma-cengel.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name">Fatma Çengel</span>
                                    <span class="title">Hizmetli</span>                                       
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="userprofile">
                                <div class="userprofile-circle">
                                    <img src="/images/personel/ali-atag.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name">Ali Atag</span>
                                    <span class="title">Güvenlik</span>                                       
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="userprofile">
                                <div class="userprofile-circle">
                                    <img src="/images/personel/gizem-cankaya.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name">Gizem Çankaya</span>
                                    <span class="title">Yazı İşleri</span>                                       
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="userprofile">
                                <div class="userprofile-circle">
                                    <img src="/images/personel/fatma-colak-oflak.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name">Fatma Çolak Oflak</span>
                                    <span class="title">Yazı İşleri</span>                                       
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="userprofile">
                                <div class="userprofile-circle">
                                    <img src="/images/personel/zubeyde-zorer.png" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name">Zübeyde Zorer</span>
                                    <span class="title">Muhasebe</span>                                       
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="userprofile">
                                <div class="userprofile-circle">
                                    <img src="/images/personel/yeliz-ozturk.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name">Yeliz Öztürk</span>
                                    <span class="title">Danışma</span>                                       
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
    .article-container {
        @include display-flex();
        position: relative;
        margin: 30px 0;
        color: $color-gray;
        font-size: 18px;
        font-weight: 400;

        .article-content {
            font-size: 16px;
            font-weight: 300;
        }
    }
</style>