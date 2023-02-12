import type { App, Directive } from 'vue';
import type { SFCWithInstall, SFCInstallWithContext } from '../types';

// 注册组件
export const withInstall = <T>(main: T) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    const comp: Record<string, any> = main as Record<string, any>;
    app.component(comp.name, comp);
  };
  return main as SFCWithInstall<T>;
};

// 注册指令
export const withInstallDirectives = <T extends Directive>(main: T, name: string) => {
  return {
    install: (app: App): void => {
      app.directive(name, main);
    },
    directive: main,
  };
};

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    app.config.globalProperties[name] = fn;
  };

  return fn as SFCInstallWithContext<T>;
};
