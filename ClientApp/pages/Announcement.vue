
<template>
    <div>
        <h2 class="page-title">
            <div class="container">
                Avantajlı Erken Kayıtlarımız Başlıyor
            </div>
        </h2>

        <div class="breadcumbs">
            <div class="container">
                Anasayfa > Duyurular
            </div>
        </div>

        <div class="announcement-container">
            <div class="container">
                <VideoSlider />

                <div class="detail-wrap">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="detail-title">
                                Avantajlı Erken Kayıtlarımız Başlıyor
                                <span class="detail-date">21.07.2018</span>    
                            </h3>
                        
                            <p class="detail-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet, libero in condimentum feugiat, massa eros porttitor augue, id sollicitudin nibh ligula in dolor. Phasellus finibus blandit quam, a viverra metus iaculis ut. Nunc id sem porttitor, tincidunt odio eleifend, facilisis neque. 
                                <br>
                                Curabitur consequat pellentesque est ac imperdiet. Maecenas et dolor non dolor ultrices dignissim ut in turpis. Mauris feugiat purus quis tempus commodo. Etiam euismod sagittis tellus, quis dignissim augue sagittis eget. Vivamus dui orci, blandit a sapien id, porttitor maximus neque. Mauris cursus venenatis eros eu feugiat. Nunc non nisl eget nunc rhoncus mattis sit amet at ipsum.
                            </p>

                            <div class="detail-button">
                                <div class="button-like">
                                    <i class="icon icon-like"></i>
                                    <span class="count">3</span>
                                </div>
                                <div class="button-share">
                                    <i class="icon icon-share"></i>
                                    <span class="count">Paylaş</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6"></div>
                </div>

                <AnnouncementSlider />
            </div>
        </div>
    </div> 
</template>
    
<script>
    import VideoSlider from '../components/VideoSlider.vue';
    import AnnouncementSlider from '../components/AnnouncementSlider.vue';

    export default {
        components: { VideoSlider, AnnouncementSlider }
    }
</script>

<style lang="scss" scoped>
    .announcement-container {
        margin-top: 20px;
        
        .video-slider {
            position: relative;
            margin-bottom: 30px;
        }
            
        .detail-wrap {
            position: relative;
            display: block;
            margin-bottom: 20px;
            
            .detail-title {
                margin-bottom: 20px;
                color: #535252;
                font-weight: 500;
            
                .detail-date {
                    display: block;
                    margin-top: 10px;
                    color: #999999;
                    font-size: 14px;
                    font-weight: 300;
                }

                &:after {
                    content: '';
                    display: block;
                    margin: 10px 0;
                    width: 28px;
                    height: 3px;
                    background-color: #D8D8D8;
                }
            }

            .detail-content {
                font-size: 18px;
                font-weight: 300;
            }

            .detail-button {
                margin: 20px 0;
            
                [class*="button-"] {
                    display: inline-block;
                    margin-right: 20px;
                    font-size: 25px;

                    .icon { float:left; }
                    .count { float:left; margin-left: 10px; line-height: 27px; font-size: 12px; }
                }
            }
        }
    }
</style>