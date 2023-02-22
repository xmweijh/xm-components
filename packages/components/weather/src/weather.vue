<script lang="ts" setup>
  import { onMounted, computed, reactive, ref } from 'vue';
  import type { CSSProperties } from 'vue';
  import axios from 'axios';
  import { isUndefined, addUnit } from '../../../utils';
  import IButton from '../../button';
  import IDialog from '../../dialog';
  import IInput from '../../input';
  import cityNameJson from './city.json';
  //组件接收的值类型
  interface IweatherProps {
    userId?: string | number;
    secret?: string | number;
    width?: string | number;
    background?: string | number;
  }
  //withDefaults可以为props添加默认值等
  const weatherProps = withDefaults(defineProps<IweatherProps>(), {
    userId: 81163588,
    secret: 'jYec64Sn',
    width: '300px',
    background: '#eee',
  });
  // 天气接口返回的数据类型
  // type WetherApi = {
  //     nums?:number, //今日实时请求次数
  //     cityid?:string,
  //     date?:string,
  //     week?:string,
  //     update_time?:string, //更新时间
  //     wea?:string, //天气情况
  //     wea_img?:string, //天气标识
  //     tem?:string, //实况温度
  //     tem_day?:string, //白天温度(高温)
  //     tem_night?:string, //夜间温度(低温)
  //     win?:string, //风向
  //     win_speed?:string, //风力
  //     win_meter?:string
  //     pressure?:string, //气压
  //     humidity?:string //湿度
  // }

  // 传入需更改的样式，动态定义
  const baseStyle = computed<CSSProperties>(() => {
    if (!weatherProps.width && !weatherProps.background) return {};
    return {
      '--width': isUndefined(weatherProps.width) ? undefined : addUnit(weatherProps.width),
      '--background': weatherProps.background,
    };
  });

  let weathObj = reactive({
    data: {
      nums: '', //今日实时请求次数
      cityid: '',
      city: '',
      air: '',
      date: '',
      week: '',
      update_time: '', //更新时间
      wea: '', //天气情况
      wea_img: '', //天气标识
      tem: '', //实况温度
      tem_day: '', //白天温度(高温)
      tem_night: '', //夜间温度(低温)
      win: '', //风向
      win_speed: '', //风力
      win_meter: '',
      pressure: '', //气压
      humidity: '', //湿度
    },
  });
  let isPopup = ref(false);
  let inputCityVal = '';

  // 请求城市天气
  const getCityWeatherFn = (cityId: String | Number) => {
    let weatherUrl =
      'https://www.yiketianqi.com/free/day?appid=' +
      weatherProps.userId +
      '&appsecret=' +
      weatherProps.secret +
      '&unescape=1&cityid=' +
      cityId;
    axios.get(weatherUrl).then((d) => {
      weathObj.data = d.data;
    });
  };

  // 显示切换城市
  let showSwitchCity = () => {
    inputCityVal = '';
    isPopup.value = !isPopup.value;
  };
  // 隐藏切换城市
  let hideSwitchCity = () => {
    isPopup.value = false;
  };

  // 监听输入城市
  let cityName = '';
  const inputCityName = (e) => {
    cityName = e.target.value;
  };
  // 输入确认按钮
  let confirmBtn = () => {
    if (!cityName) {
      alert('城市名不能为空');
      return;
    }
    filterCity(cityName);
    isPopup.value = false;
  };

  // 筛选城市
  const filterCity = (n: String) => {
    let result = cityNameJson.filter((obj) => {
      return obj.cityZh == n;
    });
    if (result.length > 0) {
      getCityWeatherFn(result[0].id);
    } else {
      alert('请输入正确的城市名');
    }
  };
  onMounted(() => {
    getCityWeatherFn(101120101);
    // 监听键盘的enter
    document.addEventListener('keyup', (e) => {
      if (e.code == 'Enter') {
        confirmBtn();
      }
    });
  });

  defineOptions({
    name: 'IWeathert',
  });
</script>

<template>
  <div>
    <div class="weatherBase" :style="baseStyle">
      <div class="leftContent">
        <div class="area">
          <div>{{ weathObj.data.city }}</div>
          <IButton type="primary" size="mini" round @click="showSwitchCity()">切换</IButton>
        </div>
        <div class="tem">
          <div class="temText">{{ weathObj.data.tem }}</div>
          <div class="">°</div>
        </div>
      </div>
      <div class="rightContent">
        <div>{{ weathObj.data.update_time }}更新</div>
        <div>空气质量{{ weathObj.data.air }}</div>
        <div>{{ weathObj.data.win }}{{ weathObj.data.win_speed }}</div>
        <div>相对温度{{ weathObj.data.humidity }}</div>
      </div>
      <IDialog v-if="isPopup" v-model="isPopup" title="切换城市" width="30%" center>
        <IInput
          v-model="inputCityVal"
          class="mb-4"
          placeholder="请输入城市名"
          size="mini"
          @change="inputCityName"
        ></IInput>
        <template #footer>
          <span class="dialog-footer">
            <IButton @click="hideSwitchCity()">取消</IButton>
            <IButton type="primary" @click="confirmBtn()"> 确认 </IButton>
          </span>
        </template>
      </IDialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './weather.scss';
</style>
