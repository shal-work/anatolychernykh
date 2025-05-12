<template>
    <div class="wrapper">
            <div class="pape"></div>
            <AppHeader/>
            <AppMainVideo/>
            <div class="main">
                <AppHeadline/>
                <AppExhibitionPavlova/>
                <AppExhibitionFirst/>
                <AppExhibitionThird/>
                <AppPictures :pState="pState" :pDispatch="pDispatch"/>
                <AppMeetings :pState="pState" :pDispatch="pDispatch"/>
                <AppVideo/>
            </div>
            <AppFooter/>
        </div>
</template>


<script setup>
    import { onMounted } from 'vue';
    import AppHeader from '@/vue_components/Header/AppHeader' 
    import AppMainVideo from '@/vue_components/MainVideo/AppMainVideo' 
    import AppExhibitionPavlova from '@/vue_components/ExhibitionPavlova/AppExhibitionPavlova' 
    import AppExhibitionFirst from '@/vue_components/ExhibitionFirst/AppExhibitionFirst'
    import AppExhibitionThird from '@/vue_components/ExhibitionThird/AppExhibitionThird'
    import AppPictures from '@/vue_components/Pictures/AppPictures'
    import AppMeetings from '@/vue_components/Meetings/AppMeetings'
    import AppFooter from '@/vue_components/Footer/AppFooter'
    import AppVideo from '@/vue_components/Video/AppVideo'
    import AppHeadline from '@/vue_components/Headline/AppHeadline'

    import scrolling from '@/js/lib/components/scrolling';
    import observerVue from '@/js/lib/components/observer';
    import btnBurger from '@/js/lib/components/btn-burger';


    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });
    const pState = props.pState;
    onMounted(() => {
        scrolling('.pageup');
        observerVue();
        btnBurger();
    })
    
</script>


