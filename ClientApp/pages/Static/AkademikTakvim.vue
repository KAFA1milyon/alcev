
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Akademik Takvim
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Akademik Takvim
            </div>
        </div>

        <div class="article-container">
            <div class="container">
                <div class="article-content">
                    <img class="responsive-image" src="/images/akademik-takvim.jpg" alt="" />
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