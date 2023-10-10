<script lang="ts" setup>
  import { ref, reactive, onMounted } from 'vue';
  import { OptfileProps } from './optfile';
  const props = defineProps(OptfileProps);
  const emit = defineEmits(['change', 'update:fileList', 'beforeChange']);
  interface file {
    preImgUrl: string;
    name: string;
    size: number;
    type: string;
  }
  const File = reactive<file[]>([]);
  // 使用类型断言将 props.fileList 转换为 file[] 类型
  const FileList = reactive<file[]>((props.fileList as file[]) || []);
  const windowURL = typeof window !== 'undefined' ? window.URL || window.webkitURL : '';
  const refInp = ref<HTMLLIElement | null>(null);
  const refDiv = ref<HTMLLIElement | null>(null);
  const activeFile = ref(false);
  const labelText = ref(props.label);
  const changeFile = () => {
    emit('beforeChange');
    console.log(refInp);
    refInp.value?.click();
  };
  const textchange = (e: any) => {
    File.unshift(...e.target.files);
    FileList.unshift(...e.target.files);
    File.forEach((item) => {
      item.preImgUrl = windowURL && windowURL.createObjectURL(item as any);
      emit('change', File), emit('update:fileList', File);
    });
  };
  const deleteImg = (index: number) => {
    File.splice(index, 1);
    FileList.splice(index, 1);
    emit('update:fileList', File);
  };
  onMounted(() => {
    if (props.drop && props.targetType == 'box') {
      let dropArea = refDiv.value;
      dropArea?.addEventListener('drop', (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        File.unshift(...e.dataTransfer.files);
        FileList.unshift(...e.dataTransfer.files);
        File.forEach((item) => {
          item.preImgUrl = windowURL && windowURL.createObjectURL(item as any);
        });
        emit('change', File);
        emit('update:fileList', File);
        labelText.value = props.label;
        activeFile.value = false;
      });
      dropArea?.addEventListener('dragleave', (e) => {
        e.stopPropagation();
        e.preventDefault();
        labelText.value = props.label;
        activeFile.value = false;
      });
      dropArea?.addEventListener('dragenter', (e) => {
        e.stopPropagation();
        e.preventDefault();
        labelText.value = '松开鼠标完成';
        activeFile.value = true;
        emit('beforeChange');
      });
      dropArea?.addEventListener('dragover', (e) => {
        e.stopPropagation();
        e.preventDefault();
        labelText.value = '松开鼠标完成';
        activeFile.value = true;
      });
    }
  });
</script>

<template>
  <div :class="['i-optfile-default', customClass]">
    <input
      ref="refInp"
      type="file"
      hidden
      :accept="accept"
      :multiple="multiple"
      @change="textchange"
    />
    <div class="i-preview-img-box">
      <transition-group name="list-img">
        <template v-if="targetType == 'box' && imgListShow && !showFileList">
          <div v-for="(item, index) in File" :key="index" class="i-preview-img-img">
            <div class="i-preview-img-actions">
              <img :src="item.preImgUrl" alt="" />
              <div class="customArea">
                <!-- <slot v-if="$slots['defalut']"></slot> -->
                <i-icon name="delete" @click="deleteImg(index)" />
                <!-- <i v-else class="customIcon delete" @click="deleteImg(index)"></i> -->
              </div>
            </div>
          </div>
        </template>
      </transition-group>
      <i-button
        v-if="targetType == 'btn'"
        :type="type"
        :icon="icon"
        icon-position="left"
        @click="changeFile"
        >{{ label }}</i-button
      >
      <div
        v-if="targetType == 'box'"
        ref="refDiv"
        :class="[
          'i-optfile-area',
          { 'i-optfile-area.big': size == 'big', 'i-optfile-area-active': activeFile },
        ]"
      >
        <div class="i-optfile-area-text" @click="changeFile">
          <div class="i-optfile-text-pos">
            <i-icon name="upload-filled" class="icon-file" />
            <!-- <i :class="icon" class="icon-file"></i> -->
            <p v-if="label != ''">{{ labelText }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 显示文件列表 -->
    <div v-if="FileList.length > 0 && showFileList" class="i-optfile-filelist">
      <ul>
        <transition-group name="list">
          <li v-for="(item, index) in FileList" :key="index">
            <div>
              <!-- <i class="file-icon"></i> -->
              <i-icon name="upload-filled" class="file-icon" />
              <span>{{ item.name }}</span>
              <i-icon name="delete" class="i-delete" @click="deleteImg(index)" />
              <!-- <i @click="deleteImg(index)"></i> -->
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './optfile.scss';
</style>
