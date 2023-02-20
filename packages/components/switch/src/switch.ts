export const DialogProps = {
  modelValue: Boolean,
  width: {
    type: Number,
    default: 45,
  },
  closeColor: {
    type: String,
    default: '#BFBFBF',
  },
  activeColor: {
    type: String,
    default: '#0e80eb',
  },
  closeText: {
    type: String,
    default: '',
  },
  activeText: {
    type: String,
    default: '',
  },
  textAlign: {
    type: String,
    default: 'left',
  },
  showTipsText: Boolean,
  disabled: Boolean,
  customClass: String,
};
