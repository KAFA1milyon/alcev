
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Misyon Ve Vizyonumuz
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Misyon Ve Vizyonumuz
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="content-layer">
                        <h4>MİSYONUMUZ</h4>
                        <p>
                            Geri kalmış ülkelerin temel sorunlarından birisi eğitimdir. Ülkemizde ne yazık ki çağdaş ülkeler düzeyinde bir eğitim sistemi henüz oturtulmamıştır. Ülkemiz eğitimine bu konuda katkıda bulunmak, muhakeme eden, projeler üretebilen, yurtsever, donanımlı bireyler yetiştirmeyi amaçlayarak bu vakıf kurulmuştur. Kültürlü, bilgili, bilgiyi kullanabilen, paylaşımcı, modern, bilimsel dünyaya ayak uydurabilen, Atatürk İlke ve İnkılaplarını özümsemiş, özgür bilim insanları yetiştirmek bizim misyonumuz. Amacımız bu çalışmaları prensiplerinden ödün vermeden ilkeli duruşumuzu devam ettirerek, kurumsallaşarak gelecek nesillere bu konuda hizmet vermektir.
                        </p>
                    </div>

                    <div class="content-layer">
                        <h4>VİZYONUMUZ</h4>
                        <p>
                            Yaşamayı, hayatı, doğayı seven ve koruyan; dünyayı izleyen, dünyaya açılmayı hedefleyen; bilime, bilimsel çalışmalara açık; ezbere dayanmayan, öğrenme isteği kazanmış; yabancı dili bir araç kabul ederek üst düzeyde öğrenme isteği duyan; özgür düşünen, kendine güvenen, sorunlarını çözebilen, başkalarının haklarına saygılı; takım çalışmasını benimsemiş; ülkesine ve çağına sorumlu; sağlıklı yaşamayı ve sporu önemseyen ve bunu yaşam biçimi haline getiren; güzel sanatları seven, yaşamın içindeki güzellikleri güzel sanatlarda bulan; öğrenciler yetiştirmektir.
                        </p>
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

            .content-layer {
                padding: 30px 0;
                border-bottom: 1px solid #EFEFEF;

                &:first-child {
                    padding-top: 0;
                }

                > h4 {
                    margin-bottom: 10px;
                }

                &:last-child {
                    border-bottom: 0;
                }
            }
        }
    }
</style>