<style lang="scss" scoped>
    .gallery {
        a {
            width: 30%;

            > img  { display:block; width: 100%; }
        }
    }
</style>


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
                <vue-picture-swipe :options="{shareEl: false}" :items="items"></vue-picture-swipe>
            </div>
        </div>
    </div> 
</template>

<script>
  import VuePictureSwipe from 'vue-picture-swipe';
  

  export default {
    components: { 'vue-picture-swipe': VuePictureSwipe },
    data() {
      return {
        items: [{
          src: '/images/kiyafet/anaokul-esofman-alti.jpg',
          thumbnail: '/images/kiyafet/anaokul-esofman-alti.jpg',
          w: 600,
          h: 400
        }, {
          src: '/images/kiyafet/anaokul-kapsonlu.jpg',
          thumbnail: '/images/kiyafet/anaokul-kapsonlu.jpg',
          w: 600,
          h: 400
        }, {
          src: '/images/kiyafet/anaokul-sort.jpg',
          thumbnail: '/images/kiyafet/anaokul-sort.jpg',
          w: 600,
          h: 400
        }, {
          src: '/images/kiyafet/anaokul-tisort.jpg',
          thumbnail: '/images/kiyafet/anaokul-tisort.jpg',
          w: 600,
          h: 400
        }, {
          src: '/images/kiyafet/ilk-okul-lacoste.jpg',
          thumbnail: '/images/kiyafet/ilk-okul-lacoste.jpg',
          w: 600,
          h: 400
        }, {
          src: '/images/kiyafet/ilk-okul-pantolon-etek.jpg',
          thumbnail: '/images/kiyafet/ilk-okul-pantolon-etek.jpg',
          w: 600,
          h: 400
        }, {
          src: '/images/kiyafet/ilk-okul-takim.jpg',
          thumbnail: '/images/kiyafet/ilk-okul-takim.jpg',
          w: 600,
          h: 400
        }, {
          src: '/images/kiyafet/ilk-okul-tisort.jpg',
          thumbnail: '/images/kiyafet/ilk-okul-tisort.jpg',
          w: 600,
          h: 400
        }, {
          src: '/images/kiyafet/ilk-okul-uzun-kol-tisort.jpg',
          thumbnail: '/images/kiyafet/ilk-okul-uzun-kol-tisort.jpg',
          w: 600,
          h: 400
        }
      ]};
    }
  }
</script> 
