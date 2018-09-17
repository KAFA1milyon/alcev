
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Vakıf Tarihçe
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Vakıf Tarihçe
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-photo">
                    <img class="circle-image" src="/images/alcev-logo-text.png" alt="">
                </div>

                <div class="article-content">
                    <div class="content-layer">
                        <h4>Vakıf Tarihçe</h4>
                        <p>Vakfımız 11 Mayıs 1997 tarihinde 24 kurucu üye tarafından kurulmuştur. Kurucu üyeler zamanın belediye başkanı öncülüğünde yöremizde yaşayan iş adamı ve eğitmenlerden oluşmuştur.</p>

                        <p>Kuruluş amacımız eğitimine bilimsellik, akılcılık, eşitlik, niteliklilik ve özgürlük ilkelerinin kazanılmasına katkı sağlamak. Öğrencilerimizin çağdaş, Atatürkçü, bilimsel düşünceye sahip, modern dünyaya ayak uydurabilecek, bilgili, kültürlü, düşünen, muhakeme yapabilen akılcı bir şekilde yetiştirmesini sağlamaktır.</p>

                        <p>Kurucularımız öncelikle kendileri maddi katkılar sağlayarak ve yöre halkından destek alarak 17.09.1997 tarihinde Altınoluk Belediyesine ait bir binada “Özel Alçev Mesa İlkokulu” adı ile eğitim – öğretime başlamıştır. İlk mezunlarını 2000 – 2001 eğitim – öğretim yılında vermiştir. Edremit eşrafından “ERTÜR Ailesi” 11.01.2001 tarihinde vakfımıza 2562 m2 lik bir arsa bağışlamıştır. Yöredeki iş adamlarının ve özellikle “Kadriye – Mustafa Kemal GÜREL” ailesinin maddi katkılarıyla belli bir seviyeye gelinmiştir.</p>

                        <p>Yöre halkının desteği ve kendi kısıtlı imkanlarıyla bina yapma faaliyetlerimiz zorluklarla sürdürülmüştür. 2007 yılının ilk aylarında Altınoluk okul yaptırma ve yaşatma derneği kurulmuş ve bu derneğin çalışmalarıyla 08.10.2007 tarihinde okul binamız tamamlanmıştır.</p>

                        <p>Bu binaya “Özel Altınoluk Çağdaş Eğitim Vakfı İlk Öğretim Okulu” adı altında eğitim – öğretimine başlanmıştır.</p>

                        <p>Milli eğitim bakanlığının 6280 sayılı yasayla çıkardığı 4+4+4 uygulamasıyla 2012 – 2013 eğitim – öğretim yılında okulumuzun 1.katı ilkokul, 2.katı ortaokul olarak eğitim – öğretim faaliyetlerini sürdürmektedir. 2015 yılında okulumuzun tüm fiziki koşulları restore edilmek suretiyle yenilenmiş çağdaş teknolojinin gerekleri ile donatılmıştır.</p>

                        <p>20. Eğitim yılımızda başarıyla ve gururla girdik. 300 öğrenci mevcudumuzla çağdaş eğitim çizgimizden ödün vermeden başarıdan başarıya koşmaktayız. Emeği geçen, maddi ve manevi katkıda bulunan herkese sonsuz teşekkürlerimizi sunarız.</p>
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
                > h4, p {
                    margin-bottom: 1em;
                }
            }
        }
    }
</style>