import { withInstall } from '../../utils/install';
import table from './src/table.vue';
export * from './src/table';

export const ITable = withInstall(table); // 增加类型

export default ITable;
