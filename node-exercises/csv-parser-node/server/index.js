const server = require('http').createServer();

server.on('request', (req, res) => {
  res.end('Hello World\n');
});
process.stdout.write('Server listening to localhost:8000');
server.listen(8000);
