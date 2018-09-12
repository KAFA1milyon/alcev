import Swiper from 'swiper';
import "./AnnouncementVideo.scss";

var initPlayer = function(element) {
    var player = element.querySelector('.video-iframe');
    var button = element.querySelector('.video-play');
    var ytplayer = new YT.Player(player, {
      playerVars: {
        'autoplay': 0,
        'modestbranding': 1,
        'controls': 0,
        'rel': 0,
      },
      videoId: element.dataset.id
    });
  
    button.addEventListener('click', function() {
      switch (ytplayer.getPlayerState()) {
        case 1:
          ytplayer.stopVideo();
          break;
        default:
          ytplayer.playVideo();
          break;
      }
    })
}

window.onYouTubePlayerAPIReady = function() {
    var container = document.querySelectorAll('.video-container');
    for (var i = 0; i < container.length; i++) {
      initPlayer(container[i])
    }
}

$(document).ready(function () {
    var mySwiper = new Swiper ('.video-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
    });

    mySwiper.on('slideChange', function () {
        var isVideo = mySwiper.slides[mySwiper.previousIndex].querySelector('.video-container');
        if (isVideo) {
            YT.get(isVideo.querySelector('iframe').id).stopVideo()
        }
    });
});