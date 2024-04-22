var http = require('http');

http.createServer(function (req, res) {
   res.write("CC");
   res.end();
}).listen(8080);