<template>
    <div id="exhibition">
        <AppExhibitionLight :pBillboard="pavlova"/>
        <AppExhibitionDark :pBillboard="peterhof"/>
        <AppExhibitionLight :pBillboard="second"/>
        <AppExhibitionDark :pBillboard="third"/>

    </div>
</template>


<script setup>
    import AppExhibitionLight from '@/vue_components/Exhibition/AppExhibitionLight'
    import AppExhibitionDark from '@/vue_components/Exhibition/AppExhibitionDark'


    const props = defineProps( {
        pBillboard: Object
    });
    const pavlova = props.pBillboard.items[0];
    const peterhof = props.pBillboard.items[1];
    const second = props.pBillboard.items[2];
    const third = props.pBillboard.items[3];
    
</script>
