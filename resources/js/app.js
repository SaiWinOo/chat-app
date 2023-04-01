import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import pinia from '@/Pinia/pinia.js';
import Echo from 'laravel-echo';


window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});
import mp3 from './noti/noti.mp3';
window.Echo.channel('test-channel')
  .listen('TestingEvent', (e) => {
    localStorage.setItem('message', e.message);
    let audio = new Audio(mp3);
    audio.play();
  });

const app = createApp(App);
app
  .use(pinia)
  .mount('#app');
