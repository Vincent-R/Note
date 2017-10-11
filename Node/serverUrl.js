var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    var pathName = url.parse(req.url).pathname;
    //解析Get请求url参数,例如：localhost:8080/user?name=xxx&url=xxx
    var params = url.parse(req.url, true).query;
    res.write('pathName:' + pathName);//pathName:/user
    res.write('\n');
    res.write('name:' + params.name);
    res.write('\n');
    res.write('url:' + params.url);
    res.end();
}).listen(8080);

console.log('running at 8080');