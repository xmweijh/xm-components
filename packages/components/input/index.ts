import { withInstall } from '../../utils/install';
import input from './src/input.vue';
export * from './src/input';

export const IInput = withInstall(input); // 增加类型

export default IInput;
