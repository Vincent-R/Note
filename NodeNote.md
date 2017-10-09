### 简介

* 简单的说 Node.js 就是运行在服务端的 JavaScript
* Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台
* Node.js 是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好

### Node.js应用组成部分

1. 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块
2. 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器
3. 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据

### NPM

NPM是随同Node.js一起安装的包管理工具。常见的使用场景有以下几种：
* 允许用户从NPM服务器下载别人编写的第三方包到本地使用
* 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用
* 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用