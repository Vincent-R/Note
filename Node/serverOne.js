/**
 * node.js创建服务简单尝试
 * 引入模块尝试
 * 读取文件尝试
 */
var http = require('http');
//var fs = require('fs');//读取文件的模块
var Hello = require('./hello'); //引入自定义模块

http.createServer(function(request, response) {
    //发送HTTP头部
    //HTTP状态值：200 ：OK
    //内容类型：text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // fs.readFile('文件url',function(err, data){
    //     //这是回调函数，读取文件是异步执行的
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(data.toString());
    // });
    hello = new Hello();
    hello.setName('lalala');
    hello.sayHello();

    //发送响应数据
    response.end(hello.sayHello());
}).listen(8080);

//终端打印如下信息
console.log('Server Running at 8080');