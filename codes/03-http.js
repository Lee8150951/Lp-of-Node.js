// 使用Node.js轻松构建一个服务器
// 在Node中专门提供了一个核心模块：http
// 其职责就是构建编写服务器
var http = require('http');
// 使用http.creatServer()方法构建一个web服务器
var server = http.createServer();
// 整体流程：（对数据进行服务）
// 发请求->接受请求->处理请求->发送响应

// 注册request请求时间，当客户端请求过来则自动触发request请求事件，然后处理回调函数
server.on('request', function() {
    console.log('get browser request');
})

// 绑定端口号，启动服务器
server.listen(3000, function() {
    console.log('server is started, get it by http://127.0.0.1:3000/ now');
});