import type { PropType, CSSProperties } from 'vue';

export const CardProps = {
  header: {
    type: String,
    default: '',
  },
  bodyStyle: {
    type: [String, Object, Array] as PropType<
      string | CSSProperties | Array<string | CSSProperties>
    >,
    default: '',
  },
  shadow: {
    type: String as PropType<'always' | 'hover' | 'never'>,
    default: 'always',
  },
};
