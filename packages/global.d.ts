// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IButton: typeof import('xm-components')['IButton'];
    Iicon: typeof import('xm-components')['IIcon'];
    IButtonGroup: typeof import('xm-components')['IButtonGroup'];
    IDialog: typeof import('xm-components')['IDialog'];
    IMessage: typeof import('xm-components')['IMessage'];
    ICheckbox: typeof import('xm-components')['ICheckbox'];
    ISwitch: typeof import('xm-components')['ISwitch'];
  }
}

export {};
