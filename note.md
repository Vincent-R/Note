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
   >`express app_name --view=ejs`//在项目名称的后面添加 -e 那么创建出来的模板文件就是.ejs类型，语法是与html相同的
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

   >修改后app.js  
   var path = require('path');  
   ...  
   var ejs = require('ejs');  
   ...  
   // view engine setup  
   app.set('views', path.join(__dirname, 'views'));  
   app.engine('.html', ejs.__express);  
   app.set('view engine', 'html');
3. 安装依赖包
   >进入项目文件夹，执行：`npm install`  
   下载package.json中记录的所有依赖包到node_modules文件夹
4. 启动服务
   >启动：`npm start`  
   监听bin/www,默认端口为3000，可在www文件中修改
5. 自动重启服务
   >打开package.json可以看见，监听bin/www文件的命令是node，使用node监听将会导致每次修改代码之后，需要手动重启服务。可以使用nodemon进行自动重启。  
   1.`npm install -g nodemon`//全局安装 `nodemon -v`//查看版本  
   2.将package.json中的代码修改为:  
   `"start":"nodemon ./bin/www"`  
   3.重新执行`npm start`

### Express代码相关
#### app.js文件(项目入口文件)
```
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var multer = require('multer'); 

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//获取post请求的参数时需要这个模块
app.use(bodyParser.json());// for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));// for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.use(cookieParser());
//静态文件呈现
app.use(express.static(path.join(__dirname, 'public')));

//自定义中间件，在所有http请求时都会调用，中间件是顺序执行的，next()表示执行下一个中间件，next(data)中可以添加参数，在下一个中间件中取同样的名称就可以获取传递的参数
//没有挂载的中间件，所有http请求都会调用
// app.use(function(req, res, next){
//   console.log('自定义中间件');
//   next();//调取下一个中间件，如果没有这个，http请求将被挂起，不会返回任何信息
// });

//匹配http请求路由，如果匹配上就会执行中间件里的函数，最终会返回信息。
//同时执行的函数中不会包含有next(),所以下面的404报错中间件将不会执行，如果没有匹配上，将会调用404中间件
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;//Not Found
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```
* `app.all('path', function(){...})` //特殊路由，所有的http请求都会执行里面的function
* `req.query.name` //获取get请求的name参数：http://localhost:8080/user?name=xxx&age=xxx
* `req.body.name` //获取post请求的name参数，data:{'name':'xxx'}
* `res.json({'message':'respond with a resource'});`  //返回{'meaasge':'respond with a resource'}
* `strict mode` javascript严格模式。用于消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;消除代码运行的一些不安全之处，保证代码运行的安全；提高编译器效率，增加运行速度；为未来新版本的Javascript做好铺垫。

### 模块
* `config-lite` config-lite 是一个轻量的读取配置文件的模块。config-lite 会根据环境变量`(NODE_ENV)`的不同从当前执行进程目录下的 config 目录加载不同的配置文件。如果不设置 `NODE_ENV`，则读取默认的 default 配置文件，如果设置了 `NODE_ENV`，则会合并指定的配置文件和 default 配置文件作为配置，config-lite 支持 .js、.json、.node、.yml、.yaml 后缀的文件。
* `babel`是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
* `connect-mongo` connect-mongo用于将session持久化到mongodb数据库