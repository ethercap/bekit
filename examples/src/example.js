// 引入工具包
import * as common from '../../dist/index.js';

// 可在下方编写测试代码
var url = new common.Url('/lesson/xxx');
console.log(1, url.addParams({ a: 'aaa' }).toString());