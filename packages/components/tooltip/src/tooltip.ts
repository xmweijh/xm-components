import type { PropType } from 'vue';
export const TooltipProps = {
  content: String,
  placement: {
    type: String as PropType<'top' | 'drightark' | 'bottom' | 'left'>,
    default: 'bottom',
  },
  effect: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light',
  },
  disabled: Boolean,
  rawContent: Boolean,
};
