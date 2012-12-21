/**
 * Created with IntelliJ IDEA.
 * User: 元芳
 * Date: 12-12-21
 * Time: 下午2:09
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(80);


