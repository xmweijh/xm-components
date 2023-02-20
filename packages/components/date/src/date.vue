<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { createNamespace } from '../../../utils';
  import IInput from '../../input';
  import IIcon from '../../icon';
  import { DateProps } from './date';

  const props = defineProps(DateProps);
  const emit = defineEmits(['update:modelValue', 'clear', 'open', 'close', 'change']);
  const { createBEM } = createNamespace('date');

  const disStartDate = ref(new Date(props.startDate + ' 00:00:00').getTime());
  const disEndDate = ref(new Date(props.endDate + ' 00:00:00').getTime());
  const dateVal = ref<string | number | undefined>(props.modelValue);
  const show = ref<boolean>(false);
  const daysList = ref<Date[]>([]);
  const placeholders = ref<string>(props.placeholder || '');
  const dateShow = ref<boolean>(true);
  const yearList = ref<number[]>([]);
  const monthList = ref<number[]>([]);
  const monthShow = ref<boolean>(false);
  const color = ref<string>(props.customActiveColor);

  // 给 Date.prototype 添加一个 format 方法
  Date.prototype.format = function (fmt: string): string {
    // 如果格式字符串中有 y（年份）的话
    if (/(y+)/.test(fmt)) {
      // 利用正则表达式获取年份的位数，并替换对应数量的 y 为年份
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').slice(4 - RegExp.$1.length));
    }
    // 定义一个对象，存储其他需要格式化的日期信息
    const o: { [key: string]: number } = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分钟
      's+': this.getSeconds(), // 秒
    };
    // 循环遍历 o 中的属性
    for (let k in o) {
      // 如果格式字符串中有当前属性对应的字符
      if (new RegExp(`(${k})`).test(fmt)) {
        // 将属性值转换成字符串，并用 padLeftZero 函数补全前导零（如果需要的话）
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
    // 返回格式化后的日期字符串
    return fmt;
  };
  function padLeftZero(str: string): string {
    return ('00' + str).slice(str.length);
  }

  // 定义了一个 IIFE，用于封装一个 Date 对象。
  const dateObj = (function () {
    let _date = dateVal.value === '' ? new Date() : new Date(dateVal.value);
    return {
      getDate: function () {
        return _date;
      },
      setDate: function (date: Date) {
        _date = date;
      },
    };
  })();
  // 获取对应月份的日期信息, start表示月历的第一天是这个月的第几天(可以为负)  0是上个月最后一天
  const getDays = (year: number, month: number, start: number) => {
    daysList.value = [];
    // 42 = 6*7  日历一页的天数
    for (let i = start; i <= 42; i++) {
      const day = {
        dates: new Date(year, month, i).format(props.format),
        time: new Date(year, month, i).getTime(),
        year: new Date(year, month, i).getFullYear(),
        month: new Date(year, month, i).getMonth() + 1,
        day: new Date(year, month, i).getDate(),
      };
      daysList.value.push(day);
    }
  };

  const selDate = ref({
    date: dateObj.getDate().format(props.format),
    year: dateObj.getDate().getFullYear(),
    month: dateObj.getDate().getMonth() + 1,
    day: dateObj.getDate().getDate(),
  });
  const getWeek = (date: string) => {
    return new Date(date).getDay() == 0 ? 7 : new Date(date).getDay();
  };
  const setDate = () => {
    selDate.value.date = dateObj.getDate().format(props.format);
    selDate.value.year = dateObj.getDate().getFullYear();
    selDate.value.month = dateObj.getDate().getMonth() + 1;
  };

  // 上一月
  const prevMonth = () => {
    let date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    setDate();
    // 2 - getWeek(selDate.value.date)代表月历第一天是该月第几天
    // 注意的是第0天使上个月最后一天
    getDays(
      dateObj.getDate().getFullYear(),
      dateObj.getDate().getMonth(),
      2 - getWeek(selDate.value.date),
    );
  };
  // 下一月
  const nextMonth = () => {
    let date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    setDate();
    getDays(
      dateObj.getDate().getFullYear(),
      dateObj.getDate().getMonth(),
      2 - getWeek(selDate.value.date),
    );
  };
  // 上一年
  const prevYear = () => {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear() - 1, dateObj.getDate().getMonth(), 1));
    setDate();
    getDays(
      dateObj.getDate().getFullYear(),
      dateObj.getDate().getMonth(),
      2 - getWeek(selDate.value.date),
    );
  };
  // 下一年
  const nextYear = () => {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear() + 1, dateObj.getDate().getMonth(), 1));
    setDate();
    getDays(
      dateObj.getDate().getFullYear(),
      dateObj.getDate().getMonth(),
      2 - getWeek(selDate.value.date),
    );
  };

  const focus = (): void => {
    show.value = true;
    const date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), 1));
    getDays(
      dateObj.getDate().getFullYear(),
      dateObj.getDate().getMonth(),
      2 - getWeek(dateObj.getDate().toLocaleDateString()),
    );
    emit('open');
  };

  const blur = (): void => {
    show.value = false;
    if (props.type === 'date') {
      dateShow.value = true;
      monthShow.value = false;
    }
    emit('close');
  };

  const clear = (): void => {
    dateVal.value = '';
    emit('update:modelValue', dateVal.value);
    emit('clear');
  };

  const vClickOutside = {
    // 在元素挂载前执行的生命周期钩子函数
    beforeMount(el) {
      // 定义一个函数，处理点击事件
      const handler = (e) => {
        // 因为svg是对象类型没有indexOf方法 所以先转为字符串
        const tClassName = String(e.target.className);
        if (!props.disabled) {
          // 如果组件类型为年份份选择
          if (props.type === 'year') {
            // 如果点击事件的目标在 el 内，并且不是选择日期的 span 元素，不是清除图标的 span 元素，不是年份选择面板的 span 元素
            if (
              el.contains(e.target) &&
              tClassName.indexOf('choosDateSpan') === -1 &&
              tClassName.indexOf('clearable-icon') === -1 &&
              tClassName.indexOf('mzl-chooseYear-span') === -1
            ) {
              // 如果选择面板没有显示，则让选择面板显示出来
              if (!show.value) {
                focus();
              }
            } else {
              // 如果选择面板已经显示，则让选择面板消失
              if (show.value) {
                blur();
              }
            }
            // 如果组件类型为月份选择
          } else if (props.type === 'month') {
            if (
              el.contains(e.target) &&
              tClassName.indexOf('choosDateSpan') === -1 &&
              tClassName.indexOf('clearable-icon') === -1 &&
              tClassName.indexOf('mzl-chooseMonth-span') === -1
            ) {
              if (!show.value) {
                focus();
              }
            } else {
              if (show.value) {
                blur();
              }
            }
            // 如果组件类型为日期选择
          } else {
            if (
              el.contains(e.target) &&
              tClassName.indexOf('choosDateSpan') === -1 &&
              tClassName.indexOf('clearable-icon') === -1 &&
              tClassName.indexOf('mzl-today-span') === -1
            ) {
              if (!show.value) {
                focus();
              }
              // 如果点击事件的目标不是禁用日期的 span 元素
            } else if (tClassName.indexOf('date-span-disabled') === -1) {
              // 如果选择面板已经显示，则让选择面板消失
              if (show.value) {
                blur();
              }
            }
          }
        }
      };
      // 将处理函数绑定到 el.handler 上
      el.handler = handler;
      // 如果 document 存在，则在 document 上监听 click 事件
      if (typeof document !== 'undefined') {
        document.addEventListener('click', handler);
      }
    },
    unmounted(el) {
      if (typeof document !== 'undefined') {
        document.removeEventListener('click', el.handler);
      }
    },
  };

  // 定义组件选中日期的方法
  const selectDate = (item) => {
    // 校验选中的日期是否在允许范围内
    if (item.time >= disStartDate.value && item.time <= disEndDate.value) {
      // 根据选中日期的月份调整月份
      if (item.month > selDate.value.month) {
        nextMonth();
      } else if (item.month < selDate.value.month) {
        prevMonth();
      }

      // 更新选中的日期值
      dateVal.value = item.dates as string;
      selDate.value.date = dateVal.value;
      selDate.value.day = item.day;

      // 触发组件事件，将选中日期值返回给父组件
      emit('update:modelValue', dateVal.value);
      emit('change', dateVal.value);
      blur();
    }
  };

  // 定义获取年份列表的方法
  const getYearList = (): number[] => {
    let list: number[] = [];
    for (let i = 0; i < 10; i++) {
      list.push(new Date(selDate.value.year) - parseInt(new Date(selDate.value.year) % 10) + i);
    }
    return list;
  };

  // 年份选择上一年
  const getPrevYear = () => {
    selDate.value.year = selDate.value.year - 10;
    yearList.value = getYearList();
  };
  // 年份选择下一年
  const getNextYear = () => {
    selDate.value.year = selDate.value.year + 10;
    yearList.value = getYearList();
  };
  // 选择年
  const chooseYear = () => {
    dateShow.value = false;
    yearList.value = getYearList();
  };
  // 选择月
  const chooseMonth = () => {
    dateShow.value = false;
    monthShow.value = true;
  };

  // 选择日期或年份
  const dateYearSel = (item: number) => {
    // 如果当前选择的是日期模式
    if (props.type == 'date') {
      // 显示月份选择器，更新选中的年份
      monthShow.value = true;
      selDate.value.year = item;
      // 将日期对象的年份设置为选中的年份，然后更新日期显示
      dateObj.setDate(new Date(selDate.value.year, selDate.value.month - 1, 1));
      setDate();
      // 更新当前月份的天数，并将日历页面移动到第一行
      getDays(
        dateObj.getDate().getFullYear(),
        dateObj.getDate().getMonth(),
        2 - getWeek(dateObj.getDate().toLocaleDateString()),
      );
    }
    // 如果当前选择的是年份模式
    else if (props.type == 'year') {
      // 更新选中的日期和年份，隐藏月份和日期选择器，触发更新事件，然后失去焦点
      dateVal.value = item;
      selDate.value.year = item;
      monthShow.value = false;
      dateShow.value = false;
      emit('update:modelValue', dateVal.value);
      emit('change', dateVal.value);
      blur();
    }
    // 如果当前选择的是月份模式
    else {
      // 显示月份选择器，更新选中的年份
      monthShow.value = true;
      dateShow.value = false;
      selDate.value.year = item;
    }
  };
  // 当月份选择器选择月份时执行的函数
  const dateMonthSel = (item) => {
    if (props.type == 'month') {
      // 如果props的type属性是'month'
      dateVal.value = new Date(selDate.value.year + '-' + item.m1).format('yyyy-MM');
      selDate.value.month = item.m1; // 更新selDate.value的月份属性
      emit('update:modelValue', dateVal.value);
      emit('change', dateVal.value);
      blur();
    } else {
      monthShow.value = false;
      dateShow.value = true; // 显示日期选择器
      selDate.value.month = item.m1 - 1;
      dateObj.setDate(new Date(selDate.value.year, selDate.value.month, 1)); // 更新dateObj对象为选择的年月的1号
      setDate(); // 更新日期数据
      getDays(
        dateObj.getDate().getFullYear(),
        dateObj.getDate().getMonth(),
        2 - getWeek(dateObj.getDate().toLocaleDateString()),
      ); // 计算当月天数，并更新日历显示
    }
  };

  const onlyYearPrev = () => {
    // 点击“上一年”按钮，当前选择的年份减 1
    selDate.value.year = selDate.value.year - 1;
  };

  const onlyYearNext = () => {
    // 点击“下一年”按钮，当前选择的年份加 1
    selDate.value.year = selDate.value.year + 1;
  };

  const showYaer = () => {
    // 点击“年份”按钮，显示年份列表，隐藏月份和日期
    dateShow.value = false;
    monthShow.value = false;
    yearList.value = getYearList();
  };

  const today = () => {
    // 点击“今天”按钮，将日期设置为今天
    const date = new Date();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
    setDate();
    getDays(
      dateObj.getDate().getFullYear(),
      dateObj.getDate().getMonth(),
      2 - getWeek(new Date(date.getFullYear(), date.getMonth(), 1)),
    );
    dateVal.value = dateObj.getDate().format(props.format);
    emit('update:modelValue', dateVal.value);
    emit('change', dateVal.value);
    blur();
  };

  onMounted(() => {
    monthList.value = [];
    for (let i = 0; i < 12; i++) {
      monthList.value.push({ m: i + 1 + '月', m1: i + 1 });
    }
    if (props.type == 'year') {
      dateShow.value = false;
      monthShow.value = false;
      yearList.value = getYearList();
    }
    if (props.type == 'month') {
      dateShow.value = false;
      monthShow.value = true;
    }
  });

  defineOptions({
    name: 'IDate',
  });
