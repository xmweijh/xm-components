import { withInstall } from '../../utils/install';
import icon from './src/icon.vue';
export * from './src/icon';

export const IIcon = withInstall(icon); // 增加类型

export default IIcon;
