var http = require('http'),
    fs = require('fs');

var parametros = [],
valores = [],
arreglo_parametros = [];

http.createServer(function(req, res) {
  fs.readFile('./forma.html', function(err, html) {
    var html_string = html.toString();

      var fecha = new Date();
      var hora1 = fecha.getHours();
      var hora2 = fecha.getHours();
      var min = fecha.getMinutes();
      var seg = fecha.getSeconds();

      hora2 = ((hora2 + 11) % 12 + 1);
      if(hora1>=13) {
        var comp = (hora2+12) + ':'+ min + ':' + seg;
        var comp1 = hora1 + ':'+ min + ':' + seg + ' pm';
      }else{
        var comp = hora2 + ':'+ min + ':' + seg;
        var comp1 = hora1 + ':'+ min + ':' + seg + ' am';
      }
     
    res.writeHead(200,{'Content-type':'text/html'});
    html_string = html_string.replace('{hora1}',comp1);
    html_string = html_string.replace('{hora2}',comp);
    res.write(html_string);
    res.end();

  });
}).listen(8080);
