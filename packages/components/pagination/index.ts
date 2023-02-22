import { withInstall } from '../../utils/install';
import pagination from './src/pagination.vue';
export * from './src/pagination';

export const IPagination = withInstall(pagination); // 增加类型

export default IPagination;
