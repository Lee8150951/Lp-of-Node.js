// fs是file-system的缩写，即为文件系统
// 在Node中如果想要操作文件就一定要引入fs这个核心模块
// 1.使用require方法加载fs核心模块
var fs = require('fs');
// 2.读取文件
// 第一个参数是文件路径，第二个参数是一个回调函数
// 回调函数接收两个参数
// 参数一：error；参数二：data
// 读取失败则error为错误对象，如果读取成功则error为null
// 读取成功则data为读到的数据，如果读取失败则data为null
fs.readFile('test.txt', function(error, data) {
    if(error) {
        console.log("error!");
    } else {
        console.log(data.toString());
    }
});