
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Yemek Listesi
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Yemek Listesi
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="content-layer">
                        <h4>Özel Altınoluk Çağdaş Eğitim Vakfı İlkokulu ve Ortaokulu Yemek Listesi</h4>
                        <br><br>

                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Tarih</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        24.09.2018 <br>
                                        Pazartesi
                                    </td>
                                    <td>Anamaşı Çorba</td>
                                    <td>Balık</td>
                                    <td>Makarna</td>
                                    <td>Helva</td>
                                    <td>Salata Köşesi</td>
                                </tr>
                                <tr>
                                    <td>
                                        25.09.2018 <br>
                                        Salı
                                    </td>
                                    <td>Yayla Çorba</td>
                                    <td>Etli Biber Dolma</td>
                                    <td>Peynirli Börek</td>
                                    <td>Yoğurt</td>
                                    <td>Salata Köşesi</td>
                                </tr>
                                <tr>
                                    <td>
                                        26.09.2018 <br>
                                        Çarşamba
                                    </td>
                                    <td>Mercimek Çorbası</td>
                                    <td>Tavuk Kavurma</td>
                                    <td>Sebzeli Erişte</td>
                                    <td>Supangle</td>
                                    <td>Salata Köşesi</td>
                                </tr>
                                <tr>
                                    <td>
                                        27.09.2018 <br>
                                        Perşembe
                                    </td>
                                    <td>K. Domates Çorbası</td>
                                    <td>Mantı</td>
                                    <td>Şakşuka</td>
                                    <td>Yoğurt</td>
                                    <td>Salata Köşesi</td>
                                </tr>
                                <tr>
                                    <td>
                                        28.09.2018 <br>
                                        Cuma
                                    </td>
                                    <td>K. Sebze Çorbası</td>
                                    <td>Pizza</td>
                                    <td>Patates Cipsi</td>
                                    <td>Ayran</td>
                                    <td>Salata Köşesi</td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table table-hover table-bordered">
                            <tr>
                                <td>Tavuk Ürünleri : </td>
                                <td>BANVİT</td>
                                <td></td>
                                <td>Ayran - Yoğurt - Tereyağ : </td>
                                <td>SAKIPAĞA</td>
                            </tr>
                            <tr>
                                <td>Et Ürünleri : </td>
                                <td>ÜNLÜ ET MAMULLERİ GÜRE</td>
                                <td></td>
                                <td>Zeytinyağı : </td>
                                <td>DROP</td>
                            </tr>
                            <tr>
                                <td>Pirinç : </td>
                                <td>GÖNEN BALDO</td>
                                <td></td>
                                <td>Süt : </td>
                                <td>DANONE</td>
                            </tr>
                            <tr>
                                <td>Bakliyatlar : </td>
                                <td>BAŞHAN</td>
                                <td></td>
                                <td>Sebze Meyve : </td>
                                <td>BALIKESİR HAL</td>
                            </tr>
                            <tr>
                                <td>Makarna : </td>
                                <td>NUHUN ANKARA</td>
                                <td></td>
                                <td>Sucuk - Salam - Sosis : </td>
                                <td>PINAR</td>
                            </tr>
                            <tr>
                                <td>Baharatlar: </td>
                                <td>BAĞDAT BAHARAT</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
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