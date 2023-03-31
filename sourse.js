const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
       breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: 16,
        },
        767: {
            enabled: false,
            onAny() {
                swiper.destroy(true, true);
            }
        },
    },
    observer: true,
});


const btnShowMore = document.querySelector('.button__show-more');
const btnHide = document.querySelector('.button__hide');
const sliders = document.querySelector('.swiper');

btnShowMore.addEventListener ('click', function () {
    btnShowMore.classList.add('button__hidden');
    sliders.classList.add ('swiper-total');
    btnHide.classList.remove('button__hidden');
});

btnHide.addEventListener ('click', function () {
    btnHide.classList.add('button__hidden');
    sliders.classList.remove ('swiper-total');
    btnShowMore.classList.remove('button__hidden');
  });
