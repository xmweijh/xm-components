import { createApp } from 'vue';
import xmCom from '@packages/index';
// import '@packages/theme-chalk/index.css';

import App from './App.vue';

const app = createApp(App);

app.use(xmCom);

app.mount('#app');
