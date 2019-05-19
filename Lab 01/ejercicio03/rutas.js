var http = require('http');
var url = require('url');
var fs = require('fs');

function enrutador(path, res) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Ocurrio algo!!! Muy malo :( ');
        } else {
            res.write(data);
        }
        res.end();
    });
}

function requer(request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});

      var path = url.parse(request.url).pathname;
      switch (path) {
          case '/':
              enrutador('./guia.html', response);
              break;
          case '/inicio':
              enrutador('./inicio.html', response);
              break;
          case '/galeria':
              enrutador('./fotos.html', response);
              break;      
          default:
              response.writeHead(404);
              response.write('Ruta no disponible intente con / o /inicio o /galeria');
              response.end();
      }

  }

http.createServer(requer).listen(8080);