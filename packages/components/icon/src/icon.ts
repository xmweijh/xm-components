export const svgs = import.meta.glob('./svg/*.svg', { eager: true, as: 'raw' });
export const IconProps = {
  name: String,
  color: String,
  size: [String, Number],
};

export const getIcon = (name?: string) => {
  if (!name) return '';
  return svgs[`./svg/${name}.svg`];
};

type ClassName = string | undefined | null;
type Classes = (ClassName | [any, ClassName, ClassName?])[];
export function createNamespace(name: string) {
  const namespace = `I-${name}`;
  const createBEM = (suffix?: string): string => {
    if (!suffix) return namespace;

    return suffix.startsWith('--') ? `${namespace}${suffix}` : `${namespace}__${suffix}`;
  };

  const classes = (...classes: Classes): any[] => {
    return classes.map((className) => {
      if (Array.isArray(className)) {
        const [condition, truthy, falsy = null] = className;
        return condition ? truthy : falsy;
      }

      return className;
    });
  };

  return {
    n: createBEM,
    classes,
  };
}
