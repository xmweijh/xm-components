<script lang="ts" setup>
  import { computed, onMounted } from 'vue';
  import {
    ITransferProps,
    useTargetIndex,
    useComputedData,
    useRightListData,
    useCheckedData,
    useDragedItem,
  } from './transfer';
  import Selector from './trans_components/Selector.vue';
  import ListTitle from './trans_components/ListTitle.vue';
  import ButtonGroup from './trans_components/ButtonGroup.vue';
  import ListItem from './trans_components/ListItem.vue';

  //组件接收的值类型
  const transferProps = defineProps(ITransferProps);

  const options = computed(() => {
    return transferProps.data?.map(({ title }) => title);
  });

  const [targetIndex, setTargetIndex] = useTargetIndex(0);

  const [checkedData, addCheckedData, removeCheckedData] = useCheckedData();

  const [rightListData, addRightListData, removeRightListData] = useRightListData([], checkedData);

  const [dragedItem, setDragedItem] = useDragedItem();

  const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
    transferProps.data,
    targetIndex,
    rightListData,
    checkedData,
  );

  const setCheckedData = (checked, leftOrRight, item) => {
    checked ? addCheckedData(leftOrRight, item) : removeCheckedData(leftOrRight, item.id);
  };

  onMounted(() => {});

  defineOptions({
    name: 'ITransfer',
  });
</script>

<template>
  <div>
    <div>
      <Selector :data="options" @select-change="setTargetIndex"></Selector>
    </div>
    <div class="transfer">
      <div class="box left-list" @dragover.prevent @drop="removeRightListData([dragedItem])">
        <ListTitle :title="leftTitle"></ListTitle>
        <div>
          <ListItem
            :data="leftListData"
            left-or-right="left"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></ListItem>
        </div>
      </div>
      <ButtonGroup
        :left-button-disabled="transferButtonDisabled.left"
        :right-button-disabled="transferButtonDisabled.right"
        @left-button-click="removeRightListData(checkedData.right)"
        @right-button-click="addRightListData(checkedData.left)"
      ></ButtonGroup>
      <div class="box right-list" @dragover.prevent @drop="addRightListData([dragedItem])">
        <ListTitle :title="rightTitle"></ListTitle>
        <div>
          <ListItem
            :data="rightListData"
            left-or-right="right"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></ListItem>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './transfer.scss';
</style>
