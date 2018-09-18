
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Mezunlarımız
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Mezunlarımız
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <img style="display: block; margin: 0 auto" src="/images/mezunlarimiz.jpg" alt="" />
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
        }
    }
</style>