
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Müdür Yardımcıları
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Müdür Yardımcıları
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="row">
                        <div class="col-12 col-md-2">
                            <div class="userprofile">
                                <div class="userprofile-square">
                                    <img src="/images/personel/kazim-gungor.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name">Kazım Güngör</span>
                                    <span class="title">Müdür Yardımcısı</span>                                       
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-2">
                            <div class="userprofile">
                                <div class="userprofile-square">
                                    <img src="/images/personel/ayse-kir-asik.jpg" alt="">
                                </div>

                                <div class="userprofile-info">
                                    <span class="name">Ayşe Kır Aşık</span>
                                    <span class="title">Müdür Yardımcısı</span>                                       
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