
const http = require('http');

// creates HTTP server connection
const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello World!');
    response.end();
  }

  if (request.url === '/help') {
    response.write(JSON.stringify([1, 2, 3]));
    response.end();
  }
});

// // starts connection; relays message if connected.
// server.on('connection', (socket) => {
//   console.log('New connection...');
// });

// port number to listen for
server.listen(3000);

console.log('Listening on port 3000...');
