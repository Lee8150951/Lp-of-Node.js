var fs = require('fs');
// 1.写文件使用writeFile
// 第一个参数是文件的路径，第二个参数是文件内容，第三个参数是回调函数
// 回调函数的参数只有一个error
fs.writeFile('test.txt', 'Hello Node.js！', function(error) {
    if(error) {
        console.log("error!");
    } else {
        console.log("success!");
    }
});