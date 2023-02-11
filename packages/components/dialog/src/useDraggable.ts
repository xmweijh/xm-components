import { onBeforeUnmount, onMounted } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import { addUnit } from '../../../utils/common';

export const useDraggable = (
  targetRef: Ref<HTMLElement | undefined>,
  dragRef: Ref<HTMLElement | undefined>,
  draggable: ComputedRef<boolean>,
) => {
  // 记录元素偏离原位置的距离
  let transform = {
    offsetX: 0,
    offsetY: 0,
  };

  const onMousedown = (e: MouseEvent) => {
    // 获取鼠标当前坐标 因为translate是相对原位置移动
    const downX = e.clientX;
    const downY = e.clientY;
    const { offsetX, offsetY } = transform;

    // 我们确信这个字段100%出现，那么就可以添加！，强调这个字段一定存在,！可以强制链式调用。
    const targetRect = targetRef.value!.getBoundingClientRect();
    // 获取元素相对可视区域的位置
    const targetLeft = targetRect.left;
    const targetTop = targetRect.top;
    // 获取元素的宽高
    const targetWidth = targetRect.width;
    const targetHeight = targetRect.height;

    // 获取可见区域的宽高
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    // translate可以移动的边界情况 表示x y轴可以移动的最大范围
    // 注意这些边界情况也是相对原位置的所以要加上offsetX
    // 其实就是没移动前第一次获取到的targetLeft这些属性。
    const minLeft = -targetLeft + offsetX;
    const minTop = -targetTop + offsetY;
    const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
    const maxTop = clientHeight - targetTop - targetHeight + offsetY;

    // 鼠标移动事件
    const onMousemove = (e: MouseEvent) => {
      // 获取鼠标偏离原位置距离= 已偏离位置+新移动位置
      const moveX = Math.min(Math.max(offsetX + e.clientX - downX, minLeft), maxLeft);
      const moveY = Math.min(Math.max(offsetY + e.clientY - downY, minTop), maxTop);

      transform = {
        offsetX: moveX,
        offsetY: moveY,
      };
      // 利用translate移动元素
      targetRef.value!.style.transform = `translate(${addUnit(moveX)}, ${addUnit(moveY)})`;
    };

    // 鼠标松开事件
    const onMouseup = () => {
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('mouseup', onMouseup);
    };

    // 点下鼠标 开始监听 鼠标移动与松开事件
    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
  };

  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener('mousedown', onMousedown);
    }
  };

  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener('mousedown', onMousedown);
    }
  };

  onMounted(() => {
    if (draggable.value) {
      onDraggable();
    } else {
      offDraggable();
    }
  });

  onBeforeUnmount(() => {
    offDraggable();
  });
};
