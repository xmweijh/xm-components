import { withInstall } from '../../utils/install';
import iSwitch from './src/switch.vue';
export * from './src/switch';

export const ISwitch = withInstall(iSwitch); // 增加类型

export default ISwitch;
