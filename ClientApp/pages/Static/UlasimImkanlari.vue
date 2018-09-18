<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Ulaşım İmkanları
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Ulaşım İmkanları
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="content-photo">
                        <img src="/images/ulasim-imkani.jpg" alt="">
                    </div>
                    <div class="content-layer right">
                        <h3>Ulaşım İmkanlarımız</h3>
                        <p>Gelişmiş servis teşkilatımızda öğrencilerimiz için 8 adet, personelimiz için 1 adet araç mevcuttur. Servis ağımız tüm edremit körfezini kapsamaktadır. Tüm araçlarımızda 1 adet hostes bulunmaktadır. Her aracın kontenjanı 18 kişidir. Araçlarımız okula sabah 08:20 ile 08:45 arasında ulaşır. Çıkışta ise 16:45 ile 17:00 arasında okuldan ayrılır.</p>
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

                > h3 {
                    color: $color-black;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
