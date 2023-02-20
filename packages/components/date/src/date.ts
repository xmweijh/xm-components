export const DateProps = {
  modelValue: [String, Number],
  size: {
    type: String,
    default: 'default',
  },
  disabled: Boolean,
  placeholder: String,
  format: {
    type: String,
    default: 'yyyy/MM/dd',
  },
  clearable: Boolean,
  type: {
    type: String,
    default: 'date',
  },
  showToday: {
    type: Boolean,
    default: true,
  },
  startDate: {
    type: String,
    default: '1000/01/01',
  },
  endDate: {
    type: String,
    default: '9999/12/31',
  },
  customClass: String,
  customActiveColor: {
    type: String,
    default: '#0e80eb',
  },
  form: String,
};
