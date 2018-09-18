
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Tarihçe
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Tarihçe
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <h2>
                        Altınoluk Çağdaş Eğitim Vakfı
                        <span>İlköğretim Kurumları</span>
                    </h2>
                    <br><br>

                    <div class="row">
                        <div class="col-12 col-md-4">
                            <div class="content-layer">
                                <h3>1997</h3>
                                <p>Okulumuz 17 Eylül 1997 tarihinde, 70 öğrenci ile mülkiye Altınoluk Belediyesi’ne ait olan bir binada “Özel ALÇEV MESA İLKÖĞRETİM OKULU” adı ile eğitim – öğretime başlamış ve 5 Ekim 2007 tarihine kadar bu binada eğitim – öğretimini sürdürmüştür.Açıldığı yıl sadece ana sınıfından 5. sınıfa kadar öğrenci alınmıştır.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-4">
                            <div class="content-layer">
                                <h3>2000-2001</h3>
                                <p>Her yıl bir üst sınıf açılmış ve okulumuz ilk mezunlarını 2000 – 2001 eğitim – öğretim yılında vermiştir. 11 Ocak 2001 tarihinde, Edremitli ERTÜR ailesi vakfımıza 2652 metrekarelik bir arsa bağışlamıştır.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-4">
                            <div class="content-layer">
                                <h3>2002</h3>
                                <p>ERTÜR ailesinin bağışladığı arsa üzerine 29 Mart 2002 tarihinde temel atılarak inşaata başlanmıştır.Balıkesir’de yaşayan emekli öğretmenler Kadriye – Mustafa Kemal Gürel ailesinin katkılarıyla inşaat belli bir seviyeye ulaşmıştır.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row m-t-40">
                        <div class="col-12 col-md-4">
                            <div class="content-layer">
                                <h3>2007</h3>
                                <p>İnşaatın bir an önce tamamlanması amacıyla 2007 yılının başlarında “Okul Yaptırma ve Yaşatma Derneği” kurulmuştur.Derneğin öncülüğünde, başta Altınoluk halkı olmak üzere yardımseverlerin maddi, manevi katkılarıyla inşaat kısa sürede bitirilmiştir.8 Ekim 2007 tarihinde “Özel Altınoluk Çağdaş Eğitim Vakfı İlköğretim Okulu” adı ile halen kullanılan binada eğitim – öğretime başlanmıştır.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-4">
                            <div class="content-layer">
                                <h3>2012</h3>
                                <p>30 Mart 2012 tarihli 28261 sayılı Resmi Gazete’de yayımlanan 6287 sayılı “İlköğretim ve Eğitim kanunu ile Bazı Kanunlarda Değişiklik Yapılmasına Dair” kanun gereğince 4+4+4 uygulamasına geçilmiştir.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-4">
                            <div class="content-layer">
                                <h3>2013</h3>
                                <p>2012 – 2013 eğitim – öğretim yılından itibaren binanın 1. katı “Özel Altınoluk Çağdaş Eğitim Vakfı İlkokulu”, 2. katı da “Özel Altınoluk Çağdaş Eğitim Vakfı Ortaokulu” olarak eğitim – öğretimini sürdürmektedir.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="section m-t-40 m-b-20">
                    <Aboutbox />
                </section>
            </div>
        </div>
    </div> 
</template>

<script>
    import Aboutbox from '../../components/Aboutbox.vue';

    export default {
        components: { Aboutbox }
    }
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

            h2 {
                color: $color-black;
                text-align: center;
                margin-bottom: 10px;

                span {
                    display: block;
                    margin-top: 20px;
                    font-size: 0.7em;
                }
            }

            h3 {
                color: $color-black;
                margin-bottom: 10px;
            }

            .content-layer {
                @include flex(0 0 68%);
            }
        }
    }
</style>