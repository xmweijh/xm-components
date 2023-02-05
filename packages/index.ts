// import installer from './installer';

// export * from './components';
// export * from './hooks';
// export * from './utils';
// export * from './installer';

// export default installer;

import type { App } from 'vue';

import { IButton, IIcon } from './components';

const components = { IButton, IIcon };
/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {Void}
 */
const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export { IButton, IIcon };

export default {
  install,
};
