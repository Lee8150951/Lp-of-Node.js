// 用于加载模块
// 在node中模块有三种：
//  具名的核心模块
//  用户自己编写的文件模块
//      相对路径必须加./
console.log('module1 has been used!');
var mod2foo = require('./07-easymodule2');
console.log('module1 is end!');
// 在node.js中没有全局作用域，只有模块作用域
// 默认都是封闭的

// 模块之间的通信
// 有时候加载文件模块的目的不是单纯为了执行代码
// 更重要的是为了使用里面的某一个成员
// 在每个文件模块中都提供了一个对象：exports
// 将所有需要被外部访问的对象的成员挂载到exports中
console.log(mod2foo.foo);
console.log(mod2foo.add(12, 13));