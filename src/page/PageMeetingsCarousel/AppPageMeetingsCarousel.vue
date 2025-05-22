<template>
    <div class="wrapper">
        <h1 class="visually-hidden">Анатолий Черных</h1>
        <div class="main">
            <div class="pictures-carousel">

                <RouterLink to='/paintings' class="btn-close" data-slide="close"></RouterLink>

                <div class="pictures-carousel__inner">
                    <div class="pictures-carousel__slides">
                        <div class="pictures-carousel__item">
                            <div class="pictures-carousel__block">
                                <picture>
                                    <source type="image/webp" :srcset="require('@/assets/img/' + currentPicture.mobilPicture + '.webp')"  media="(max-width: 412px)">
                                    <source type="image/jpg" :srcset="require('@/assets/img/' + currentPicture.mobilPicture + '.jpg')" media="(max-width: 412px)">
                                    <source type="image/webp" :srcset="require('@/assets/img/' + currentPicture.picture + '.webp')">
                                    <img class="pictures-carousel__img" :class="{zoomIn: isActive}" :src="require('@/assets/img/' + currentPicture.picture + '.jpg')" :alt=currentPicture.alt :width=currentPicture.width  :height=currentPicture.height>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pictures-carousel__header">
                    <div class="pictures-carousel__count">{{currentPicture.count }} / {{currentPicture.countPicture }}</div>
                </div>

                <button  class="pictures-carousel__prev"  @click="prev()" :class="{fadeOut: isFadeOutL}">
                    <span class="carousel-prev-icon">&lt;</span>
                </button>
                <button  class="pictures-carousel__next" @click="next()" :class="{fadeOut: isFadeOutR}">
                    <span class="carousel-next-icon">&gt;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import '@/js/js.js'

    const props = defineProps( {
        pState: Object
    });
    let listMeetings = props.pState.meetings.items;
    let offset = props.pState.meetings.currentNumber - 1;
    const countPicture = (props.pState.meetings.items).length;
    const isActive = ref(true);
    const isFadeOutL = ref(true);
    const isFadeOutR = ref(false);
    isFadeOutL.value = offset == 0 ? true : false;
    isFadeOutR.value = offset == (countPicture-1) ? true : false;

    const timerId1 = setTimeout(() => {
        isFadeOutL.value = true;
        isFadeOutR.value = true;
    }, 3000);

    const currentPicture = ref ({
        picture: props.pState.meetings.items[offset].picture,
        mobilPicture: props.pState.meetings.items[offset].slider_mobil.picture,
        count: props.pState.meetings.items[offset].id,
        alt: props.pState.meetings.items[offset].alt,
        height: props.pState.meetings.items[offset].height,
        width: props.pState.meetings.items[offset].width,
        countPicture: countPicture,
    })

    const selectPicture = () => {
        currentPicture.value = {
            picture: props.pState.meetings.items[offset].picture,
            mobilPicture: props.pState.meetings.items[offset].slider_mobil.picture,
            count: props.pState.meetings.items[offset].id,
            alt: props.pState.meetings.items[offset].alt,
            height: props.pState.meetings.items[offset].height,
            width: props.pState.meetings.items[offset].width,
            countPicture: countPicture,
        }
    }

    const prev = () => {
        offset = --offset < 0 ? 0 : offset;
        selectPicture();
        isActive.value = true;
        const timerId2 = setTimeout(() => {
            isActive.value = false;
        }, 600)
        
        isFadeOutL.value =  offset == 0 ? true : false;
        isFadeOutR.value =  offset == countPicture ? true : false;
        const timerId1 = setTimeout(() => {
            isFadeOutL.value = true;
            isFadeOutR.value = true;
        }, 3000)
    }

    const next = () => {
        offset = ++offset >= countPicture ? (countPicture-1) : offset;
       
        selectPicture();
        isActive.value = true;
        const timerId2 = setTimeout(() => {
            isActive.value = false;
        }, 600)
        isFadeOutL.value =  offset == 0 ? true : false;
        isFadeOutR.value =  offset == (countPicture-1) ? true : false;

        const timerId1 = setTimeout(() => {
            isFadeOutL.value = true;
            isFadeOutR.value = true;
        }, 3000)
    }

    onMounted(() => {
        let shiftX = 0, direction = 0;
        const page = document.querySelector('.pictures-carousel__slides');

        page.addEventListener("mouseover", function() {
            isFadeOutL.value = offset == 0 ? true : false;
            isFadeOutR.value = offset == (countPicture-1) ? true : false;
        })
        page.addEventListener("mouseout", function() {
            const timerId1 = setTimeout(() => {
                isFadeOutL.value = true;
                isFadeOutR.value = true;
            }, 3000)
        });
        page.addEventListener('touchstart', (event) => {
            shiftX = event.touches[0].clientX;
            isFadeOutL.value = offset == 0 ? true : false;
            isFadeOutR.value = offset == (countPicture-1) ? true : false;
        }, {
            passive: true
        });

        page.addEventListener('touchmove', (e) => {
            direction = (e.touches[0].clientX >= shiftX) ? 1 : -1; //влево -1, вправо +1
            page.style.transform = `translateX(${e.touches[0].clientX - shiftX}px)`;
        }, {
            passive: true
        });
        page.addEventListener('touchend' || 'touchcancel' , () => {
            page.style.transform = `translateX(0)`;
            if (direction < 0) {
                next();
             } else {
                prev();
            }
        }, {
            passive: true
        });
    })

</script>
