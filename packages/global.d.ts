// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IButton: typeof import('xm-components')['IButton'];
    Iicon: typeof import('xm-components')['IIcon'];
    IButtonGroup: typeof import('xm-components')['IButtonGroup'];
  }
}

export {};
