import type { App, Plugin } from 'vue';

import { IButton, IIcon } from './components';

const component = [IButton, IIcon] as Plugin[];

export const install = function (app: App) {
  component.forEach((i) => app.use(i));
};

export default {
  install,
};
