import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

class NotesCarousel {
  constructor() {
    this.init();
  }

  init() {
    const swiper = new Swiper('.notes-carousel', {
      loop: true,
      spaceBetween: 24,
      grabCursor: true,
      slidesPerView: 5,
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
        easing: 'linear',
      },
      speed: 3000,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      },
    });
  }
}

export default NotesCarousel;
