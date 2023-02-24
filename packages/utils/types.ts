import type { PropType } from 'vue';

export type Nullable<T> = T | null;

export type Arrayable<T> = T | T[];

export type Awaitable<T> = Promise<T> | T;

export const definePropType = <T>(val: any): PropType<T> => val;
