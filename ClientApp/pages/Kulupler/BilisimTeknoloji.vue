
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Bilişim ve Teknoloji
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Bilişim ve Teknoloji
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="content-photo">
                        <img src="/images/kulupler/bilisim1.jpg" alt="">
                    </div>
                    <div class="content-layer right">
                        <p>21. Yüzyıl bireyinin sahip olması gereken becerilerden, bilgiyi araştırmak, düzenlemek, değerlendirmek ve paylaşmak üzere teknolojiyi araç olarak kullanmak ve bilginin erişimine, kullanımına yönelik olarak etik ve yasal konularda temel bir anlayışa sahip olmak gibi özellikleri öğrencilerimize kazandırmak dersimiz hedeflerindendir.</p>
                    </div>
                </div>

                <div class="article-content">
                    <div class="content-layer left">
                        <p>Bu ders ile, öğrencilerimizin, bilgi teknolojilerindeki hızlı değişim ve gelişime paralel olarak ilerleyebilmeleri, iyi bir bilgisayar okur-yazarı olarak çağı yakından takip edebilmeleri, günlük yaşantılarında ihtiyaçlarını karşılayabilmeleri ve projeler geliştirmeleri hedeflenmektedir.</p>
                    </div>

                    <div class="content-photo">
                        <img src="/images/kulupler/bilisim2.jpg" alt="">
                    </div>
                </div>

                <div class="article-content">
                    <div class="content-photo">
                        <img src="/images/kulupler/bilisim3.jpg" alt="">
                    </div>
                    <div class="content-layer right">
                        <p>Bilişim teknolojileri derslerinde öğrencilerimizi yönlendirmek ve teşvik etmek için;</p>
                        <ol>
                            <li>Projeler üzerinden öğrenmek,</li>
                            <li>Yaparak öğrenmek,</li>
                            <li>Akran aracılığı ile öğrenmek,</li>
                            <li>Oyun ile öğrenmek,</li>
                            <li>Keşfederek öğrenmek,</li>
                            <li>Olumlu davranışları pekiştirmek,</li>
                            <li>Etkinlik üzerinden öğrenmek,</li>
                            <li>Ürün ile motive etmek,</li>
                            <li>Yapılanları sergilemek ve ödüllendirmek gibi yöntemler uygulanmaktadır.</li>
                        </ol>
                    </div>
                </div>

                <div class="article-content">
                    <div class="content-layer left">
                        <p>Öğrencilerimiz;</p>
                        <ol>
                            <li>Ödevlerini hazırlayabilecek, yazışmalar yapabilecek düzeyde Word programını kullanabilecek;</li>
                            <li>Hazırladığı projeleri etkili bir şekilde sunabilecek düzeyde Powerpoint programını kullanabilecek,</li>
                            <li>İnternet’i, hayatının her alanında, her yönüyle olumlu bir şekilde kullanabilecek,</li>
                            <li>Hayatının her alanında tablolama, hesaplama ve sonuçlarını grafiksel olarak ifade edebilecek düzeyde Excel programını kullanabilecek,</li>
                            <li>Günlük yaşantısında bültenler, broşürler, kartvizitler, kartpostallar, tebrik kartları, etiketler ile ilgili tasarımları hazırlayabilecek düzeyde Publisher programını kullanabilecek,</li>
                            <li>Bir problemin çözüm aşamalarının sıralı bir şekilde yazılarak algoritma oluşturabilecek, basit programlar yazabilecek, bilgi ve beceriye sahip kişiler olarak yetiştirilmektedir.</li>
                            <li>Okullarımızda, her öğrenci ders dışındaki çalışmalarını, bilgisayar laboratuvarlarında yapabilirler. Başka bir deyişle, her öğrenci bireysel uygulamalar ve projeler yapabilmektedir.</li>
                            <li>1., 2. ve 3. sınıf öğrencilerimiz, dersleri ana derslerine paralel eğitici oyun programları kullanırlar, resim çizerler, yazı yazarlar, afişler hazırlarlar.</li>
                        </ol>
                    </div>
                    <div class="content-photo">
                        <img src="/images/kulupler/bilisim4.jpg" alt="">
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
        position: relative;
        margin-top: 30px;
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

                > img { width: 100%; }
            }
            .content-layer {
                @include flex(0 0 68%);
                
                &.right {
                    margin-left: 20px;
                }
                &.left {
                    margin-right: 20px;
                }

                ol {
                    list-style: none;
                    margin-top: 20px;
                    padding-left: 20px;

                    li {
                        width: 100%;
                        margin-bottom: .5em;

                        &:before{
                            @include dims(8px);
                            content: '';
                            position: absolute;
                            border-right:1px solid black;
                            border-bottom:1px solid black;
                            top: calc(50% - 1px);
                            left: -20px;
                            transform: translateY(-50%) rotate(-45deg);
                        }
                    }
                }
            }
        }
    }
</style>