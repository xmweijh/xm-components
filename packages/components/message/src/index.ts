import { createApp } from 'vue';
import type { App, ComponentPublicInstance } from 'vue';
import { isString } from '../../../utils';
import MessageComponent from './message.vue';
import type { Options, Message } from './message';

const prefixCls = 'message';

// 定义可选类型
const types = ['info', 'success', 'warning', 'error', 'loading'] as const;

// 定义 message 函数
const message = ((options) => {
  // 创建 message 应用实例
  const messageApp = createApp(MessageComponent, handleOptions(options));
  // 在屏幕上展示 message
  const vm = showMessage(messageApp);

  // 隐藏 message 的方法
  function hideMessage() {
    vm.setVisible(false);
  }

  // 将 hideMessage 方法作为 message 函数的返回值
  return hideMessage;
}) as Message;

// 遍历 types 数组
types.forEach((type) => {
  // 向 message 函数添加相应类型的方法，该方法中调用了 message 函数，并将 type 参数合并到 options 中
  message[type] = (options) => message({ ...handleOptions(options), type });
});

// 处理 options 参数
function handleOptions(options: Options) {
  // 如果 options 是字符串类型，说明没传其他配置，转换成只包含 content 属性的对象
  if (isString(options)) {
    return {
      content: options,
    };
  }
  return options;
}

// 创建根元素
function createRootDom() {
  const div = document.createElement('div');
  div.setAttribute('id', prefixCls);
  return document.body.appendChild(div);
}

// 在屏幕上展示 message 组件
function showMessage(app: App) {
  // 查找根元素
  let rootDom = document.getElementById(prefixCls);
  if (!rootDom) {
    // 如果根元素不存在，创建一个新的根元素
    rootDom = createRootDom();
  }

  // 创建文档片段
  const fragment = document.createDocumentFragment();
  // 将 message 应用实例挂载到文档片段中
  const vm: ComponentPublicInstance<any> = app.mount(fragment);

  // 将文档片段添加到根元素中
  rootDom.appendChild(fragment);

  // 设置 unmount 回调函数
  vm.setAfterLeaveFn(() => {
    app.unmount();
  });

  // 设置 visible 属性为 true，展示 message 组件
  vm.setVisible(true);

  return vm;
}

export default message;
