import type { PropType } from 'vue';

export const OptfileProps = {
  customClass: String,
  fileList: {
    type: Array,
    default: () => {
      return [];
    },
  },
  type: String as PropType<'primary' | 'info' | 'success' | 'warning' | 'danger'>,
  accept: String,
  multiple: Boolean,
  targetType: {
    type: String,
    default: 'btn',
  },
  imgListShow: Boolean,
  showFileList: Boolean,
  icon: {
    type: String,
    default: 'plus',
  },
  label: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
  drop: Boolean,
};
