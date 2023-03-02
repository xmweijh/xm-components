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
    ITooltip: typeof import('xm-components')['ITooltip'];
    IInput: typeof import('xm-components')['IInput'];
    IDate: typeof import('xm-components')['IDate'];
    IPagination: typeof import('xm-components')['IPagination'];
    IWeather: typeof import('xm-components')['IWeather'];
    ICard: typeof import('xm-components')['ICard'];
    ITable: typeof import('xm-components')['ITable'];
  }
}
declare global {
  interface Date {
    format(fmt: string): string;
  }
}

export {};
