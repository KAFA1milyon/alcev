import Swiper from 'swiper';
import './StudentClub.scss';

$(document).ready(function () {
    var mySwiper = new Swiper ('.studentclub-swiper', {
        loopedSlides: 0,
        loopAdditionalSlides: 0,
        resistanceRatio: 0,	
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
        roundLengths: true,
        mousewheel: {
            invert: false,
            forceToAxis: false
        }
    });
});