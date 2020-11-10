var http = require('http');
var server = http.createServer();
// request请求事件处理函数，需要接收两个参数：
//  Request请求对象：
//  请求对象可以用来获取客户端的一些请求
//  Request响应对象：
//  可以用来给客户端发送响应消息
server.on('request', function(request, response) {
    console.log('get browser request, the url is: ' + request.url);
    // response对现有一个方法：write可以用来给客户端发送响应数据
    // write可以使用多次，但是必须用write结束，否则客户端会一直等待
    response.write('Hello World!');
    // 告诉客户端会话结束，可以呈递用户
    response.end();
    // 目前的响应非常弱，无论获取什么数据都只能反馈同一个数据
})

// 绑定端口号，启动服务器
server.listen(3000, function() {
    console.log('server is started, get it by http://127.0.0.1:3000/ now');
});