// node.js没有DOM和BOM
// Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都包在了一个具名的核心模块中
// 例如文件操作的fs核心模块、http服务构建的http模块、path路径操作模块、os操作系统信息模块等等

// 获取机器信息
var os = require('os');

// 用来操作路径
var path = require('path')

// 获取当前机器的CPU信息
console.log(os.cpus());

// memory内存
console.log(os.totalmem());

// 获取一个路径中的拓展名部分
console.log(path.extname('c:/Users/61958/Desktop/node.js/codes/test.txt'));