// 类型判断
export const isNumber = (val: any) => typeof val === 'number';
export const isString = (val: any) => typeof val === 'string';
export const isFunction = (val: any) => typeof val === 'function';
export const isUndefined = (val: any): val is undefined => val === undefined;

// 添加单位
export function addUnit(value: string | number, defaultUnit = 'px') {
  if (!value) return '';
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
