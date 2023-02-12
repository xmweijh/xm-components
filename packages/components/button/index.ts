import { withInstall } from '../../utils/install';
import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';

export const IButton = withInstall(Button); // 增加类型
export const IButtonGroup = withInstall(ButtonGroup);

export default IButton;
