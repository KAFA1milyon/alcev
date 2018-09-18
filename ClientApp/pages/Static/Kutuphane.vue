<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Kütüphane
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Kütüphane
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="content-photo">
                        <img src="/images/kutuphane1.jpg" alt="">
                    </div>
                    <div class="content-layer right">
                        <p>Okul kütüphanesi, öğrenciyi bilgiyle tanıştıran, bilgiyi analiz etme ve eleştirisel düşünme becerisini kazandıran bir araştırma kütüphanesidir. Okul içinde kurulması zorunlu bir mekan olarak yer almasından çok, çağdaş eğitimin ayrılmaz bir parçasıdır.</p>
                    </div>
                </div>

                <div class="article-content">
                    <div class="content-layer left">
                        <p>Özel ALÇEV Eğitim Kurumları Kütüphanesinin amacı; bilimsel bilgiyi, dünyanın her yerinden yaşayabilecek, geleceğin liderleri olarak yetişecek öğrencilerimizin, onları yetiştiren öğretmenlerimizin, velilerimizin, okulumuzda görevli personelimizin ihtiyaçları doğrultusunda en sağlıklı biçimde seçmek, sağlamak, sınıflamak ve hizmete sunmaktır.</p>
                    </div>

                    <div class="content-photo">
                        <img src="/images/kutuphane2.jpg" alt="">
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
            @include display-flex();
            @include flex-wrap(wrap);
            @include flex-direction(row);

            background: #F9F9F9;
            padding: 20px;
            margin-bottom: 20px;

            font-size: 16px;
            font-weight: 300;

            border-radius: $base-border-radius;
            border: 1px solid #EFEFEF;

            .content-photo {
                @include flex(0 0 30%);

                > img { @include dims(100%); }
            }
            .content-layer {
                @include flex(0 0 68%);
                
                &.right {
                    margin-left: 20px;
                }
                &.left {
                    margin-right: 20px;
                }
            }
        }
    }
</style>
