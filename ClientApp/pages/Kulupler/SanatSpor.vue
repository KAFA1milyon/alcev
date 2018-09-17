
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Sanat ve Spor
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Sanat ve Spor
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <div class="content-layer left">
                        <h3>Voleybol</h3>
                        <p>Voleybol özgün yapısını öğrencilere sevdirip bu takım oyununu zevk alarak oynamalarını sağlamak.Vücut kontrolü, çeviklik, hız, top kontrolü ve teknik antrenmanla öğrencilerimizin bu sporu daha elit düzeyde algılayıp oynamalarını sağlamak. Bu bağlamda alt yaş gruplarından başlayarak alt yapı çalışmaları daha üst yaş grupları için ise daha koordineli oyun antrenmanları ile alt yapı çalışması yapıyoruz. Yaptığımız çalışmalar ile aynı zamanda okul takımımızı  oluşturup resmi ve hazırlık müsabakaları ile okulumuzu temsil etmektir.</p>
                    </div>
                    <div class="content-photo">
                        <img src="/images/kulupler/voleybol.jpg" alt="">
                    </div>
                </div>

                <div class="article-content">
                    <div class="content-photo">
                        <img src="/images/kulupler/basketbol.jpg" alt="">
                    </div>
                    <div class="content-layer right">
                        <h3>Basketbol</h3>
                        <p>Basketbol kulübünde öğrencilere; branşa özgü oyun kuralları ve temel teknik becerilerin kazandırılması hedeflenir. Yıl içerisinde arkadaşlık ilişkileri, takım olma ve birlikte davranma becerilerinin geliştirilmesine yönelik alıştırmalar yapılır. Bir diğer amacımız ise yaptığımız çalışmalar ile aynı zamanda okul takımımızı oluşturup resmi ve hazırlık müsabakaları ile okulumuzu temsil etmektir.</p>
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

                > h3 {
                    color: $color-black;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>