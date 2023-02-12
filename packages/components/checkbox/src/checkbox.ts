export const DialogProps = {
  modelValue: {
    type: Array,
    default: () => {
      return [];
    },
  },
  size: {
    type: String,
    default: 'default',
  },
  options: {
    type: Array,
    default: () => {
      return [];
    },
  },
  labelFiled: {
    type: String,
    default: 'label',
  },
  valueFiled: {
    type: String,
    default: 'value',
  },
  inline: {
    type: Boolean,
    default: true,
  },

  customColor: String,

  customClass: String,
};
