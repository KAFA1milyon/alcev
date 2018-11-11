<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                ALÇEV de Etüt Programı
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > ALÇEV de Etüt Programı
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    
                    <div class="content-layer">
                        <h3>ALÇEV' de Etüt</h3>
                        <p>ALÇEV Ortaokulunda öğrencilerin;</p>
                        <p>- Derslerine hazırlanmalarını, pekiştirme çalışmalarını/ödevlerini yapmalarını sağlamak,</p>
                        <p>- Bağımsız olarak kendi kendilerine çalışma alışkanlıklarını geliştirmek,</p>
                        <p>- Düzenli ve sürekli çalışma alışkanlığı kazandırmak amacıyla etüt yapılır.</p>

                        <br>
                        <p>
                            Etüt çalışmaları
                        </p>
                        <p>- Deneme sınavları sonucunda herhangi bir konuda eksikliği tespit edilen öğrenci, ilgili öğretmen tarafından etüde alınır.</p>
                        <p>- Aynı zamanda öğrenciler rehber birimine gelip etüt talebinde bulunabilirler.</p>
                        <p>- Etüt yapılan öğrenciler sisteme kaydedilir ve öğrenci velisine SMS ile bilgi verilir. </p>
                        <p>- Etüde katılmayan öğrencinin velisine SMS ile bilgi verilir. </p>
                        <p>- Etütlerde konu anlatımı ve soru çözümü, öğretmenlerimiz tarafından planlanır. </p>                        
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
