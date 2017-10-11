var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log('path:' + pathName);

        route(pathName);

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('hello');
        response.end();
    }

    http.createServer(function(request, response) {
        onRequest(request, response);
    }).listen(8080);

    console.log('Server Running at 8080');
}

exports.start = start;