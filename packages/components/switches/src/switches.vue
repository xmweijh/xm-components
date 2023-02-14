<script lang="ts" setup>
  import { reactive, ref, watchEffect } from 'vue';
  import { DialogProps } from './switches';

  const props = defineProps(DialogProps);
  const emit = defineEmits(['updata:modelValue', 'change']);
  const roundStyle = reactive({ left: '2px' });
  const flagTextStyle = reactive({ left: props.width - 20 + 'px' });
  const switchStyle = reactive({ background: props.closeColor });
  const flagText = ref<string>('关');
  const switchText = ref<string>(props.modelValue ? props.activeText : props.closeText);
  const flag = ref<boolean>(props.modelValue);

  const handleSwitch = () => {
    if (!props.disabled) {
      flag.value = !flag.value;
      emit('update:modelValue', flag.value);
      emit('change', flag.value);
    }
  };

  watchEffect(() => {
    roundStyle.left = props.modelValue ? props.width - 20 + 'px' : '2px';
    flagTextStyle.left = props.modelValue ? '6px' : props.width - 20 + 'px';
    switchStyle.background = props.modelValue ? props.activeColor : props.closeColor;

    if (props.modelValue) {
      flagText.value = '开';
      switchText.value = props.activeText;
    } else {
      flagText.value = '关';
      switchText.value = props.closeText;
    }
  });
</script>

<template>
  <div :class="['mzl-switch-default', customClass]">
    <span
      v-if="textAlign === 'left' && closeText !== '' && activeText !== ''"
      class="mzl-switch-left-text"
      :style="{ color: modelValue ? activeColor : closeColor }"
    >
      {{ switchText }}
    </span>
    <div
      class="mzl-switch-content"
      :class="{ 'mzl-switch-disabled': disabled }"
      :style="[switchStyle, { width: width + 'px' }]"
      @click="handleSwitch"
    >
      <span class="mzl-switch-round" :style="[roundStyle]"></span>
      <span v-if="showTipsText" class="mzl-switch-flagtext" :style="flagTextStyle">{{
        flagText
      }}</span>
    </div>
    <span
      v-if="textAlign === 'right' && closeText !== '' && activeText !== ''"
      class="mzl-switch-right-text"
      :style="{ color: modelValue ? activeColor : closeColor }"
    >
      {{ switchText }}
    </span>
  </div>
</template>

<style lang="scss">
  @import './switches.scss';
</style>
