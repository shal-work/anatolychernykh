<template>
    <div class="block exhibition-left">
        <div class="row exhibition-left__row">
            <div class="row__block">
                <div class="row__img">
                    <picture>
                        <source type="image/webp" :srcset="require('@/assets/img/' + billboard.poster + '.webp')">
                        <img class="row__picture" :src="require('@/assets/img/'  + billboard.poster + '.jpg')" :alt=billboard.alt :width=billboard.width :height=billboard.height>
                    </picture>
                </div>
            </div>
            <div class="row__block" :class="'observer-' + billboard.name">
                 <div class="sub-title row__title row__title_light" data-animated="fadeInRight"> {{billboard.text[0]}} <br>{{ billboard.text[1]}} </div>
            </div>
            <div class="additive-pictures" :class="'observer-'  + billboard.name + '-additive'">
                <div class="decoration-pictures">
                    <div class="decoration-pictures__item" :data-animated="angle[index]" v-for="(item, index) in billboard.images" :key="item.id">
                        <picture>
                            <source type="image/webp" :srcset="require('@/assets/img/' + item.picture + '.webp')">
                            <img class="decoration-pictures__img" :src="require('@/assets/img/' + item.picture + '.jpg')" :alt=item.alt :width=item.width :height=item.height>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    const props = defineProps( {
        pBillboard: Object
    });

    let billboard = props.pBillboard;


    const angle = [
        'angle20L',
        'fadeInUp50',
        'angle20R'
    ]

</script>
