import { createServer } from 'node:http';
createServer((_request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  response.end('Hostingo Node deployment test passed · release 3\n');
}).listen(Number(process.env.PORT || 3000), '0.0.0.0');
