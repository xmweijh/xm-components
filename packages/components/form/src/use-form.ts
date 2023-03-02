import { inject, computed, getCurrentInstance, unref } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import { formContextKey, formItemContextKey } from './context';

const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const vm = getCurrentInstance()!;

  // ？？ 空值合并 它表示如果左侧的表达式为 null 或 undefined，则返回右侧的表达式，否则返回左侧
  return computed(() => vm.proxy?.$props[name] ?? undefined);
};

// 获取formContextKey 和 formItemContextKey 的依赖注入的实例，这些属性可以用于获取和操作表单的数据和状态。
// 其他内部组件调用，获取表单的一些操作，如实现实时校验，在内部组件调用校验方法。
const useFormItem = () => {
  const form = inject(formContextKey, undefined);
  const formItem = inject(formItemContextKey, undefined);
  return {
    form,
    formItem,
  };
};

const componentSizes = ['default', 'small', 'large'] as const;
// typeof componentSizes[number] 表示将 componentSizes 变量的联合类型转换为一个字符串字面量联合类型
type ComponentSize = typeof componentSizes[number];

export const useSize = (fallback?: Ref<ComponentSize | undefined> | ComponentSize) => {
  const size = useProp<ComponentSize>('size');
  const { form, formItem } = useFormItem();

  return computed<ComponentSize>(
    () => size.value || unref(fallback) || formItem?.size?.value || form?.size?.value || 'default',
  );
};
