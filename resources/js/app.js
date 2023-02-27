import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import pinia from '@/Pinia/pinia.js';

const app = createApp(App);
app
  .use(pinia)
  .mount('#app');