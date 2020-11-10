// 文件被加载执行了
console.log('module2 has been used!');

var foo = 'bbb';
exports.foo = 'hello';

exports.add = function(x, y) {
    return x + y;
}