</script>

<template>
  <div v-click-outside :class="createBEM()">
    <!-- 日期选择器的容器 -->
    <div :class="createBEM('inner')">
      <!-- 日期选择器内部容器 -->
      <IInput
        v-model="dateVal"
        prefix-icon="calendar"
        icon="calendar"
        size="small"
        :clearable="clearable"
        :placeholder="placeholders"
        :disabled="disabled"
        @clear="clear"
      >
        <!-- input 输入框 -->
      </IInput>
      <transition name="date-fade">
        <!-- 过渡效果，切换日期和年月模式时有过渡效果 -->
        <div v-if="show" :class="[createBEM('option'), createBEM(`option--${size}`), customClass]">
          <!-- 日期选择器中的选项容器 -->
          <div :class="createBEM('fipx')">
            <!-- 日期、年、月选择的容器 -->
            <div :class="createBEM('date')">
              <!-- 容器头部 -->
              <div :class="[createBEM('header'), createBEM(`header--${size}`)]">
                <!-- 日期选择器头部，包括年月选择、向前向后翻页 -->
                <div :class="createBEM('header__btn--left')">
                  <IIcon v-if="monthShow" name="leftDA" @click="onlyYearPrev"></IIcon>
                  <IIcon v-if="!dateShow && !monthShow" name="leftDA" @click="getPrevYear"></IIcon>
                  <IIcon v-if="dateShow" name="leftDA" @click="prevYear"></IIcon
                  ><IIcon
                    v-if="dateShow && type == 'date'"
                    name="arrow-left"
                    @click="prevMonth"
                  ></IIcon>
                  <!-- 月份或年份的向前翻页按钮 -->
                </div>
                <div :class="createBEM('header__btn--center')">
                  <!-- 年月选择框 -->
                  <span v-show="dateShow && type == 'date'" class="chooseYear" @click="chooseYear"
                    >{{ selDate.year }} 年
                  </span>
                  <span
                    v-show="dateShow && type == 'date'"
                    class="chooseMonth"
                    @click="chooseMonth"
                  >
                    {{ selDate.month }} 月</span
                  >
                  <span v-show="monthShow" class="chooseMonth" @click="showYaer"
                    >{{ selDate.year }} 年
                  </span>
                  <span v-show="(!dateShow && !monthShow) || type == 'year'">{{
                    yearList[0] + ' 年 - ' + yearList[yearList.length - 1] + ' 年'
                  }}</span>
                  <!-- 年月选择按钮 -->
                </div>
                <div :class="createBEM('header__btn--right')">
                  <!-- 日期选择器头部向后翻页按钮 -->
                  <IIcon
                    v-if="dateShow && type == 'date'"
                    name="arrow-right"
                    @click="nextMonth"
                  ></IIcon>
                  <IIcon v-if="dateShow" name="rightDA" @click="nextYear"></IIcon>
                  <IIcon v-if="!dateShow && !monthShow" name="rightDA" @click="getNextYear"></IIcon>
                  <IIcon v-if="monthShow" name="rightDA" @click="onlyYearNext"></IIcon>
                </div>
              </div>
              <!-- 日期选择器 -->
              <div
                v-show="dateShow && type == 'date'"
                :class="[createBEM('content'), createBEM(`content--${size}`)]"
              >
                <div :class="createBEM('content__date')">
                  <table>
                    <tbody>
                      <tr>
                        <th><span>一</span></th>
                        <th><span>二</span></th>
                        <th><span>三</span></th>
                        <th><span>四</span></th>
                        <th><span>五</span></th>
                        <th><span>六</span></th>
                        <th><span>日</span></th>
                      </tr>
                      <tr>
                        <!-- 第一排单格内容 -->
                        <template v-for="(item, index) in daysList" :key="index">
                          <td
                            v-if="index < 7"
                            :class="{
                              'date-span-disabled':
                                item.time < disStartDate || item.time > disEndDate,
                            }"
                            @click="selectDate(item)"
                          >
                            <span
                              :class="[
                                'choosDateSpan',
                                { active: selDate.date == item.dates },
                                item.month < selDate.month
                                  ? 'prev-month'
                                  : item.month == selDate.month
                                  ? ''
                                  : 'next-month',
                                {
                                  'date-span-disabled':
                                    item.time < disStartDate || item.time > disEndDate,
                                },
                              ]"
                              :title="item.dates"
                              >{{ item.day }}</span
                            >
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <!-- 第二排单格内容 -->
                        <template v-for="(item, index) in daysList" :key="index">
                          <td
                            v-if="index >= 7 && index < 14"
                            :class="{
                              'date-span-disabled':
                                item.time < disStartDate || item.time > disEndDate,
                            }"
                            @click="selectDate(item)"
                          >
                            <span
                              :class="[
                                'choosDateSpan',
                                { active: selDate.date == item.dates },
                                item.month < selDate.month
                                  ? 'prev-month'
                                  : item.month == selDate.month
                                  ? ''
                                  : 'next-month',
                                {
                                  'date-span-disabled':
                                    item.time < disStartDate || item.time > disEndDate,
                                },
                              ]"
                              :title="item.dates"
                              >{{ item.day }}</span
                            >
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <!-- 第三排单格内容 -->
                        <template v-for="(item, index) in daysList" :key="index">
                          <td
                            v-if="index >= 14 && index < 21"
                            :class="{
                              'date-span-disabled':
                                item.time < disStartDate || item.time > disEndDate,
                            }"
                            @click="selectDate(item)"
                          >
                            <span
                              :class="[
                                'choosDateSpan',
                                { active: selDate.date == item.dates },
                                item.month < selDate.month
                                  ? 'prev-month'
                                  : item.month == selDate.month
                                  ? ''
                                  : 'next-month',
                                {
                                  'date-span-disabled':
                                    item.time < disStartDate || item.time > disEndDate,
                                },
                              ]"
                              :title="item.dates"
                              >{{ item.day }}</span
                            >
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <!-- 第四排单格内容 -->
                        <template v-for="(item, index) in daysList" :key="index">
                          <td
                            v-if="index >= 21 && index < 28"
                            :class="{
                              'date-span-disabled':
                                item.time < disStartDate || item.time > disEndDate,
                            }"
                            @click="selectDate(item)"
                          >
                            <span
                              :class="[
                                'choosDateSpan',
                                { active: selDate.date == item.dates },
                                item.month < selDate.month
                                  ? 'prev-month'
                                  : item.month == selDate.month
                                  ? ''
                                  : 'next-month',
                                {
                                  'date-span-disabled':
                                    item.time < disStartDate || item.time > disEndDate,
                                },
                              ]"
                              :title="item.dates"
                              >{{ item.day }}</span
                            >
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <!-- 第五排单格内容 -->
                        <template v-for="(item, index) in daysList" :key="index">
                          <td
                            v-if="index >= 28 && index < 35"
                            :class="{
                              'date-span-disabled':
                                item.time < disStartDate || item.time > disEndDate,
                            }"
                            @click="selectDate(item)"
                          >
                            <span
                              :class="[
                                'choosDateSpan',
                                { active: selDate.date == item.dates },
                                item.month < selDate.month
                                  ? 'prev-month'
                                  : item.month == selDate.month
                                  ? ''
                                  : 'next-month',
                                {
                                  'date-span-disabled':
                                    item.time < disStartDate || item.time > disEndDate,
                                },
                              ]"
                              :title="item.dates"
                              >{{ item.day }}</span
                            >
                          </td>
                        </template>
                      </tr>
                      <tr>
                        <!-- 第六排单格内容 -->
                        <template v-for="(item, index) in daysList" :key="index">
                          <td
                            v-if="index >= 35 && index < 42"
                            :class="{
                              'date-span-disabled':
                                item.time < disStartDate || item.time > disEndDate,
                            }"
                            @click="selectDate(item)"
                          >
                            <span
                              :class="[
                                'choosDateSpan',
                                { active: selDate.date == item.dates },
                                item.month < selDate.month
                                  ? 'prev-month'
                                  : item.month == selDate.month
                                  ? ''
                                  : 'next-month',
                                {
                                  'date-span-disabled':
                                    item.time < disStartDate || item.time > disEndDate,
                                },
                              ]"
                              :title="item.dates"
                              >{{ item.day }}</span
                            >
                          </td>
                        </template>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-if="showToday && type == 'date'" :class="createBEM('content__today')"
                  ><span class="mzl-today-span" @click="today">今天</span></div
                >
              </div>
              <!-- 年份选择器 -->
              <div
                v-show="(!dateShow && !monthShow) || type == 'year'"
                :class="[createBEM('year'), createBEM(`year--${size}`)]"
              >
                <div v-for="(item, index) in yearList" :key="index">
                  <span
                    :class="[{ active: selDate.year == item }, 'mzl-chooseYear-span']"
                    @click="dateYearSel(item)"
                    >{{ item }}</span
                  >
                </div>
              </div>
              <!-- 月份选择器 -->
              <div v-show="monthShow" :class="[createBEM('month'), createBEM(`month--${size}`)]">
                <div v-for="(item, index) in monthList" :key="index">
                  <span
                    :class="[{ active: selDate.month == item.m1 }, 'mzl-chooseMonth-span']"
                    @click="dateMonthSel(item)"
                    >{{ item.m }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  .I-date {
    --I-date-acitve-color: v-bind(color);
  }

  @import './date.scss';
</style>
