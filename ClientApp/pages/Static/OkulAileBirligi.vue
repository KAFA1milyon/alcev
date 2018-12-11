
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Okul Aile Birliği
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Okul Aile Birliği
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="content-layer">
                        <h3>Özel Altınoluk Çağdaş Eğitim Vakfı İlkokulu / Ortaokulu 2017 – 2018 Eğitim Öğretim Yılı</h3>
                        <br><br>
                    
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Okul Aile Birliği Üye Listesi</th>
                                    <th>Görevi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>SUZAN AZATOĞLU</th>
                                    <td>Başkan</td>
                                </tr>
                                <tr>
                                    <th>ŞULE ULUDOĞAN</th>
                                    <td>Başkan Yardımcısı</td>
                                </tr>
                                <tr>
                                    <th>SEVİLAY AL</th>
                                    <td>Sayman</td>
                                </tr>
                                <tr>
                                    <th>DEVRİM BAHTİYAR</th>
                                    <td>Sekreter</td>
                                </tr>
                                <tr>
                                    <th>AHMET TÖNGÜT</th>
                                    <td>Asil Üye</td>
                                </tr>
                                <tr>
                                    <th>HAKAN KANDUR</th>
                                    <td>Asil Üye</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!--<div class="content-layer">
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Yönetim Kurulu Yedek Üyeler</th>
                                    <th>Görevi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Arzu KOCABAŞ</th>
                                    <td>Asil Üye</td>
                                </tr>
                                <tr>
                                    <th>İsa DEMİREZ</th>
                                    <td>Asil Üye</td>
                                </tr>
                                <tr>
                                    <th>Enver ŞARA</th>
                                    <td>Asil Üye</td>
                                </tr>
                                <tr>
                                    <th>Seda ANBARLIOĞLU</th>
                                    <td>Asil Üye</td>
                                </tr>
                                <tr>
                                    <th>Suna ORHAN</th>
                                    <td>Asil Üye</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="content-layer">
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Denetleme Kurulu Asil Üyeler</th>
                                    <th>Görevi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Çetin KAVAS</th>
                                    <td>Asil Üye</td>
                                </tr>
                                <tr>
                                    <th>Nuray TAŞAR</th>
                                    <td>Öğretmen</td>
                                </tr>
                                <tr>
                                    <th>Gülçin ÖZKAN</th>
                                    <td>Öğretmen</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="content-layer">
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Denetleme Kurulu Yedek Üyeler</th>
                                    <th>Görevi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Aylin YAMAN</th>
                                    <td>Yedek Üye</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>-->
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

                > h3 {
                    margin-bottom: 10px;
                }

                .table {
                    text-align: left;
                    table-layout: fixed;
                    word-wrap: break-word;
                    width: 80%;
                    margin: 0 auto;
                    
                    > thead { font-weight: 500; }
                }

                &:last-child {
                    border-bottom: 0;
                }
            }
        }
    }
</style>