import { createApp } from 'vue';
import xsCom from '@packages/index';
// import '@packages/theme-chalk/index.css';

import App from './App.vue';

const app = createApp(App);

app.use(xsCom);

app.mount('#app');
