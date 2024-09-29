// сделал как на http://tsart.ru/Artist_ChernykhAnatoly.html
import $ from '../core';

// Пример вызова
// $('.pictures-carousel').carousel_tsart(
//     offset,
//     '.pictures-carousel__item',
//     '.pictures-carousel__slides',
//     '.pictures-carousel__count',

// );
$.prototype.carousel_tsart = function(num, items, slid, page='.__count') {

    for (let i = 0 ; i < this.length; i++) {
        const item = this[i].querySelectorAll(items);
        const slidesField = this[i].querySelector(slid);

        let j = 0, slideIndex = num;
        item.forEach(atom => {
            atom.style.left = 100 * j + '%';
            j++;
        });
        $(page).html(`${slideIndex + 1} / ${item.length}`);

        // slidesField.style.transform = `translateX(0%)`;
        slidesField.style.transform = `translateX(-${num * 100}%)`;

        if ((slideIndex) == 0) {
            this[i].querySelector('[data-slide="prev"]').style.visibility = 'hidden';
        } else {
            this[i].querySelector('[data-slide="prev"]').style.visibility = 'visible';
        }
        if (slideIndex == item.length - 1) {
            this[i].querySelector('[data-slide="next"]').style.visibility = 'hidden';
        } else {
            this[i].querySelector('[data-slide="next"]').style.visibility = 'visible';
        }

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            // this[i].querySelector('.pictures-carousel__prev').style.visibility = 'visible';
            this[i].querySelector('[data-slide="prev"]').style.visibility = 'visible';
            slideIndex++;
            if (slideIndex == item.length - 1) {
                this[i].querySelector('[data-slide="next"]').style.visibility = 'hidden';
            }
            $(page).html(`${slideIndex + 1} / ${item.length}`);
            slidesField.style.transform = `translateX(-${slideIndex * 100}%)`;

        });
        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            this[i].querySelector('[data-slide="next"]').style.visibility = 'visible';
            slideIndex--;
            if (slideIndex == 0) {
                this[i].querySelector('[data-slide="prev"]').style.visibility = 'hidden';
            }
            $(page).html(`${slideIndex + 1} / ${item.length}`);
            slidesField.style.transform = `translateX(-${slideIndex * 100}%)`;
        });

        $(this[i].querySelector('[data-slide="close"]')).click((e) => {
            e.preventDefault();
            item.forEach(slide => {
                slide.style.left = '';
            });
            $('.pictures-carousel').removeClass('pictures-carousel_show');
            $('.meetings-carousel').removeClass('meetings-carousel_show');
            slidesField.style.transform = '';
            $('.pageup').setAttribute('data-show', true);
        });
    }
};

// $('.carousel').carousel();
