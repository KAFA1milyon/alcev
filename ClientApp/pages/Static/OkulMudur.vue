
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Okul Müdürü
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Okul Müdürü
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-photo">
                    <img class="circle-image" src="/images/okul-muduru.jpg" alt="">
                </div>

                <div class="article-content">
                    <div class="content-layer">
                        <h4>Sevgili Öğrenciler, Değerli Velilerimiz;</h4>
                        <p>Türkiye’ de çağdaş eğitim çizgisi ve kalitesinde Körfez’in ilk ve yıllardır bu çizgiden ödün vermeden en kaliteli eğitimi sunan okulunun bir ferdi olmaktan gurur duyuyorum. Okulumuza duyduğunuz güvenle teslim ettiğiniz hayattaki en değerli varlıklarınız önce evde sizlerin ama günlerinin en uzun saatlerini geçirdikleri okulda bizlerin çocuklarıdır.</p>
                        <p>Amacımız ilk önce onlara okulu sevdirmek iyi ve sağlam arkadaşlıklar kurmalarına destek olmak ama her şeyden önemlisi mutlu bireyler olarak yetişmelerine olanak sağlamaktır.</p>
                        <p>Tüm farklılıkları kabul etmeyi, hayattaki tüm renkleri görebilmeyi, kendini keşfetmeyi, var olan potansiyelinin üzerine çıkabilmeyi, bilgiye ulaşmayı, her bakış açısıyla problem çözebilen bireyler yetiştirmek hedefimiz.</p>
                        <p>İstiyoruz ki güven ortamında yetişen çocuklarımız, sınırlamalarla değil, kurdukları hayallerle büyüsün. Hayallerine ulaşmak için öğrensin, öğrendikleriyle yepyeni dünyalar kursun. Bu dünyaları kurarken kendi öz değerlerini bilsin, Atatürk’e, onun kurduğu bu ülkeye ilke ve inkılaplarına sahip çıksın. Okusun, okuduğunu anlasın ve bireysel farklılıklarını keşfeden bir birey olsun.</p>
                        <p>Bizler ALÇEV olarak Atatürk’ün yolunda çocuklarımızın daha ilk adımlarında onların ellerinden tutarak, tüm kadromuzla el ele birlikte yürüyoruz. Gelecekte ülkemizi emanet edeceğimiz öğrenciler yetiştiriyoruz.</p>
                        <p>Onlara tüm kalbimle başarılar diliyorum.</p>
                        <p>H. Seda GÜZELİŞ</p>
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

        .article-photo {
            float: left;
            padding-right: 20px;
            padding-bottom: 20px;
            background: $color-white;

            .circle-image {
                max-width: 500px;
                padding: 5px;
                border-radius: 4px;
                border: 1px solid #EFEFEF;
                background: #F9F9F9;
            }
        }

        .article-content {
            font-size: 16px;
            font-weight: 300;

            .content-layer {
                padding: 30px 0;
                border-bottom: 1px solid #EFEFEF;

                > h4 {
                    margin-bottom: 10px;
                }

                &:first-child {
                    padding-top: 0;
                }

                &:last-child {
                    border-bottom: 0;
                }
            }
        }
    }
</style>