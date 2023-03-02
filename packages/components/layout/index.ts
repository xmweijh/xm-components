import { withInstall } from '../../utils/install';
import col from './src/col.vue';
import row from './src/row.vue';

export const ICol = withInstall(col); // 增加类型
export const IRow = withInstall(row);

export default { ICol };
