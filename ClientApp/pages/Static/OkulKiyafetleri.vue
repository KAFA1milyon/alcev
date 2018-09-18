
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
            <div class="row">
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
          src: 'http://via.placeholder.com/600x400',
          thumbnail: 'http://via.placeholder.com/64x64',
          w: 600,
          h: 400
        }, {
          src: 'http://via.placeholder.com/1200x900',
          thumbnail: 'http://via.placeholder.com/64x64',
          w: 1200,
          h: 900
        }
      ]};
    }
  }
</script> 
