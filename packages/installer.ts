import type { App, Plugin } from 'vue';

import { IButton, Iicon } from './components';

const component = [IButton, Iicon] as Plugin[];

export const install = function (app: App) {
  component.forEach((i) => app.use(i));
};

export default {
  install,
};
