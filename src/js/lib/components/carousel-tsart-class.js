// структура
//<div class="pictures-carousel">
//    <button data-slide="close"></button>
//    <div class="pictures-carousel__inner">
//       <div class="pictures-carousel__slides">
//            <div class="pictures-carousel__item">
//                <div class="pictures-carousel__block">
//                    <img class="pictures-carousel__img" src="./assets/img/holytrinity.jpg" alt="Троица">
//                </div>
//                <div class="paragraph pictures__text line-clamp">
//                   Поздравляю с Троицей! Здоровья и благополучия Вам!
//                </div>
//            </div>
//             . . .
//
//        </div>
//    </div>
//    <div class="pictures-carousel__header">
//        <div class="pictures-carousel__count"></div>
//   </div>
//    <a href="#" class="pictures-carousel__prev" data-slide="prev">
//        <span class="carousel-prev-icon">&lt;</span>
//    </a>
//    <a href="#" class="pictures-carousel__next" data-slide="next">
//        <span class="carousel-next-icon">&gt;</span>
//    </a>
//</div>
// const slider = new Slider(offset,'.pictures-carousel', '.pictures-carousel__slides', '.pictures-carousel__count');


export default class Slider {
    constructor(offset, carousel, page, count){
        this.carousel = document.querySelector(carousel);
        this.btnsClose = this.carousel.querySelector('[data-slide="close"]');
        this.page = this.carousel.querySelector(page);
        this.slides = this.page.children; //__item
        this.btnsNext = this.carousel.querySelector('[data-slide="next"]');
        this.btnsPrev = this.carousel.querySelector('[data-slide="prev"]');
        this.slideIndex = offset;
        this.count = document.querySelector(count);
    }

    showSlides(n) {
        $(this.count).html(`${this.slideIndex + 1} / ${this.slides.length}`);
        this.page.style.transform = `translateX(-${this.slideIndex * 100}%)`;
    }

    plusSlides() {
        if (this.slideIndex == this.slides.length - 1) {
            this.slideIndex = 0;
        } else {
            this.slideIndex++;
        }
        this.showSlides(this.slideIndex);
    }
    minusSlides() {
        if (this.slideIndex == 0) {
            this.slideIndex = this.slides.length - 1;
        } else {
            this.slideIndex--;
        }
        this.showSlides(this.slideIndex);
    }

    init() {
        for (let n = 0 ; n < this.slides.length; n++) {
            this.slides[n].style.left = 100 * n + '%';
        }
        this.page.style.transform = `translateX(-${this.slideIndex * 100}%)`;
        $(this.count).html(`${this.slideIndex + 1} / ${this.slides.length}`);
    }

    swipe() {
        let shiftX = 0, direction = 0;

        this.page.addEventListener('touchstart', (event) => {
            shiftX = event.touches[0].clientX;
        }, {
            passive: true
        });

        this.page.addEventListener('touchmove', (e) => {
            direction = (e.touches[0].clientX >= shiftX) ? 1 : -1; //влево -1, вправо +1
            if (direction < 0) {
                this.slides[this.slideIndex].style.transform = `translateX(${e.touches[0].clientX - shiftX}px)`;

            } else {
                this.slides[this.slideIndex].style.transform = `translateX(${e.touches[0].clientX - shiftX}px)`;
            }
        }, {
            passive: true
        });

        this.page.addEventListener('touchend' || 'touchcancel' , () => {
            this.slides[this.slideIndex].style.transform = `translateX(0)`;
            if (direction < 0) {
                this.plusSlides();
             } else {
                this.minusSlides();
            }
        }, {
            passive: true
        });
    }

    render() {
        this.init();

        this.btnsNext.addEventListener('click', (e) => {
            e.preventDefault();
            this.plusSlides();
        });
        this.btnsNext.addEventListener('touchend', () => {
            this.plusSlides();
        }, {
            passive: true
        });

        this.btnsPrev.addEventListener('click', (e) => {
            e.preventDefault();
            this.minusSlides();
        });
        this.btnsPrev.addEventListener('touchend', () => {
             this.minusSlides();
        }, {
            passive: true
        });


        this.btnsClose.addEventListener('click', (e) => {
            e.preventDefault();
            for (let n = 0 ; n < this.slides.length; n++) {
                this.slides[n].style.left = '';
            }
            this.page.style.transform = '';
            this.carousel.classList.remove('carousel-show');
            $('.pageup').setAttribute('data-show', true);
        });
        this.swipe();
    }
}
