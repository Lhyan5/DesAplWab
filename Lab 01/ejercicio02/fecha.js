var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile('./form.html', function(err, html) {
    var html_string = html.toString();

    if(req.url.indexOf('?')>0) {
      var url_data = req.url.split('?');
      }

      var ahora = new Date();

      var hora = new Date().getHours();
      var minuto = new Date().getMinutes();
      var segundo = new Date().getSeconds();
      var mili = new Date().getMilliseconds();

      var rest = mili + (segundo * 1000) + (minuto * 1000 * 60) + (hora * 1000 * 60 * 60);

      var actual = new Date().getTime();
      var nmsss = actual - rest - 18000000;

      var fechaFin = new Date(url_data).getTime();

      var diff = fechaFin - nmsss;
      var resultado = Math.round(diff / (1000 * 60 * 60 * 24));
      console.log(resultado);


      html_string = html_string.replace('{dias}', resultado);
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(html_string);

    res.end();

  });
}).listen(8080);
