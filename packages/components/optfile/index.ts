import { withInstall } from '../../utils/install';
import optfile from './src/optfile.vue';
export * from './src/optfile';

export const IOptfile = withInstall(optfile); // 增加类型

export default IOptfile;
