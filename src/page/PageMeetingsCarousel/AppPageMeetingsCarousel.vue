<template>
    <div class="wrapper">
        <h1 class="visually-hidden">Анатолий Черных</h1>
        <div class="main">
            <div class="pictures-carousel">

                <RouterLink to='/paintings' class="btn-close" data-slide="close"></RouterLink>

                <div class="pictures-carousel__inner">
                    <div class="pictures-carousel__slides">
                        <div class="pictures-carousel__item" v-for="item in listMeetings" :key="item.id">
                            <div class="pictures-carousel__block">
                                <!-- <img class="pictures-carousel__img" :src="require('@/assets/img/' + item.picture + '.jpg')" :alt=item.alt :width=item.width  :height=item.height> -->


                                <picture>
                                    <source type="image/webp" :srcset="require('@/assets/img/' + item.slider_mobil.picture + '.webp')"  media="(max-width: 412px)">
                                    <source type="image/jpg" :srcset="require('@/assets/img/' + item.slider_mobil.picture + '.jpg')" media="(max-width: 412px)">

                                    <source type="image/webp" :srcset="require('@/assets/img/' + item.picture + '.webp')">
                                    <img class="pictures-carousel__img" :src="require('@/assets/img/' + item.picture + '.jpg')" :alt=item.alt :width=item.width  :height=item.height>
                                </picture>

                            </div>
                            <div class="paragraph block-text line-clamp">
                                {{item.text}}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pictures-carousel__header">
                    <div class="pictures-carousel__count"></div>
                </div>

                <button  class="pictures-carousel__prev" data-slide="prev">
                    <span class="carousel-prev-icon">&lt;</span>
                </button>
                <button  class="pictures-carousel__next" data-slide="next">
                    <span class="carousel-next-icon">&gt;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import '@/js/js.js'
    import Slider from'@/js/lib/components/carousel-tsart-class';  //src\js\lib\components\carousel-tsart-dom.js

    const props = defineProps( {
        pState: Object
    });
    let listMeetings = props.pState.meetings.items;
    // let key = ref(1);
    // key.value = (Date.now());

    const offset = props.pState.meetings.currentNumber - 1;

    onMounted(() => {
        const slider = new Slider(offset,'.pictures-carousel', '.pictures-carousel__slides', '.pictures-carousel__count');
        slider.render();
    })

</script>
