
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Başarı Sertifikalarımız
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Başarı Sertifikalarımız
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-3">
                            <div class="userprofile">
                                <div class="userprofile-square">
                                    <img src="/images/beyaz-bayrak.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name"><a href="https://okulsagligi.meb.gov.tr/www/beyaz-bayrak-projesi/icerik/20" target="_blank">Beyaz Bayrak</a></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3">
                            <div class="userprofile">
                                <div class="userprofile-square">
                                    <img src="/images/beslenme_dostu.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name"><a href="https://hsgm.saglik.gov.tr/tr/okul-sagligi/beslenme-dostu-okullar-program%C4%B1.htmlhttps://hsgm.saglik.gov.tr/tr/okul-sagligi/beslenme-dostu-okullar-program%C4%B1.html" target="_blank">Beslenme Dostu</a></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3">
                            <div class="userprofile">
                                <div class="userprofile-square">
                                    <img src="/images/eko-okullar.png" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name"><a href="http://www.ekookullar.org.tr/" target="_blank">Eko Okullar</a></span>
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