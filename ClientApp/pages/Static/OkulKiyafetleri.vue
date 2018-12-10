<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Okul Kıyafetleri
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Okul Kıyafetleri
            </div>
        </div>

        <div class="container">
            <div class="gallery">
                <img class="image" v-for="(image, i) in images" :key="i" :src="image" @click="index = i">
                <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
            </div>
        </div>
    </div> 
</template>

<script>
  export default {
    data() {
      return {
        images: [
          '/images/kiyafet/pantolon.jpg',
          '/images/kiyafet/sort1.jpg',
          '/images/kiyafet/tshirt.jpg',
          '/images/kiyafet/uzun-okullu-1.jpg'
        ],
        index: null
      };
    }
  }
</script> 

<style lang="scss" scoped>
    .gallery {
        .image {
          width: 200px;
          height: auto;
          background-size: cover;
          cursor: pointer;
          margin: 5px;
          border-radius: 3px;
          border: 1px solid lightgray;
        }
    }
</style>