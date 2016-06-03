var http=require("http");
  http.createServer(function (request, response) {
    // send the HTTP header
    // HTTP status: 200:OK
    // Content Type: text/plain
    response.writeHead(200, {'content-type':'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');

}).listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
