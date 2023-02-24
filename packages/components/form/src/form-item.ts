import type { PropType } from 'vue';
import type { Arrayable } from '../../../utils';
import type { FormItemProp, FormItemRule } from './form';

export const FormItemProps = {
  label: String,
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  prop: {
    type: [String, Array] as PropType<FormItemProp>,
  },
  rules: {
    type: [Object, Array] as PropType<Arrayable<FormItemRule>>,
  },
  required: {
    type: Boolean,
    default: undefined,
  },
  size: {
    type: String as PropType<'default' | 'small' | 'large'>,
  },
};
