<template>
    <div class="block observer-paintings" id="paintings">
        <div class="sub-title sub-title_mb" data-animated="fadeInLeft">Работы мастера</div>
        <div class="pictures">
            <div class="pictures__item" v-for="item in listPictures" :key="item.id">
                <RouterLink class="pictures__block" to="/pictures-carousel" @click="selectPicture(item.id)">
                    <img class="pictures__img" :src="require('@/assets/img/' + item.picture + '.jpg')" :alt=item.alt :width=item.width  :height=item.height>
                </RouterLink>
                <div class="paragraph pictures__text line-clamp">
                    {{item.text}}
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { activPpictureCreator } from '@/redux/picture'
    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });

    let listPictures = props.pState.picture.items;

    const selectPicture = (val) => {
        props.pDispatch(activPpictureCreator(val));
    }

</script>
