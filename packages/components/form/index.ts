import { withInstall } from '../../utils/install';
import form from './src/form.vue';
import formItem from './src/form-item.vue';

export const IForm = withInstall(form); // 增加类型
export const IFormItem = withInstall(formItem);

export default IForm;
