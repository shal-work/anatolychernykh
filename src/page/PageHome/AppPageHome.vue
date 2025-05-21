<template>
    <div class="wrapper">
            <div class="pape"></div>
            <AppHeader/>
            <AppMainVideo/>
            <div class="main">
                <AppHeadline/>
                <AppExhibition :pBillboard="pBillboards"/>
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
    import AppPictures from '@/vue_components/Pictures/AppPictures'
    import AppMeetings from '@/vue_components/Meetings/AppMeetings'
    import AppFooter from '@/vue_components/Footer/AppFooter'
    import AppVideo from '@/vue_components/Video/AppVideo'
    import AppHeadline from '@/vue_components/Headline/AppHeadline'

    // import AppExhibitionLight from '@/vue_components/ExhibitionLight/AppExhibitionLight'
    // import AppExhibitionDark from '@/vue_components/ExhibitionDark/AppExhibitionDark'
    import AppExhibition from '@/vue_components/Exhibition/AppExhibition'

    import scrolling from '@/js/lib/components/scrolling';
    import observerVue from '@/js/lib/components/observer';
    import btnBurger from '@/js/lib/components/btn-burger';


    const props = defineProps( {
        pState: Object,
        pDispatch: Function
    });
    const pState = props.pState;


    // const billboardsLight = props.pState.billboards.items[0];
    // const billboardsDark = props.pState.billboards.items[1];
    // debugger
    const pBillboards = props.pState.billboards;


    onMounted(() => {
        scrolling('.pageup');
        observerVue();
        btnBurger();
        const iframe = document.querySelectorAll('.video__iframe');
        iframe.forEach (item => {
            item.setAttribute('allow', 'fullscreen'); // must be 1st
        });

    })
    
</script>


