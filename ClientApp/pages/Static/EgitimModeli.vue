
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Eğitim Modeli
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Eğitim Modeli
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="content-layer">
                        <h4>Eğitim Modelimiz ve Felsefemiz</h4>
                        <p>
                            Günümüzde bireylerden, bilgi tüketmekten çok bilgi üretmeleri beklenmektedir. Çağdaş dünyanın kabul ettiği birey; kendisine aktarılan bilgileri aynen kabul eden, yönlendirilmeyi ve biçimlendirilmeyi bekleyen değil, bilgiyi yorumlayarak anlamın yaratılması sürecine etkin olarak katılandır.
                            <br><br>
                            “Öğrenmeyi etkileyen en önemli faktör öğrencinin mevcut bilgi birikimidir.” şeklinde ifade edilen düşüncesine dayanan yapılandırmacı öğrenme yaklaşımı, temelde öğrencilerin mevcut bilgilerini kullanarak yeni bilgi edinmelerini, öğrenmeyi ve kendine özgü bilgi oluşturmayı açıklamaya çalışan bir öğrenme kuramı olarak karşımıza çıkmaktadır. Bu düşünceye göre öğrenci yeni kazandığı bilgileri eski bilgileri ile karşılaştırarak zihninde yeniden yapılandırır ve böylece etrafındaki dünyayı anlamlandırır. Öğretmen merkezli ve öğrencilerin pasif dinleyiciler oldukları geleneksel öğretim yöntemlerinin aksine bu model, öğrencinin öğrenmede daha aktif olması gerektiğini savunur.
                        </p>
                    </div>

                    <div class="content-layer">
                        <h4>Yapılandırıcı Yaklaşımın On Temel Öğrenme İlkesi </h4>
                        <ol>
                            <li>Öğrenme, pasif bir alma süreci değil, aktif bir anlam oluşturma sürecidir.</li>
                            <li>Öğrenme, kavramsal bir değişmeyi içerir; bireylerin çeşitli kavramlar ile ilgili daha önceki anlayışlarını daha karmaşık ve daha geçerli hâle getirmek için yeniden yapılandırmasıdır.</li>
                            <li>Öğrenme, özneldir. Öğrenme; bir bireyin öğrendiklerini çeşitli semboller, metaforlar, imgeler, grafikler veya modeller yoluyla içselleştirmesidir</li>
                            <li>Öğrenme, durumsaldır ve çevresel şartlara göre şekillenir; öğrenciler gerçek hayat problemlerine benzer nitelikteki problemleri çözmeyi öğrenirler.</li>
                            <li>Öğrenme, sosyaldir. Öğrenme bireylerin, perspektiflerini paylaşmak, bilgi alışverişinde bulunmak ve problemleri iş birliğine dayalı olarak çözümlemek üzere başkalarıyla olan etkileşimleri sayesinde gelişir.</li>
                            <li>Öğrenme, duygusaldır. Zihin ve duygu birbiriyle ilişkilidir. dolayısıyla, öğrenmenin doğası şu unsurlardan etkilenir: bireyin kendi becerileri hakkında sahip olduğu görüşler ve farkındalıklar, öğrenme amaçlarının açıklığı, kişisel beklentiler ve öğrenmeye karşı olan motivasyon.</li>
                            <li>Öğrenme işinin zorluk bakımından öğrencinin gelişim düzeyine uygunluğu, öğrencinin ihtiyaçlarıyla ilişkili olup olmadığı veya gerçek hayatla bağlantılı olup olmadığı gibi öğrenme işinin niteliği, öğrenme sürecinde önemlidir.</li>
                            <li>Öğrenme, gelişimseldir ve bireylerin sosyal, fiziksel, duygusal ve zihinsel gelişimlerinden doğrudan etkilenir.</li>
                            <li>Öğrenme, öğrenci merkezlidir.  .</li>
                            <li>Öğrenme, süreklidir. Öğrenme, belli bir yer veya zamanda başlayıp belli bir yer ve zamanda durmaz, aksine sürekli olarak devam eder.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
    
<script>
</script>

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

            .content-layer {
                padding: 30px 0;
                border-bottom: 1px solid #EFEFEF;

                &:first-child {
                    padding-top: 0;
                }

                > h5, > h4 {
                    margin-bottom: 20px;
                }

                &:last-child {
                    border-bottom: 0;
                }

                ol {
                    list-style: none;
                    counter-reset: item;

                    li {
                        counter-increment: item;

                        &:before {
                            @include dims(1.7em);
                            content: counter(item);
                            display: inline-block;
                            margin-right: 10px;
                            border-radius: 100%;
                            border: 1px solid $base-border-color;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>