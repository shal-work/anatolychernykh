<template>   
    <div class="main-video">
        <div class="screen-pape"></div>
        <video  class="main-video__frame" width="1920" autoplay muted >
            <!-- <source src="@/assets/video/screensaver2.mp4"  type="video/mp4" > -->
            <!-- <source src={{video2}}  type="video/mp4" > -->
            <!-- <source :src="require('@/assets/video/screensaver1.mp4')" type="video/mp4" > -->
            <source :src="require('@/assets/video/' + video)" type="video/mp4" >
            <!-- <img class="pictures__img" :src="require('@/assets/img/' + item.picture + '.jpg')" :alt=item.alt :width=item.width  :height=item.height> -->
        </video>
    </div>
</template>   

<script setup>
    import { onMounted, ref } from 'vue';

    const video1 = "screensaver1.mp4"
    const video2 = "screensaver2.mp4"
    const video = ref(video1);

    onMounted(() => {
        // myVideo();
        const vidElement = document.querySelector(".main-video__frame");
        vidElement.addEventListener('ended', function(e) {
            if (video.value == video1) {
                video.value = video1;
            } else {
                video.value = video2;
            }
            vidElement.play();
        });
    })

</script>
