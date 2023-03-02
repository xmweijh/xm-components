export const TableProps = {
  options: {
    type: Object,
    default: () => {
      return {
        rests: [],
        datas: [],
      };
    },
  },
  size: {
    type: String,
    default: 'default',
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  customClass: String,
  headStyle: {
    type: Object,
    default: () => {
      return {};
    },
  },
  rowStyle: {
    type: Object,
    default: () => {
      return {};
    },
  },
};
