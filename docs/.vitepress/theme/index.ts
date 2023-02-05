import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import IconList from '../../example/icon/IconList.vue'

import Demo from '../components/v-demo.vue';
import '../styles/app.scss';

import xsComponents from '@xm-components/index';
import '@xm-components/theme-default/index.scss';

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.use(xsComponents);
    app.component('Demo', Demo);
    app.component('IconList', IconList);
  },
};
