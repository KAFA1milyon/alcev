
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                İdari Yapı
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > İdari Yapı
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <img style="display: block; margin: 0 auto" src="/images/idari-yapi.jpg" alt="" />
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