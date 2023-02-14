// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IButton: typeof import('xm-components')['IButton'];
    Iicon: typeof import('xm-components')['IIcon'];
    IButtonGroup: typeof import('xm-components')['IButtonGroup'];
    IDialog: typeof import('xm-components')['IDialog'];
    IMessage: typeof import('xm-components')['IMessage'];
    ICheckbox: typeof import('xm-components')['ICheckbox'];
    ITooltip: typeof import('xm-components')['ITooltip'];
    IInput: typeof import('xm-components')['IInput'];
  }
}

export {};
