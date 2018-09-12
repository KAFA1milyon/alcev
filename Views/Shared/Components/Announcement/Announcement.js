import Swiper from 'swiper';
import "./Announcement.scss";

$(document).ready(function () {
    var mySwiper = new Swiper ('.announcement-swiper', {
        slidesPerView: 3.5,
        slidesPerGroup: 3,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
});