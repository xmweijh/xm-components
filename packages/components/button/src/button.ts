import type { PropType } from 'vue';
// // 类型验证
// function typeValidator(type: string): boolean {
//   return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type);
// }
// // 尺寸验证
// function sizeValidator(size: string): boolean {
//   return ['normal', 'mini', 'small', 'large'].includes(size);
// }
// Button可能接受的参数
export const ButtonProps = {
  // 我们可以使用 PropType 这个工具类型来标记更复杂的 props 类型
  type: String as PropType<'primary' | 'info' | 'success' | 'warning' | 'danger'>,
  size: String as PropType<'mini' | 'small' | 'large'>,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  text: Boolean,
  icon: String,
  color: String,
  disabled: Boolean,
  bg: Boolean,
  iconPosition: {
    default: 'left',
    type: String as PropType<'left' | 'right'>,
  },
  textColor: {
    type: String,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
};
