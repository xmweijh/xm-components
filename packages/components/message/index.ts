import { withInstallFunction } from '../../utils/install';
import message from './src';

export const IMessage = withInstallFunction(message, '$IMssage'); // 增加类型

export default IMessage;
