
import '../lib.js';

const btnBurger = () => {
	// Создать наблюдателя

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
};

export default btnBurger;
