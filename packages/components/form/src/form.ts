import type { RuleItem, ValidateFieldsError } from 'async-validator';
import type { PropType, ToRefs, ExtractPropTypes } from 'vue';
import type { Arrayable } from '../../../utils';
import type { FormItemProps } from './form-item';

export interface FormItemRule extends RuleItem {
  trigger?: string;
}

type FormRules = Record<string, Arrayable<FormItemRule>>;

export interface FormContext extends ToRefs<ExtractPropTypes<typeof FormProps>> {
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
}

export type FormItemValidateCallback = FormValidateCallback;

export interface FormItemContext extends ToRefs<ExtractPropTypes<typeof FormItemProps>> {
  validate: (trigger: string, callback?: FormItemValidateCallback) => void;
  resetField(): void;
}

export type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void;
export type FormValidationResult = Promise<void>;

export type FormItemProp = Arrayable<string>;

export const FormProps = {
  model: Object,
  rules: {
    type: Object as PropType<FormRules>,
  },
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  labelPosition: {
    type: String as PropType<'top' | 'left' | 'right'>,
    default: 'right',
  },
  inline: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'default' | 'small' | 'large'>,
  },
};
