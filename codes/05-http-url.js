var http = require('http');
// 1.创建server
var server = http.createServer();
// 2.监听request请求事件，设置请求处理函数
server.on('request', function(req, res) {
    // ①获取请求路径
    var url = req.url;
    // ②判断路径，处理响应
    if(url === '/') {
        res.end('index page');
    } else if(url === '/login') {
        res.end('login page');
    } else if(url === '/products'){
        var products = [
            {
                name: 'iPhone11',
                price: 6499
            },
            {
                name: 'iPhoneX',
                price: 5499
            },
            {
                name: 'iPhone8',
                price: 4499
            }
        ]
        // 响应内容只能是二进制数据或者字符串，其他都不行
        res.end(JSON.stringify(products));
    }
})
// 3.绑定端口号，启动服务
server.listen(3000, function () {
    console.log('the server has started.');
});