import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/style.scss'
import router from './router';

// createApp(App).mount('#app');
createApp(App).use(router).mount('#app');
