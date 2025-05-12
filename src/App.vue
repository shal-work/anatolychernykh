<template>
    <RouterView :pState="state" :pDispatch="dispatch"/>
</template>


<script setup>
   
    import storeValue from '@/redux/store'
    import { reactive } from 'vue'
 	import '@/js/js.js'

    const state = reactive(storeValue.getState());
    let dispatch = storeValue.dispatch.bind(storeValue);
    
</script>

<!-- 
<template>

    <AppPicturesCarousel :pState="state" :pDispatch="dispatch"/>
</template>


<script setup>
   
    import storeValue from '@/redux/store'
    import AppPicturesCarousel from '@/page/PicturesCarousel/AppPicturesCarousel.vue';
    import { reactive } from 'vue'
 	import '@/js/js.js'

    const state = reactive(storeValue.getState());
    let dispatch = storeValue.dispatch.bind(storeValue);
    
</script> -->
