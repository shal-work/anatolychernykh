<template>
    <div class="block meetings observer-meetings" id="creative-meetings">
        <div class="pape"></div>
        <div class="sub-title sub-title_mb" data-animated="fadeInLeft">Творческие встречи</div>
        <div class="meetings__grid">
            <div class="meetings__item" v-for="item in listMeetings" :key="item.id">
                <RouterLink class="meetings__block" to="/meetings-carousel" @click="selectMeetings(item.id)">
                    <picture>
                        <source type="image/webp" :srcset="require('@/assets/img/' + item.picture_grid.picture + '.webp')">
                        <img class="meetings__img" :src="require('@/assets/img/' + item.picture_grid.picture + '.jpg')" :alt=item.alt :width=item.picture_grid.width :height=item.picture_grid.height>
                    </picture>
                </RouterLink>

                <div class="paragraph meetings__text line-clamp">
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { activMeetingsCreator } from '@/redux/meetings'
    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });

    let listMeetings = props.pState.meetings.items;
    const selectMeetings = (val) => {
        props.pDispatch(activMeetingsCreator(val));
    }

</script>
