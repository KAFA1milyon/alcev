
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Hizmet Standartlarımız
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Hizmet Standartlarımız
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="content-layer">
                        <h4>Özel Altınoluk Çağdaş Eğitim Vakfı İlkokulu ve Ortaokulu Hizmet Standartları</h4>
                        <br><br>
                    
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Hizmet Adı</th>
                                    <th>İstenen Belgeler</th>
                                    <th>Hizmetin Tamamlanma Süresi (En Geç)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Öğrenci Kayıt ve Kabul</td>
                                    <td>
                                        1. Dilekçe <br>
                                        2. T.C Kimlik Fotokopisi
                                    </td>
                                    <td>Aynı gün</td>
                                </tr>
                                <tr>
                                    <td>Öğrenci Belgesi</td>
                                    <td>Sözlü veya yazılı başvuru</td>
                                    <td>Aynı gün</td>
                                </tr>
                                <tr>
                                    <td>Öğrenci Durum Belgesi</td>
                                    <td>Dilekçe</td>
                                    <td>Aynı gün</td>
                                </tr>
                                <tr>
                                    <td>Öğrenci Transkript – Öğrenim Belgesi</td>
                                    <td>Dilekçe</td>
                                    <td>Aynı gün</td>
                                </tr>
                                <tr>
                                    <td>ğrenim belgesini kaybedenlere yeniden belge verilmesi</td>
                                    <td>Dilekçe</td>
                                    <td>Aynı gün</td>
                                </tr>
                                <tr>
                                    <td>Öğrenci yetiştirme kurslarından yararlanma	</td>
                                    <td>Dilekçe</td>
                                    <td>Aynı gün</td>
                                </tr>
                                <tr>
                                    <td>Öğrenci servis taşımacılığı</td>
                                    <td>Öğrenci Servis Hizmetleri Yönetmeliği’nde istenen belgeler</td>
                                    <td>Bir hafta</td>
                                </tr>
                                <tr>
                                    <td>Burslu ve ücretsiz okuyacak öğrenciler	</td>
                                    <td>Özel Öğretim Kurumları Yönetmeliği’nde istenen belgeler</td>
                                    <td>Bir ay</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>Başvuru esnasında yukarıda belirtilen belgelerin dışında belge istenmesi, eksiksiz belge ile başvuru yapılmasına rağmen hizmetin belirtilen sürede tamamlanmaması veya yukarıda tabloda bazı hizmetlerin bulunmadığının tespiti durumunda ilk müracaat yerine ya da ikinci müracaat yerine başvurunuz.</p>
                        <br>

                        <strong>İlk Müracaat Yeri: Okul Müdürlüğü</strong><br>
                        İsim  : Hürmüz Seda GÜZELİŞ<br>
                        Unvan : Okul Müdürü<br>
                        Adres : Altınoluk Mah. Lise Cad. No: 13 / 1 10870  EDREMİT<br>
                        Tel : 0 (266) 396 90 11<br>
                        Faks : 0 (266) 396 90 15<br>
                        e-Posta : info@alcev.k12.tr

                        <br><br>
                        <strong>İkinci Müracaat Yeri: İlçe Milli Eğitim Müdürlüğü</strong><br>
                        İsim  : Yusuf KOÇ<br>
                        Unvan  : İlçe Milli Eğitim Müdürü<br>
                        Adres : Yılmaz Akpınar Bulvarı 10800 EDREMİT / BALIKESİR<br>
                        Tel : 0 (266) 373 27 40<br>
                        Faks : 0 (266) 374 10 49<br>
                        e-Posta : edremit10@meb.gov.tr
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

                > h4 {
                    margin-bottom: 10px;
                }

                .table {
                    text-align: left;
                    table-layout: fixed;
                    word-wrap: break-word;
                    
                    > thead { font-weight: 500; }
                }

                &:last-child {
                    border-bottom: 0;
                }
            }
        }
    }
</style>