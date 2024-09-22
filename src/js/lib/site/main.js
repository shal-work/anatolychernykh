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
                $(`[data-toggle-id="${id}"]`).removeClass("fadeOutLeft");
                $(`[data-toggle-id="${id}"]`).addClass("fadeInLeft");
                $(`[data-toggle-id="${id}"]`).fadeIn(500, 'flex' , toggleIsClick);
                $('.logo-link').addClass('logo-link_gadget');
                $('body').addClass('none-scroll');
            } else {
                $(`[data-toggle-id="${id}"]`).removeClass("fadeInLeft");
                $(`[data-toggle-id="${id}"]`).addClass("fadeOutLeft");
                $(`[data-toggle-id="${id}"]`).fadeOut(500, toggleIsClick);
                $('.logo-link').removeClass('logo-link_gadget');
                $('body').removeClass('none-scroll');
            }
        });
    }
};
$('.navbar-toggle').dropdownFadeLeft();

// работа слайдера pictures
$('.pictures__item').on('click', function() {
    const strAlt = this.querySelector('.pictures__img').alt;
    const items = document.querySelectorAll('.pictures-carousel__item');
    let offset = -1;
    for (let i = 0; i < items.length; i++) {
        const img = items[i].querySelector('.pictures-carousel__img');
        if (img.alt === strAlt) {
            offset = i;
            break;
        }
   }
    $('.pictures-carousel').addClass('pictures-carousel_show');
    $('.pictures-carousel').carousel(
        offset,
        '.pictures-carousel__inner',
        '.pictures-carousel__item',
        '.pictures-carousel__slides'
    );
    $('.pageup').addClass('fadeOut');
    $('.pageup').removeClass('fadeIn');
});
$('.btn-close').on('click', function() {
    $('.pictures-carousel').removeClass('pictures-carousel_show');

    const slide = document.querySelector('.pictures-carousel__slides');
    const items = document.querySelectorAll('.pictures-carousel__item');
    slide.style.width = 'auto';
    items.forEach(item => {
        item.style.width = 'auto';
    });
    slide.style.transform = `translateX(0px)`;
});

// работа слайдера meetings
$('.meetings__item').on('click', function() {
    const strAlt = this.querySelector('.meetings__img').alt;

    const items = document.querySelectorAll('.meetings-carousel__item');
    let offset = -1;
    for (let i = 0; i < items.length; i++) {
        const img = items[i].querySelector('.meetings-carousel__img');
        if (img.alt === strAlt) {
            offset = i;
            break;
        }
   }
    $('.meetings-carousel').addClass('meetings-carousel_show');
    $('.meetings-carousel').carousel(
        offset,
        '.meetings-carousel__inner',
        '.meetings-carousel__item',
        '.meetings-carousel__slides'
    );
    $('.pageup').addClass('fadeOut');
    $('.pageup').removeClass('fadeIn');
});


$('.meetings-btn-close').on('click', function() {
    $('.meetings-carousel').removeClass('meetings-carousel_show');

    const slide = document.querySelector('.meetings-carousel__slides');
    const items = document.querySelectorAll('.meetings-carousel__item');
    slide.style.width = 'auto';
    items.forEach(item => {
        item.style.width = 'auto';
    });
    slide.style.transform = `translateX(0px)`;
});



import scrolling from '../components/scrolling';


window.addEventListener('DOMContentLoaded', () => {
    // const iframe = document.querySelector(".main-video__iframe");
    // const video = document.querySelector(".main-video");
    // iframe.addEventListener("mouseout", function() {
    //     const screenPape = document.querySelector(".screen-pape");
    //     screenPape.style.zIndex = "20";
    // });

    // try {

    //     const player = VK.VideoPlayer(iframe);
    //     player.mute();
    //     player.seek(0);
    //     player.play();


    //     player.on('error', () => {
    //         const video = document.querySelector(".main-video");
    //         video.style.display = 'none';
    //     });

    // } catch (error) {
    //         const video = document.querySelector(".main-video");
    //         video.style.display = 'none';
    // }
    scrolling('.pageup');
});
