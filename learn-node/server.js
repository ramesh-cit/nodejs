var http=require("http");
  http.createServer(function (request, response) {
    // send the HTTP header
    // HTTP status: 200:OK
    // Content Type: text/plain
    var callBack = function() {
      console.log("Timeout Occurred !");
    }
    var bodyText = "Hello World, This is Ramesh !";
    response.setTimeout(1000, callBack);
    response.setHeader('X-Foo', 'bar');
    response.writeHead(200, {
      'Content-Length': Buffer.byteLength(bodyText),
      'Content-Type': 'text/plain' });

    console.log(request.headers);
    response.write(bodyText) // Response Body
    // Send the response body as "Hello World"
    response.end(); //close the connection

}).listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
