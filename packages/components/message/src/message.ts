// 定义了一个字符串字面量类型，只允许取 'info'、'success'、'warning'、'error' 或 'loading' 中的一个
export type MessageType = 'info' | 'success' | 'warning' | 'error' | 'loading';

// 定义了一个联合类型，可以是一个字符串，或者是一个包含 type、duration 和 content 三个属性的对象，其中 type 是 MessageType 类型，duration 是一个可选的数字类型，content 是一个必选的字符串类型。
export type Options =
  | string
  | {
      type?: MessageType;
      duration?: number;
      content: string;
    };

// 定义了一个函数类型，接受一个 Options 类型的参数，返回一个不接受参数、返回值为 void 的函数。
type MessageFn = (options: Options) => () => void;

// 这个类型的作用是定义了一个包含了 info、success、warning、error、loading 五个属性的对象，每个属性都是一个接受 Options 类型参数的函数，返回一个关闭当前消息的函数。
export type Message = {
  [key in MessageType]: MessageFn;
} & MessageFn;
