const isNumber = (val: any): boolean => {
  return typeof val === 'number';
};
//隐藏的元素
let hiddenTextarea: HTMLTextAreaElement | undefined = undefined;

//隐藏元素样式
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing',
];

interface NodeStyle {
  contextStyle: string;
  boxSizing: string;
  paddingSize: number;
  borderSize: number;
}

interface TextAreaHeight {
  height: string;
  minHeight?: string;
}

function calculateNodeStyling(targetElement: Element): NodeStyle {
  //获取实际textarea样式返回并赋值给隐藏的textarea
  const style = window.getComputedStyle(targetElement);

  const boxSizing = style.getPropertyValue('box-sizing');

  const paddingSize =
    Number.parseFloat(style.getPropertyValue('padding-bottom')) +
    Number.parseFloat(style.getPropertyValue('padding-top'));

  const borderSize =
    Number.parseFloat(style.getPropertyValue('border-bottom-width')) +
    Number.parseFloat(style.getPropertyValue('border-top-width'));

  const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(
    ';',
  );

  return { contextStyle, paddingSize, borderSize, boxSizing };
}

export function calcTextareaHeight(
  targetElement: HTMLTextAreaElement,
  minRows = 1,
  maxRows?: number,
): TextAreaHeight {
  if (!hiddenTextarea) {
    //创建隐藏的textarea
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }
  //给隐藏的teatarea赋予实际textarea的样式以及值(value)
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';
  //隐藏textarea整个高度,包括内边距padding,border
  let height = hiddenTextarea.scrollHeight;
  const result = {} as TextAreaHeight;
  //判断boxSizing,返回实际高度
  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  //计算单行高度
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (isNumber(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (isNumber(maxRows)) {
    let maxHeight = singleRowHeight * maxRows!;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  hiddenTextarea.parentNode?.removeChild(hiddenTextarea);
  hiddenTextarea = undefined;

  return result;
}
