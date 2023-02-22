export const PagiantionProps = {
  total: Number,
  current: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  maxSize: {
    type: Number,
    default: 6,
  },
  align: {
    type: String,
    default: 'left',
  },
  // 自定义上一页按钮文本
  prevText: String,
  nextText: String,
  disabled: Boolean,
  activeColors: {
    type: Object,
    default: () => {
      return {
        background: '#fff',
        hoverBackground: '#fff',
        borderColor: '#d9d9d9',
        hoverBorderColor: '#0e80eb',
        color: '#505050',
        hoverColor: '#0e80eb',
      };
    },
  },
  border: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: 'default',
  },
  showTotal: Boolean,
  // 是否显示跳转到指定页
  jumper: Boolean,
};
