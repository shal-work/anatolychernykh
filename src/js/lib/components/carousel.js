import $ from '../core';

$.prototype.carousel = function(num, inner, item, slid ) {


    for (let i = 0 ; i < this.length; i++) {
        // const width = window.getComputedStyle(this[i].querySelector('.pictures-carousel__inner')).width;
        const width = window.getComputedStyle(this[i].querySelector(inner)).width;
        // const slides = this[i].querySelectorAll('.pictures-carousel__item');
        const slides = this[i].querySelectorAll(item);
        // const slidesField = this[i].querySelector('.pictures-carousel__slides');
        const slidesField = this[i].querySelector(slid);

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });


        let offset = (+width.split('.')[0].replace(/\D/g, '') * (num));
        let slideIndex = 0;

        slidesField.style.transform = `translateX(-${offset}px)`;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();

            if (offset == (+width.split('.')[0].replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.split('.')[0].replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.split('.')[0].replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.split('.')[0].replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
        });

    }
};

// $('.carousel').carousel();
