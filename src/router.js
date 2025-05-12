import { createRouter,  createMemoryHistory, createWebHashHistory, createWebHistory} from 'vue-router';

import Home from '@/page/PageHome/AppPageHome.vue';

import PicturesCarousel from '@/page/PagePicturesCarousel/AppPagePicturesCarousel.vue';
import MeetingsCarousel from '@/page/PageMeetingsCarousel/AppPageMeetingsCarousel.vue';

const routes = [
  {
    path: '/',
    name: Home,
    component: Home
  },
  {
    path: '/:about',
    name: Home,
    component: Home
  },
  {
    path: '/:exhibition-first',
    name: Home,
    component: Home,
  },
  {
    path: '/:paintings',
    name: Home,
    component: Home
  },
  {
    path: '/:creative-meetings',
    name: Home,
    component: Home
  },
  {
    path: '/:video',
    component: Home
  },
  {
    path: '/pictures-carousel',
    component: PicturesCarousel
  },
  {
    path: '/meetings-carousel',
    component: MeetingsCarousel
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  // history: createWebHashHistory(),
  // history: createWebHistory(),

  routes
});




export default router;

