import { withInstall } from '../../utils/install';
import weather from './src/weather.vue';

export const IWeather = withInstall(weather); // 增加类型

export default IWeather;
