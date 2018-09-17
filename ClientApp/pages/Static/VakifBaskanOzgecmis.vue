
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Vakıf Başkanının Özgeçmişi
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Vakıf Başkanının Özgeçmişi
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-photo">
                    <img class="circle-image" src="/images/alcev-baskan.jpg" alt="">
                </div>

                <div class="article-content">
                    <div class="content-layer">
                        <h4>Vakıf Başkanının Özgeçmişi</h4>
                        <p>1955 Malatya doğumlu. Diyarbakır eğitim fakültesi matematik bölümü mezunudur. 16 yıl Balıkesir ilinin çeşitli okullarında matematik öğretmeni olarak görev yapmış ve mesleğinden ayrılarak inşaat sektöründe çalışmaya başlamıştır. Vakfımızın kuruluşunda kurucu üye olarak görev almıştır. Bu süre içinde vakıf yönetiminde yer almıştır.</p>
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