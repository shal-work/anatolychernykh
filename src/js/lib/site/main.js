import scrolling from '../components/scrolling';
import Slider from '../components/carousel-tsart-class';

window.addEventListener('DOMContentLoaded', () => {

    // появление стрелки вверх
    scrolling('.pageup');

    const vidElement = document.querySelector(".main-video__frame");
    const vidSources = [
      "./assets/video/screensaver1.mp4",
      "./assets/video/screensaver2.mp4"
      ];
    let activeVideo = Math.floor((Math.random() * vidSources.length));
    vidElement.src = vidSources[activeVideo];
    vidElement.addEventListener('ended', function(e) {
      // update the active video index
      activeVideo = (++activeVideo) % vidSources.length;
      if(activeVideo === vidSources.length){
        activeVideo = 0;
      }

      // update the video source and play
      vidElement.src = vidSources[activeVideo];
      vidElement.play();
    });

        let offset = 0;
        $('.pictures__item').on('click', function() {
            const strAlt = this.querySelector('.pictures__img').alt;
            const items = document.querySelectorAll('.pictures-carousel__item');
            for (let i = 0; i < items.length; i++) {
                const img = items[i].querySelector('.pictures-carousel__img');
                if (img.alt === strAlt) {
                    offset = i;
                    break;
                }
            }
            $('.pictures-carousel').addClass('carousel-show');
            const slider = new Slider(offset,'.pictures-carousel', '.pictures-carousel__slides', '.pictures-carousel__count');
            slider.render();

            $('.pageup').removeAttribute('data-show');
            $('.pageup').addClass('fadeOut');
            $('.pageup').removeClass('fadeIn');
        });

        $('.meetings__item').on('click', function() {
            const strAlt = this.querySelector('.meetings__img').alt;
            const items = document.querySelectorAll('.meetings-carousel__item');
            for (let i = 0; i < items.length; i++) {
                const img = items[i].querySelector('.meetings-carousel__img');
                if (img.alt === strAlt) {
                    offset = i;
                    break;
                }
            }
            $('.meetings-carousel').addClass('carousel-show');
            const slider = new Slider(offset,'.meetings-carousel', '.meetings-carousel__slides', '.meetings-carousel__count');
            slider.render();

            $('.pageup').removeAttribute('data-show');
            $('.pageup').addClass('fadeOut');
            $('.pageup').removeClass('fadeIn');
        });

});

// работа с бургером
// Добавляем класс active, для замены бургера на крестик (это в css)
$('.navbar-toggle').on('click', function() {
    $('.burger').toggleClass('active');
});
let isClick = true;
$.prototype.dropdownFadeLeft = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            let toggleIsClick = () => {
                isClick ?  isClick = false : isClick = true;
            }
            if (isClick) {
                // $(`[data-toggle-id="${id}"]`).addClass("fadeInLeftMenu");  // class="header__nav collapse fadeInLeftMenu"  стоит класс
                $(`[data-toggle-id="${id}"]`).fadeIn(500, 'flex' , toggleIsClick);
                $('.logo-link').addClass('logo-link_gadget');
                $('body').addClass('none-scroll');
            } else {
                // $(`[data-toggle-id="${id}"]`).removeClass("fadeInLeftMenu"); // class="header__nav collapse fadeInLeftMenu"  стоит класс
                $(`[data-toggle-id="${id}"]`).fadeOut(500, toggleIsClick);
                $('.logo-link').removeClass('logo-link_gadget');
                $('body').removeClass('none-scroll');
            }
        });
    }
};
$('.navbar-toggle').dropdownFadeLeft();
$('.collapse').on('click', function() {
    if (window.getComputedStyle(document.querySelector('.navbar-toggle')).display != 'none') {
        let item= document.querySelectorAll('.collapse');
        item.forEach((item) => item.style.display = 'none');
        $('.burger').toggleClass('active');
        isClick ?  isClick = false : isClick = true;
    }
});
