var http=require("http");
var path=require('path');
var url=require('url');
var mimeTypes = {
'.js' : 'text/javascript',
'.html': 'text/html',
'.css' : 'text/css'
};
var callBack = function() {
  console.log("Timeout Occurred !");
}
//define the pages
var pages = [
  {id:1, route: 'index.html', output: function() {
    var f = 'content/index.html';
    var fs = require('fs');
    fs.exists(f, function(exists) {
      console.log(exists ? this.route + " is there": this.route + " doesn't exist");
      if (exists) {
        fs.readFile(f, function(err, data) {
          var headers={'Content-type': mimeTypes[path.extname('index.html')]};
          response.writeHead(200, headers);
          response.end(data);
        });
        return;
      }
    });
  }},
  {id:2, route:'hello', output: function() {
    return "Hello World, This is Ramesh Samarasam !";
  }},
  {id:3, route: 'about', output: 'A simple routing with Node example'},
  {id:4, route: '/about/this', output: 'Multilevel routing with Node'},
  {id:5, route: '/about/node', output: 'Evented I/O for V8 JavaScript.'},
  {id:6, route: 'another page', output: function() {return 'Here is '+this.route;}},
];

http.createServer(function (request, response) {
  var uri=decodeURI(request.url);
  var basename=path.basename(decodeURI(request.url));
  console.log('basename:'+basename + ' uri:'+ uri)
  //localhost:8080?id=2
  var id = url.parse(decodeURI(request.url), true).query.id;
  pages.forEach(function(page) {
    if (page.route === uri || page.id == id || page.route == uri) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(typeof page.output === 'function'
      ? page.output() : page.output);
      console.log(request.headers);

    }
  });
  if (!response.finished) {
    response.writeHead(404);
    response.end('Page Not Found!');
  }
}).listen(8081);
console.log("Server running at http://127.0.0.1:8081/");
