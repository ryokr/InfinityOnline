var http = require('http');

http.createServer(function (req, res) {
   res.write("Weeeeee");
   res.end();
}).listen(8080);
