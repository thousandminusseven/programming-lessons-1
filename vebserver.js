const http = require('http')
const port = 3000;
const hostname = '127.0.0.1'; 
const server = http.createServer ((request, response) => { 
  response.statusCode =100;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hellow World\n');
});
    
server.listen (port, hostname, () =>{console.log (`servser running at http://${hostname}:${port}/` );
});
