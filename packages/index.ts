// import installer from './installer';

// export * from './hooks';
// export * from './utils';
// export * from './installer';

// export default installer;

import type { App } from 'vue';

import {
  IButton,
  IButtonGroup,
  IIcon,
  IDialog,
  IMessage,
  ICheckbox,
  ISwitch,
  ITooltip,
  IInput,
  IDate,
  IPagination,
  IWeather,
  ICard,
} from './components';
export * from './components';

const components = {
  IButton,
  IButtonGroup,
  IIcon,
  IDialog,
  IMessage,
  ICheckbox,
  ISwitch,
  ITooltip,
  IInput,
  IDate,
  IPagination,
  IWeather,
  ICard,
};
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

// export { IButton, IIcon };

export default {
  install,
};
