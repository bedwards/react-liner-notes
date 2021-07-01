const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const filename = req.url.slice(1) || 'index.html';
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream(filename).pipe(res);
});

server.listen(process.env.PORT || 3000);
