
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
                        <p>Bir ulusun geleceğinin güvencesi; en önemli dinamik gücü hiç kuşkusuz o ülkenin gençleridir.Gençlik ülkenin geleceğinin güvencesidir. Gençlerden beklenen kendisinin ve ülkesinin geleceğini kurma yolunda daha güzel bir dünyada yaşayabilmek işlevini gerçekleştirmektir. Bu ise ancak iyi bir eğitimle olur. Eğitim kurumlarının geleceğimizde önemli bir yeri vardır. Kurtuluş savaşının ardından büyük kurtarıcımız Mustafa Kemal Atatürk eğitim alanında devrimler başlatmıştır. O biliyordu ki medeni ulusların düzeyine çıkmanın tek yolu başta eğitimde devrim ile olacaktı. Ne yazık ki onun başlattığı devrimler ölümünden sonra kesintilere uğradı. Özellikle aydınlanma yolunda Anadolu’da çok büyük bir çığır açan köy enstitülülerinin kapatılması ile birlikte eğitim sistemimiz her geçen gün bozulmaya başlamıştır. Ne yazık ki bugün ülkemiz eğitimi alt yapısıyla ve sosyal üst yapısıyla hiç de iyi bir durumda değildi.</p>
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