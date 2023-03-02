import type { InjectionKey } from 'vue';
import type { FormContext, FormItemContext } from './form';

// 使用Symbol作为注入名防止重名
export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey');
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey');
