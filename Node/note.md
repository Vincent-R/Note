### 简介

* 简单的说 Node.js 就是运行在服务端的 JavaScript
* Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台
* Node.js 是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好
* Node.js是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高
* Node.js的每一个API都是异步的，并作为一个独立的线程运行，使用异步函数调用，并处理并发

### Node.js应用组成部分

1. 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块
2. 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器
3. 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据

### NPM

NPM是随同Node.js一起安装的包管理工具。常见的使用场景有以下几种：
* 允许用户从NPM服务器下载别人编写的第三方包到本地使用
* 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用
* 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用

### Express
#### 简介
* express是node平台下最常用的web应用开发框架。

#### 安装
1. `npm install -g express`//全局安装express(默认安装C:\Users\Administrator\AppData\Roaming\npm\node_modules)
2. `npm install -g express-generator`//全局安装express命令行工具
3. `express --version`//查看express版本
4. `npm update -g express`//更新已安装的express

#### 使用 (http://www.jb51.net/article/110033.htm)
1. 创建项目
   >`express app_name`//express默认以jade作为模板引擎，模板文件为.jade类型；jade的语法与html有较大差异，对缩进也是要求严格的
   >`express app_name -e`//在项目名称的后面添加 -e 那么创建出来的模板文件就是.ejs类型，语法是与html相同的
2. 将ejs文件改为html(不是必须)
   > 若希望模板文件的后缀为.html(通常只是为了看着更舒服)，那么在手动将.ejs换成.html后，还需要对app.js文件进行设置

   >var ejs = require('ejs');  
    app.engine('.html', ejs.__express);  
    app.set('view engine', 'html');  
    //app.set('view engine', 'ejs');

   >原app.js文件  
   var path = require('path');
   ...  
   // view engine setup  
   app.set('views', path.join(__dirname, 'views'));  
   app.set('view engine', 'ejs');  
   修改后app.js  
   var path = require('path');  
   ...  
   var ejs = require('ejs');  
   ...  
   // view engine setup  
   app.set('views', path.join(__dirname, 'views'));  
   app.engine('.html', ejs.__express);  
   app.set('view engine', 'html');